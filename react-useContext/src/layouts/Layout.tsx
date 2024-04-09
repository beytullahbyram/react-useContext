import { ReactNode, useEffect, useState } from "react";
import { NavigationController } from "../controllers/NavigationController";

export const Layout = ({ children }: { children: ReactNode }) => {
    const [, setScroll] = useState(0);
  
    useEffect(() => {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    }, []);
  
    return (
      <NavigationController>
        <div className="three-layout">{children}</div>
      </NavigationController>
    );
  };
  