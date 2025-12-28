// Asset & Equipment Lifecycle Management types

export interface Asset {
  id: string;
  assetTag: string;
  serialNumber?: string;
  name: string;
  category: string;
  manufacturer?: string;
  model?: string;
  purchaseDate: string;
  purchaseCost?: number;
  status: 'available' | 'assigned' | 'maintenance' | 'disposed' | 'lost';
  assignedTo?: string;
  assignedToName?: string;
  assignedDate?: string;
  location: string;
  classification?: 'UNCLASSIFIED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';
  custodian?: string;
  lastMaintenance?: string;
  nextMaintenance?: string;
}

export interface MaintenanceRecord {
  id: string;
  assetId: string;
  assetTag: string;
  assetName: string;
  workOrderId?: string;
  maintenanceType: 'preventive' | 'corrective' | 'inspection';
  scheduledDate: string;
  completedDate?: string;
  performedBy?: string;
  performedByName?: string;
  description: string;
  cost?: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface DisposalRequest {
  id: string;
  assetId: string;
  assetTag: string;
  requestedBy: string;
  requestedByName: string;
  reason: string;
  disposalMethod: 'destruction' | 'transfer' | 'sale' | 'recycle';
  status: 'pending' | 'approved' | 'completed';
  approvalChain: string[];
  createdAt: string;
  completedAt?: string;
}

