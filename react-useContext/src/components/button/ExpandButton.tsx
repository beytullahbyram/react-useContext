import { useEffect } from "react";
import { useNavigationApi } from "../../hooks/useNavigationApi";
import { useNavigationData } from "../../hooks/useNavigationData";

export const ExpandButton = () => {
    const { isNavExpanded } = useNavigationData();
    const { open, close } = useNavigationApi();

    useEffect(() => {
        console.info("Button that uses Context data re-renders. But SomeComponent won't");
    });

    return <button onClick={() => (isNavExpanded ? close() : open())}>{isNavExpanded ? 'collapse <' : 'expand >'}</button>;
};