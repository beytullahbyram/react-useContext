import { SidebarLayout } from "../layouts/SideBarLayout";
import { ExpandButton } from "./button/ExpandButton";

export const Sidebar = () => {
    return (
        <SidebarLayout>
            {/* this one will control the expand/collapse */}
            <ExpandButton />

            <ul>
                <li>
                    <a href="#">some links</a>
                </li>
            </ul>
        </SidebarLayout>
    );
};
