import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface KycStatusBadgeProps {
  status: 'not_submitted' | 'pending' | 'verified' | 'rejected';
}

export const KycStatusBadge: React.FC<KycStatusBadgeProps> = ({ status }) => {
  let variant: 'default' | 'secondary' | 'destructive' = 'secondary';
  let text = 'Not Submitted';
  let className = '';

  switch (status) {
    case 'pending':
      text = 'Pending Review';
      variant = 'secondary';
      className = 'bg-yellow-500 text-yellow-900 dark:bg-yellow-600 dark:text-yellow-50';
      break;
    case 'verified':
      text = 'Verified';
      variant = 'default';
      className = 'bg-green-500 text-green-900 dark:bg-green-600 dark:text-green-50';
      break;
    case 'rejected':
      text = 'Rejected';
      variant = 'destructive';
      break;
    case 'not_submitted':
    default:
      text = 'Not Submitted';
      variant = 'secondary';
      break;
  }

  return (
    <Badge variant={variant} className={cn("capitalize", className)}>
      {text}
    </Badge>
  );
};