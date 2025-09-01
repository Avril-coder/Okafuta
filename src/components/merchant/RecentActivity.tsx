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
import { allTransactions, currentMerchant } from "@/data/mockData";

// Filter transactions to show only those for the current merchant
const activities = allTransactions.filter(tx => tx.merchantId === currentMerchant.id);

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
              <TableHead>Timestamp</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
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
                <TableCell>{activity.timestamp}</TableCell>
                <TableCell className="text-right">{activity.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}