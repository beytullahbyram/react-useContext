import { ReactNode, useCallback, useMemo, useState } from "react";
import { ContextApi, ContextData } from "../contexts/UserContexct";

export const NavigationController = ({ children }: { children: ReactNode }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const open = useCallback(() => setIsNavExpanded(true), []);

    // no dependencies, close won't change
    const close = useCallback(() => setIsNavExpanded(false), []);

    // that one has a dependency on state
    const data = useMemo(() => ({ isNavExpanded }), [isNavExpanded]);

    // that one never changes - no dependencies
    const api = useMemo(() => ({ open, close }), [close, open]);

    return (
        <ContextData.Provider value={data}>
            <ContextApi.Provider value={api}>
                {children}
            </ContextApi.Provider>
        </ContextData.Provider>
    );
};