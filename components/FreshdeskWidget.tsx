"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FreshdeskWidget({ data }) {
  if (!data) {
    return <div>Loading Freshdesk data...</div>;
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Freshdesk Tickets</CardTitle>
        <CardDescription>Overview of recent support tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.recentTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}