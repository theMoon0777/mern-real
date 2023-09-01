// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'RealReports™',
      type: 'item',
      url: '/dashboard/realreport',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'account',
      title: 'Account',
      type: 'item',
      url: '/dashboard/account',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'support',
      title: 'Support',
      type: 'item',
      url: '/dashboard/support',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
