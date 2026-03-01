'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface TelemetryStats {
  type: string;
  _count: {
    _all: number;
  };
}

interface TelemetryEvent {
  id: string;
  type: string;
  event: string;
  value?: number | null;
  metadata?: any;
  version?: string | null;
  createdAt: string;
  user?: {
    email: string;
  } | null;
}

export default function TelemetryDashboard() {
  const [stats, setStats] = useState<TelemetryStats[]>([]);
  const [events, setEvents] = useState<TelemetryEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/telemetry/stats');
        const data = await response.json();
        setStats(data.stats || []);
        setEvents(data.recentEvents || []);
      } catch (error) {
        console.error('Failed to fetch telemetry:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-8 text-center text-slate-400">Loading Telemetry...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-50 tracking-tight">Telemetry Dashboard</h1>
          <p className="text-slate-400 mt-1">Real-time usage and crash reporting for ATiQ Editor v1.0.1</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.type} className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.type}s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-100">{stat._count._all}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-100">Recent Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-slate-800/50">
                <TableHead className="text-slate-400">Timestamp</TableHead>
                <TableHead className="text-slate-400">Type</TableHead>
                <TableHead className="text-slate-400">Event</TableHead>
                <TableHead className="text-slate-400">User</TableHead>
                <TableHead className="text-slate-400">Version</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id} className="border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <TableCell className="text-slate-300">
                    {new Date(event.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={event.type === 'crash' ? 'destructive' : 'secondary'} className="capitalize">
                      {event.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-200 font-medium">{event.event}</TableCell>
                  <TableCell className="text-slate-400">{event.user?.email || 'Anonymous'}</TableCell>
                  <TableCell className="text-slate-400">v{event.version || '1.0.0'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
