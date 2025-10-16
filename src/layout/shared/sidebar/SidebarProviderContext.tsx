import { createContext, useContext, useRef, type ReactNode } from "react";
interface SidebarContextType {
  dynamicSidebarRef: React.RefObject<HTMLDivElement | null>;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const dynamicSidebarRef = useRef<HTMLDivElement | null>(null);

  return (
    <SidebarContext.Provider value={{ dynamicSidebarRef }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
};
