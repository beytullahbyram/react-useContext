import { useNavigationData } from "../hooks/useNavigationData";

export const AdjustableColumnsBlock = () => {
    const { isNavExpanded } = useNavigationData();
    return isNavExpanded ? <div>two block items here</div> : <div>three block items here</div>;
};
