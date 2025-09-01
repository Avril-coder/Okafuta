// This file simulates a database of transactions for multiple merchants.

// We'll pretend this is our currently logged-in merchant.
export const currentMerchant = {
  id: 'merchant-001',
  name: 'My Awesome Shop',
};

// This is a list of all transactions in the system.
// Note that some belong to 'merchant-001' and others to a different merchant.
export const allTransactions = [
  {
    id: 'tx1',
    merchantId: 'merchant-001',
    customer: "John Doe",
    type: "Withdrawal",
    status: "Completed",
    date: "2024-07-26",
    timestamp: "10:45 AM",
    amount: "-$50.00",
  },
  {
    id: 'tx2',
    merchantId: 'merchant-002', // Belongs to another merchant
    customer: "Peter Pan",
    type: "Deposit",
    status: "Completed",
    date: "2024-07-26",
    timestamp: "11:00 AM",
    amount: "+$200.00",
  },
  {
    id: 'tx3',
    merchantId: 'merchant-001',
    customer: "Jane Smith",
    type: "Deposit",
    status: "Pending",
    date: "2024-07-26",
    timestamp: "02:15 PM",
    amount: "+$120.00",
  },
  {
    id: 'tx4',
    merchantId: 'merchant-001',
    customer: "Sam Wilson",
    type: "Bill Payment",
    status: "Completed",
    date: "2024-07-25",
    timestamp: "09:30 AM",
    amount: "-$75.50",
  },
  {
    id: 'tx5',
    merchantId: 'merchant-002', // Belongs to another merchant
    customer: "Wendy Darling",
    type: "Voucher",
    status: "Completed",
    date: "2024-07-24",
    timestamp: "04:00 PM",
    amount: "-$15.00",
  },
  {
    id: 'tx6',
    merchantId: 'merchant-001',
    customer: "Alice Johnson",
    type: "Voucher",
    status: "Failed",
    date: "2024-07-24",
    timestamp: "05:20 PM",
    amount: "-$25.00",
  },
];