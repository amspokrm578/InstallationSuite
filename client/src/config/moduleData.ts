export interface Feature {
  title: string;
  description: string;
}

export interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: Feature[];
}

export const moduleData: Record<string, ModuleData> = {
  personnel: {
    id: 'personnel',
    title: 'Personnel & Access Management',
    subtitle: 'Identity verification, badge management, and access control',
    icon: '👤',
    description: 'Manage personnel identity, badge issuance, clearance verification, and access control.',
    features: [
      {
        title: 'Identity Verification',
        description: 'Onboarding and offboarding workflows',
      },
      {
        title: 'Badge Management',
        description: 'Credential issuance, renewal tracking, clearance verification',
      },
      {
        title: 'Visitor Management',
        description: 'Visitor request and escort management',
      },
      {
        title: 'Access Control',
        description: 'Role-based access to facilities, systems, and classified spaces',
      },
      {
        title: 'Audit Logging',
        description: 'Multi-factor authentication and audit logging of access events',
      },
    ],
  },
  assets: {
    id: 'assets',
    title: 'Asset & Equipment Lifecycle Management',
    subtitle: 'Track assets from procurement to disposal',
    icon: '📦',
    description: 'Monitor physical and digital assets across their full lifespan.',
    features: [
      {
        title: 'Procurement Tracking',
        description: 'Track asset acquisition and purchase orders',
      },
      {
        title: 'Assignment & Custody',
        description: 'Track asset assignment and custodian responsibilities',
      },
      {
        title: 'Maintenance Scheduling',
        description: 'Work orders, maintenance schedules, and service records',
      },
      {
        title: 'End-of-Life Disposal',
        description: 'Disposal workflows with compliance checks',
      },
      {
        title: 'Inventory Management',
        description: 'Serial, tag, and barcoding for accountability',
      },
    ],
  },
  facilities: {
    id: 'facilities',
    title: 'Facilities Operations & Space Management',
    subtitle: 'Manage the physical environment of the installation',
    icon: '🏢',
    description: 'Manage work requests, space reservations, and facility systems.',
    features: [
      {
        title: 'Work Orders',
        description: 'Request intake for maintenance or repairs',
      },
      {
        title: 'Space Management',
        description: 'Scheduling of common spaces, work centers, or bays',
      },
      {
        title: 'Systems Monitoring',
        description: 'Monitor HVAC, utilities, and environmental systems',
      },
      {
        title: 'Emergency Repairs',
        description: 'Priority dispatch and uptime monitoring',
      },
    ],
  },
  security: {
    id: 'security',
    title: 'Security & Incident Response',
    subtitle: 'Handle security events and threat reporting',
    icon: '🔒',
    description: 'Manage security events, threats, and incident response workflows.',
    features: [
      {
        title: 'Threat Reporting',
        description: 'Workflows for reporting and evaluating security threats',
      },
      {
        title: 'Incident Ticketing',
        description: 'Physical and cyber incident tracking and resolution',
      },
      {
        title: 'Badge Alerts',
        description: 'Monitor and respond to badge misuse alerts',
      },
      {
        title: 'Safety Hazards',
        description: 'Track safety hazards and mitigation efforts',
      },
      {
        title: 'Root Cause Analysis',
        description: 'Documentation and analysis of security incidents',
      },
    ],
  },
  compliance: {
    id: 'compliance',
    title: 'Compliance, Governance, and Audit Readiness',
    subtitle: 'Ensure traceable outputs and audit readiness',
    icon: '✅',
    description: 'Maintain compliance with automated logging and audit capabilities.',
    features: [
      {
        title: 'Audit Logging',
        description: 'Automated logging of actions and approvals',
      },
      {
        title: 'Recordkeeping',
        description: 'Versioned recordkeeping of policy-relevant artifacts',
      },
      {
        title: 'Compliance Dashboards',
        description: 'Self-inspection and compliance monitoring',
      },
      {
        title: 'Audit Packages',
        description: 'Generate audit packages with full records and timestamps',
      },
    ],
  },
  training: {
    id: 'training',
    title: 'Training & Certification Management',
    subtitle: 'Ensure personnel readiness through training and certification',
    icon: '🎓',
    description: 'Manage training schedules, certifications, and personnel readiness.',
    features: [
      {
        title: 'Training Scheduling',
        description: 'Schedule training sessions and verify attendance',
      },
      {
        title: 'Certification Tracking',
        description: 'Track certification currency (forklift, CPR, classified access)',
      },
      {
        title: 'Expiration Notifications',
        description: 'Automated notifications for expiring certifications',
      },
      {
        title: 'Role Mapping',
        description: 'Map roles to required certifications and training',
      },
    ],
  },
  budget: {
    id: 'budget',
    title: 'Budgeting, Resource Allocation & Project Tracking',
    subtitle: 'Manage funding streams and program initiatives',
    icon: '💰',
    description: 'Track budgets, procurement, and project milestones.',
    features: [
      {
        title: 'Budget Allocation',
        description: 'Allocate and monitor budget execution',
      },
      {
        title: 'Procurement',
        description: 'Procurement requests and approval workflows',
      },
      {
        title: 'Project Tracking',
        description: 'Program and project milestone tracking',
      },
      {
        title: 'Financial Reporting',
        description: 'Cost reporting and forecasting',
      },
    ],
  },
  logistics: {
    id: 'logistics',
    title: 'Logistics, Supply, and Material Handling',
    subtitle: 'Manage inventory, supply chains, and material control',
    icon: '🚚',
    description: 'Track inventory, manage supply chains, and handle classified materials.',
    features: [
      {
        title: 'Inventory Tracking',
        description: 'Warehouse inventory and stock level monitoring',
      },
      {
        title: 'Material Control',
        description: 'Classified document and material control',
      },
      {
        title: 'Shipping & Receiving',
        description: 'Workflows for shipping and receiving operations',
      },
      {
        title: 'Demand Forecasting',
        description: 'Reorder automation and demand forecasting',
      },
    ],
  },
  emergency: {
    id: 'emergency',
    title: 'Emergency Management & Continuity of Operations',
    subtitle: 'Ensure operational continuity during emergencies',
    icon: '🚨',
    description: 'Manage emergency incidents and ensure continuity of operations.',
    features: [
      {
        title: 'Incident Broadcast',
        description: 'Real-time incident broadcast system',
      },
      {
        title: 'Personnel Accountability',
        description: 'Status check-ins for personnel during emergencies',
      },
      {
        title: 'COOP Activation',
        description: 'Continuity of Operations activation workflows',
      },
      {
        title: 'Resource Staging',
        description: 'Resource staging and readiness reporting',
      },
    ],
  },
};

