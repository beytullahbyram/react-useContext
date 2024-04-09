import { ReactNode } from 'react';
import { useNavigationData } from '../hooks/useNavigationData';

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
    const { isNavExpanded } = useNavigationData();
    return (
        <div className="left" style={{ flexBasis: isNavExpanded ? '50%' : '20%' }}>
            {children}
        </div>
    );
};