import { useEffect } from "react";

export const useTitle = (pageName?: string) => {
  useEffect(() => {
    if (pageName) document.title = `${pageName} | Belief`;
    else document.title = `Belief`;
  }, [pageName]);
};
