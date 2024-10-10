"use client"

import { useState, useEffect } from 'react';
import DownDetectorWidget from './DownDetectorWidget';
import FreshdeskWidget from './FreshdeskWidget';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const [downDetectorData, setDownDetectorData] = useState(null);
  const [freshdeskData, setFreshdeskData] = useState(null);

  useEffect(() => {
    // Fetch Down Detector data
    fetch('/api/downdetector')
      .then(response => response.json())
      .then(data => setDownDetectorData(data));

    // Fetch Freshdesk data
    fetch('/api/freshdesk')
      .then(response => response.json())
      .then(data => setFreshdeskData(data));
  }, []);

  const orionHealthStatus = downDetectorData?.orionHealthStatus || 'Good';
  const statusColor = orionHealthStatus === 'Good' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              ORION Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${statusColor}`}>{orionHealthStatus}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Open Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{freshdeskData?.openTickets || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{freshdeskData?.avgResponseTime || '0h'}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Customer Satisfaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{freshdeskData?.customerSatisfaction || '0%'}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FreshdeskWidget data={freshdeskData} />
        <DownDetectorWidget data={downDetectorData} />
      </div>
    </div>
  );
}