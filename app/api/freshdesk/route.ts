import { NextResponse } from 'next/server';

export async function GET() {
  // This is a mock implementation. In a real-world scenario, you would fetch this data from the Freshdesk API.
  const mockData = {
    openTickets: 23,
    avgResponseTime: '2h 15m',
    customerSatisfaction: '92%',
    recentTickets: [
      { id: 'T-1001', subject: 'Cannot access email', status: 'Open', priority: 'High' },
      { id: 'T-1002', subject: 'VPN connection issues', status: 'In Progress', priority: 'Medium' },
      { id: 'T-1003', subject: 'Software license expired', status: 'Open', priority: 'Low' },
      { id: 'T-1004', subject: 'New laptop setup', status: 'Resolved', priority: 'Medium' },
      { id: 'T-1005', subject: 'Printer not working', status: 'Open', priority: 'Low' },
    ],
  };

  return NextResponse.json(mockData);
}