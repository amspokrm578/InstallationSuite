// Facilities Operations & Space Management types

export interface WorkOrder {
  id: string;
  workOrderNumber: string;
  requestedBy: string;
  requestedByName: string;
  facility: string;
  location: string;
  category: 'HVAC' | 'Electrical' | 'Plumbing' | 'Structural' | 'Other';
  priority: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  status: 'submitted' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  assignedTo?: string;
  assignedToName?: string;
  submittedAt: string;
  scheduledDate?: string;
  completedDate?: string;
  estimatedCost?: number;
  actualCost?: number;
}

export interface SpaceReservation {
  id: string;
  spaceId: string;
  spaceName: string;
  reservedBy: string;
  reservedByName: string;
  purpose: string;
  startDateTime: string;
  endDateTime: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  attendeeCount?: number;
  specialRequirements?: string;
  createdAt: string;
}

export interface Facility {
  id: string;
  name: string;
  buildingNumber?: string;
  address: string;
  facilityType: string;
  totalArea?: number;
  capacity?: number;
  status: 'operational' | 'maintenance' | 'closed';
  hvacStatus?: 'operational' | 'degraded' | 'failed';
  utilitiesStatus?: Record<string, string>;
}

