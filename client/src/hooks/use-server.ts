import { AxiosService } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

import { useNetworkAlert } from "@/hooks/use-alert";

export const useServer = () => {
  const { isError } = useQuery({
    queryKey: ["health"],
    queryFn: async () => await AxiosService.wakeServer(),
    refetchInterval: 1000 * 60 * 10,
  });
  useNetworkAlert(isError);
};
