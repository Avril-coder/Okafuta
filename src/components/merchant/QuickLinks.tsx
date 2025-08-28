import {
  ArrowDownToLine,
  ArrowUpFromLine,
  FileText,
  Landmark,
  Move,
  Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Import Link

const links = [
  { name: "Add Money", icon: ArrowDownToLine, href: "/dashboard/transact?tab=add-fund" },
  { name: "Withdraw", icon: ArrowUpFromLine, href: "/dashboard/transact?tab=payout" },
  { name: "Bill Payment", icon: Landmark, href: "/dashboard/transact?tab=bill-payment" },
  { name: "Move Money", icon: Move, href: "/dashboard/transact?tab=move-money" },
  { name: "Create Voucher", icon: Ticket, href: "/dashboard/benefits?tab=vouchers" },
  { name: "Invoice", icon: FileText, href: "/dashboard/invoice" }, // Updated href to new Invoice page
];

export function QuickLinks() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              className="flex flex-col h-24 w-full"
              asChild // Use asChild to pass props to the Link component
            >
              <Link to={link.href}>
                <link.icon className="h-6 w-6 mb-2" />
                <span className="text-xs text-center">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}