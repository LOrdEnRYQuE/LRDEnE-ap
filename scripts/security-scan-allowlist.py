#!/usr/bin/env python3
"""
Security scanner with allowlist support for separating our code from vendor baseline.
"""

import os
import re
import json
import subprocess
import sys
from pathlib import Path
from typing import Dict, List, Tuple

class SecurityScanner:
    def __init__(self, root_path: str):
        self.root_path = Path(root_path)
        self.results = {
            "our_code": {"findings": [], "count": 0, "critical": 0, "high": 0},
            "vendor_baseline": {"findings": [], "count": 0, "critical": 0, "high": 0},
            "summary": {"total_findings": 0, "critical": 0, "high": 0}
        }
        
        # Define our code vs vendor code
        self.our_code_patterns = [
            "apps/api/**",
            "apps/web/**", 
            "apps/dashboard/**",
            "apps/extension/**",
            "packages/**"
        ]
        
        self.vendor_patterns = [
            "apps/desktop/core/**",
            "**/node_modules/**",
            "**/dist/**",
            "**/.build/**",
            "**/lib/**"
        ]
        
        # Security patterns to scan for
        self.security_patterns = [
            (r'eval\s*\(', "eval() usage", "critical", "Code Injection risk"),
            (r'exec\s*\(', "exec() usage", "critical", "Code Injection risk"),
            (r'dangerouslySetInnerHTML', "dangerouslySetInnerHTML", "high", "XSS risk"),
            (r'--insecure', "Insecure flag", "medium", "Security disabled"),
            (r'innerHTML\s*=', "innerHTML assignment", "medium", "XSS risk"),
        ]
    
    def is_our_code(self, file_path: Path) -> bool:
        """Check if file is in our code directories"""
        relative_path = file_path.relative_to(self.root_path)
        path_str = str(relative_path)
        
        # Check if matches our code patterns
        for pattern in self.our_code_patterns:
            if self._match_pattern(path_str, pattern):
                # Exclude if also matches vendor patterns
                if not self.is_vendor_code(file_path):
                    return True
        return False
    
    def is_vendor_code(self, file_path: Path) -> bool:
        """Check if file is in vendor directories"""
        relative_path = file_path.relative_to(self.root_path)
        path_str = str(relative_path)
        
        for pattern in self.vendor_patterns:
            if self._match_pattern(path_str, pattern):
                return True
        return False
    
    def _match_pattern(self, path: str, pattern: str) -> bool:
        """Simple glob pattern matching"""
        # Convert glob to regex
        regex_pattern = pattern.replace('**', '.*').replace('*', '[^/]*')
        return re.match(f'^{regex_pattern}$', path) is not None
    
    def scan_file(self, file_path: Path) -> List[Dict]:
        """Scan a single file for security patterns"""
        findings = []
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                lines = content.split('\n')
                
                for line_num, line in enumerate(lines, 1):
                    for pattern, description, severity, category in self.security_patterns:
                        if re.search(pattern, line):
                            findings.append({
                                "file": str(file_path),
                                "line": line_num,
                                "pattern": description,
                                "severity": severity,
                                "category": category,
                                "snippet": line.strip()[:100] + "..." if len(line.strip()) > 100 else line.strip()
                            })
        except Exception as e:
            pass  # Skip files that can't be read
        
        return findings
    
    def scan_repository(self) -> None:
        """Scan the entire repository"""
        print("🔍 Starting security scan with allowlist...")
        
        # Find all relevant files
        all_files = []
        for ext in ['.js', '.ts', '.jsx', '.tsx', '.json', '.yml', '.yaml']:
            all_files.extend(self.root_path.rglob(f'*{ext}'))
        
        print(f"📁 Scanning {len(all_files)} files...")
        
        for file_path in all_files:
            if file_path.is_file():
                findings = self.scan_file(file_path)
                
                for finding in findings:
                    if self.is_our_code(file_path):
                        self.results["our_code"]["findings"].append(finding)
                        self.results["our_code"]["count"] += 1
                        if finding["severity"] == "critical":
                            self.results["our_code"]["critical"] += 1
                        elif finding["severity"] == "high":
                            self.results["our_code"]["high"] += 1
                    elif self.is_vendor_code(file_path):
                        self.results["vendor_baseline"]["findings"].append(finding)
                        self.results["vendor_baseline"]["count"] += 1
                        if finding["severity"] == "critical":
                            self.results["vendor_baseline"]["critical"] += 1
                        elif finding["severity"] == "high":
                            self.results["vendor_baseline"]["high"] += 1
        
        # Update summary
        self.results["summary"]["total_findings"] = self.results["our_code"]["count"] + self.results["vendor_baseline"]["count"]
        self.results["summary"]["critical"] = self.results["our_code"]["critical"] + self.results["vendor_baseline"]["critical"]
        self.results["summary"]["high"] = self.results["our_code"]["high"] + self.results["vendor_baseline"]["high"]
    
    def print_results(self) -> None:
        """Print scan results"""
        print("\n" + "="*80)
        print("🔒 SECURITY SCAN RESULTS")
        print("="*80)
        
        # Our Code Results
        print(f"\n📦 OUR CODE (Strict Scan)")
        print("-" * 40)
        our_code = self.results["our_code"]
        print(f"Findings: {our_code['count']} (Critical: {our_code['critical']}, High: {our_code['high']})")
        
        if our_code['critical'] > 0 or our_code['high'] > 0:
            print("🚨 CRITICAL/HIGH FINDINGS IN OUR CODE:")
            for finding in our_code['findings']:
                if finding['severity'] in ['critical', 'high']:
                    print(f"  ❌ {finding['file']}:{finding['line']} - {finding['pattern']} ({finding['severity']})")
        else:
            print("✅ No critical or high findings in our code")
        
        # Vendor Baseline Results
        print(f"\n🏢 VENDOR BASELINE (Informational)")
        print("-" * 40)
        vendor = self.results["vendor_baseline"]
        print(f"Findings: {vendor['count']} (Critical: {vendor['critical']}, High: {vendor['high']})")
        print("ℹ️  These are from Code-OSS core and third-party dependencies")
        
        # Summary
        print(f"\n📊 SUMMARY")
        print("-" * 40)
        summary = self.results["summary"]
        print(f"Total Findings: {summary['total_findings']}")
        print(f"Our Code: {our_code['count']} (Critical: {our_code['critical']}, High: {our_code['high']})")
        print(f"Vendor Baseline: {vendor['count']} (Critical: {vendor['critical']}, High: {vendor['high']})")
        
        # Pass/Fail determination
        if our_code['critical'] == 0 and our_code['high'] == 0:
            print("\n✅ SECURITY SCAN PASSED")
            print("Our code is clean. Vendor baseline findings are expected.")
        else:
            print("\n❌ SECURITY SCAN FAILED")
            print("Critical or high findings found in our code require attention.")

def main():
    if len(sys.argv) > 1:
        root_path = sys.argv[1]
    else:
        root_path = "."
    
    scanner = SecurityScanner(root_path)
    scanner.scan_repository()
    scanner.print_results()
    
    # Exit with error code if our code has critical/high findings
    if scanner.results["our_code"]["critical"] > 0 or scanner.results["our_code"]["high"] > 0:
        sys.exit(1)

if __name__ == "__main__":
    main()
