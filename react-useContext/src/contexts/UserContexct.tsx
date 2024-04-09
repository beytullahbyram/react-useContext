import React from "react";


// store the state here
export const ContextData = React.createContext({ isNavExpanded: false });
// store the open/close functions here
export const ContextApi = React.createContext({ open: () => { }, close: () => { } });

