import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { MainPayload, StatsPayload } from "@/interface";
import { AxiosService } from "@/libs/axios";
import { useNetworkAlert } from "@/hooks/use-alert";

export const useStatsPost = () => {
  const { isPending, data, mutateAsync, isError } = useMutation({
    mutationFn: async (payload: StatsPayload) =>
      await AxiosService.getStatsAnalyzer(payload),
  });

  useNetworkAlert(isError);

  const onSubmit: SubmitHandler<StatsPayload> = async (payload) => {
    await mutateAsync(payload);
  };

  return { isPending, data, onSubmit };
};

export const useHomePost = () => {
  const { data, isPending, mutateAsync, isError } = useMutation({
    mutationFn: async (payload: MainPayload) =>
      await AxiosService.getMainAnalyzer(payload),
  });

  useNetworkAlert(isError);

  const onSubmit: SubmitHandler<MainPayload> = async (payload) => {
    await mutateAsync(payload);
  };

  return { isPending, data, onSubmit };
};
