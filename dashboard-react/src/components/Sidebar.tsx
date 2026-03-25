import { 
  LayoutDashboard, 
  Users, 
  Bot, 
  Calculator, 
  Settings,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  description?: string;
}

const navItems: NavItem[] = [
  { 
    id: 'executive', 
    label: 'Executive Dashboard', 
    icon: LayoutDashboard,
    description: 'Overview & KPIs'
  },
  { 
    id: 'clients', 
    label: 'Client Intelligence', 
    icon: Users,
    description: 'Individual client analytics'
  },
  { 
    id: 'ai', 
    label: 'Jeff AI Assistant', 
    icon: Bot,
    description: 'AI-powered insights'
  },
  { 
    id: 'roi', 
    label: 'ROI Calculator', 
    icon: Calculator,
    description: 'Value demonstration'
  },
  { 
    id: 'settings', 
    label: 'Settings', 
    icon: Settings,
    description: 'Configuration'
  }
];

export function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-sidebar h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">Up At Dawn</h1>
            <p className="text-slate-400 text-xs">Marketing Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group',
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:bg-sidebar-hover hover:text-white'
              )}
            >
              <Icon className={cn(
                'w-5 h-5 transition-colors',
                isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
              )} />
              <div className="flex-1">
                <span className="text-sm font-medium block">{item.label}</span>
                {item.description && (
                  <span className={cn(
                    'text-xs block',
                    isActive ? 'text-blue-200' : 'text-slate-500'
                  )}>
                    {item.description}
                  </span>
                )}
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">JK</span>
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">Jeff Kirk</p>
            <p className="text-slate-400 text-xs">Owner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
