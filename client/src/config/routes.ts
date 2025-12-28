// Route configuration for all modules

export const routes = {
  dashboard: '/',
  personnel: '/personnel',
  assets: '/assets',
  facilities: '/facilities',
  security: '/security',
  workforce: '/workforce',
  compliance: '/compliance',
  training: '/training',
  budget: '/budget',
  logistics: '/logistics',
  emergency: '/emergency',
  tasks: '/tasks',
} as const;

export const moduleConfig = [
  {
    id: 'personnel',
    name: 'Personnel & Access',
    path: routes.personnel,
    icon: '👤',
    description: 'Identity verification, badge management, access control',
  },
  {
    id: 'assets',
    name: 'Assets & Equipment',
    path: routes.assets,
    icon: '📦',
    description: 'Asset lifecycle, maintenance, disposal tracking',
  },
  {
    id: 'facilities',
    name: 'Facilities Operations',
    path: routes.facilities,
    icon: '🏢',
    description: 'Work orders, space management, utilities',
  },
  {
    id: 'security',
    name: 'Security & Incidents',
    path: routes.security,
    icon: '🔒',
    description: 'Incident response, threat reporting, security events',
  },
  {
    id: 'workforce',
    name: 'Workforce Tasking',
    path: routes.workforce,
    icon: '📋',
    description: 'Administrative requests, task delegation, workflows',
  },
  {
    id: 'compliance',
    name: 'Compliance & Audit',
    path: routes.compliance,
    icon: '✅',
    description: 'Audit logging, compliance tracking, governance',
  },
  {
    id: 'training',
    name: 'Training & Certification',
    path: routes.training,
    icon: '🎓',
    description: 'Training management, certification tracking',
  },
  {
    id: 'budget',
    name: 'Budget & Resources',
    path: routes.budget,
    icon: '💰',
    description: 'Budget allocation, procurement, project tracking',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply',
    path: routes.logistics,
    icon: '🚚',
    description: 'Inventory, supply chain, material handling',
  },
  {
    id: 'emergency',
    name: 'Emergency Management',
    path: routes.emergency,
    icon: '🚨',
    description: 'COOP, incident response, personnel accountability',
  },
] as const;

