import React, { useState, useEffect } from 'react';
import { DashboardMetrics } from '../types/telemetry';

interface TelemetryDashboardProps {
  metrics?: DashboardMetrics;
  isLoading?: boolean;
  error?: string;
}

export const TelemetryDashboard: React.FC<TelemetryDashboardProps> = ({
  metrics,
  isLoading = false,
  error,
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [refreshInterval, setRefreshInterval] = useState<number>(30000); // 30 seconds

  useEffect(() => {
    // Auto-refresh dashboard
    const interval = setInterval(() => {
      // Trigger refresh logic here
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="text-red-800">
          <h3 className="text-lg font-semibold">Error loading telemetry</h3>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="text-center py-8 text-gray-500">
        No telemetry data available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">ATiQ Editor Telemetry</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value as '7d' | '30d' | '90d')}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value={metrics.totalUsers.toLocaleString()}
          change={12} // Example change percentage
          trend="up"
        />
        <MetricCard
          title="Active Users"
          value={metrics.activeUsers.toLocaleString()}
          change={8}
          trend="up"
        />
        <MetricCard
          title="Error Rate"
          value={`${(metrics.errorRate * 100).toFixed(2)}%`}
          change={-2.5}
          trend="down"
          format="percentage"
        />
        <MetricCard
          title="Avg Response Time"
          value={`${metrics.avgResponseTime.toFixed(0)}ms`}
          change={-15}
          trend="down"
          format="time"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Commands */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Most Used Commands</h2>
          <div className="space-y-3">
            {metrics.topCommands.map((cmd, index) => (
              <div key={cmd.command} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <span className="text-sm font-medium">{cmd.command}</span>
                </div>
                <span className="text-sm text-gray-600">{cmd.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Platform Distribution</h2>
          <div className="space-y-3">
            {Object.entries(metrics.platformBreakdown).map(([platform, count]) => {
              const total = Object.values(metrics.platformBreakdown).reduce((a, b) => a + b, 0);
              const percentage = ((count / total) * 100).toFixed(1);
              return (
                <div key={platform} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{platform}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Version Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Version Distribution</h2>
          <div className="space-y-3">
            {Object.entries(metrics.versionDistribution).map(([version, count]) => {
              const total = Object.values(metrics.versionDistribution).reduce((a, b) => a + b, 0);
              const percentage = ((count / total) * 100).toFixed(1);
              return (
                <div key={version} className="flex items-center justify-between">
                  <span className="text-sm font-medium">v{version}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-2">
            {/* This would show real-time events */}
            <div className="text-sm text-gray-500">Real-time activity feed coming soon...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  format?: 'number' | 'percentage' | 'time';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend,
  format = 'number',
}) => {
  const isPositive = trend === 'up' ? change > 0 : change < 0;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`flex items-center space-x-1 text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
};
