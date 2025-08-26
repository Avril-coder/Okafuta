import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    customer: "John Doe",
    type: "Withdrawal",
    status: "Completed",
    date: "2023-10-26",
    amount: "$50.00",
  },
  {
    customer: "Jane Smith",
    type: "Deposit",
    status: "Pending",
    date: "2023-10-26",
    amount: "$120.00",
  },
  {
    customer: "Sam Wilson",
    type: "Bill Payment",
    status: "Completed",
    date: "2023-10-25",
    amount: "$75.50",
  },
  {
    customer: "Alice Johnson",
    type: "Voucher",
    status: "Failed",
    date: "2023-10-24",
    amount: "$25.00",
  },
];

export function RecentActivity() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.customer}>
                <TableCell className="font-medium">{activity.customer}</TableCell>
                <TableCell>{activity.type}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      activity.status === "Completed"
                        ? "default"
                        : activity.status === "Pending"
                        ? "secondary"
                        : "destructive"
                    }
                    className={activity.status === "Completed" ? "bg-green-500" : ""}
                  >
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell className="text-right">{activity.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}