import { useEffect } from "react";

export const useTitle = (pageName: string) => {
  useEffect(() => {
    document.title = `${pageName} | Belief`;
  }, [pageName]);
};
