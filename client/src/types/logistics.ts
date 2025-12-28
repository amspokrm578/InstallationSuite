// Logistics, Supply, and Material Handling types

export interface InventoryItem {
  id: string;
  itemNumber: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  unit: string;
  location: string;
  minStockLevel: number;
  maxStockLevel: number;
  reorderPoint: number;
  classification?: 'UNCLASSIFIED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';
  unitCost?: number;
  lastReceived?: string;
  lastIssued?: string;
}

export interface Requisition {
  id: string;
  requisitionNumber: string;
  requestedBy: string;
  requestedByName: string;
  department: string;
  items: RequisitionItem[];
  justification: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'draft' | 'submitted' | 'approved' | 'fulfilled' | 'cancelled';
  submittedAt: string;
  approvedBy?: string;
  approvedAt?: string;
  fulfilledDate?: string;
}

export interface RequisitionItem {
  itemId: string;
  itemNumber: string;
  itemName: string;
  quantity: number;
  unit: string;
  unitCost?: number;
}

export interface ShippingReceiving {
  id: string;
  transactionNumber: string;
  transactionType: 'receiving' | 'shipping';
  carrier?: string;
  trackingNumber?: string;
  items: ShippingItem[];
  fromLocation?: string;
  toLocation: string;
  classification: 'UNCLASSIFIED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';
  status: 'pending' | 'in-transit' | 'received' | 'delivered';
  scheduledDate?: string;
  receivedDate?: string;
  receivedBy?: string;
  notes?: string;
}

export interface ShippingItem {
  itemId: string;
  itemNumber: string;
  itemName: string;
  quantity: number;
  serialNumbers?: string[];
}

