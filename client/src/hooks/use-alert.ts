import { useEffect } from "react";
import { useToast } from "@/components/primitives/use-toast";

export function useNetworkAlert(error: boolean) {
  const { toast } = useToast();
  useEffect(() => {
    error &&
      toast({
        title: "Network Error",
        description: "There might be a problem with your Internet",
      });
  }, [error, toast]);
}
