import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

interface VirtualCard {
  id: string;
  holder: string;
  limit: string;
  currency: string;
  status: 'Enabled' | 'Disabled';
}

export const VirtualCardTab: React.FC = () => {
  const [virtualCards, setVirtualCards] = useState<VirtualCard[]>([
    { id: 'vc1', holder: 'John Doe', limit: 'N$ 1000.00', currency: 'NAD', status: 'Enabled' },
    { id: 'vc2', holder: 'Jane Smith', limit: 'USD 500.00', currency: 'USD', status: 'Disabled' },
    { id: 'vc3', holder: 'Alice Johnson', limit: 'N$ 2500.00', currency: 'NAD', status: 'Enabled' },
  ]);

  const handleStatusToggle = (cardId: string) => {
    setVirtualCards(cards =>
      cards.map(card => {
        if (card.id === cardId) {
          const newStatus = card.status === 'Enabled' ? 'Disabled' : 'Enabled';
          toast.success(`Card for ${card.holder} has been ${newStatus.toLowerCase()}.`);
          return { ...card, status: newStatus };
        }
        return card;
      })
    );
  };

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
        <CardHeader>
          <CardTitle>My Virtual Cards</CardTitle>
          <CardDescription>View your received virtual cards and manage their status.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Card Holder</TableHead>
                <TableHead>Limit</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {virtualCards.map((card) => (
                <TableRow key={card.id}>
                  <TableCell className="font-medium">{card.holder}</TableCell>
                  <TableCell>{card.limit}</TableCell>
                  <TableCell>{card.currency}</TableCell>
                  <TableCell>
                    <Badge
                      variant={card.status === 'Enabled' ? 'default' : 'secondary'}
                      className={card.status === 'Enabled' ? 'bg-green-500' : ''}
                    >
                      {card.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch
                      checked={card.status === 'Enabled'}
                      onCheckedChange={() => handleStatusToggle(card.id)}
                      aria-label={`Toggle card for ${card.holder}`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};