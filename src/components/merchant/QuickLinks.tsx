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

const links = [
  { name: "Add Money", icon: ArrowDownToLine },
  { name: "Withdraw", icon: ArrowUpFromLine },
  { name: "Bill Payment", icon: Landmark },
  { name: "Move Money", icon: Move },
  { name: "Create Voucher", icon: Ticket },
  { name: "Invoice", icon: FileText },
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
            >
              <link.icon className="h-6 w-6 mb-2" />
              <span className="text-xs text-center">{link.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}