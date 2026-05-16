import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { socialKeys } from "./keys";
import type { SocialProfile, SocialPlatform } from "../types";

export function useSocialProfiles(clientId: string) {
  return useQuery({
    queryKey: socialKeys.profiles(clientId),
    queryFn: () =>
      apiClient.get<SocialProfile[]>(`/social/${clientId}/profiles`),
    enabled: Boolean(clientId),
    staleTime: 30_000,
  });
}

interface SaveProfileInput {
  platform: SocialPlatform;
  handle: string;
  profileUrl?: string;
  autoFetched: boolean;
}

export function useSaveProfile(clientId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: SaveProfileInput) =>
      apiClient.post<SocialProfile>(`/social/${clientId}/profiles`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: socialKeys.profiles(clientId),
      });
      queryClient.invalidateQueries({
        queryKey: socialKeys.dashboard(clientId),
      });
    },
  });
}

export function useConnectProfile(clientId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      platform,
      accessToken,
    }: {
      platform: SocialPlatform;
      accessToken?: string;
    }) =>
      apiClient.post<SocialProfile>(
        `/social/${clientId}/profiles/${platform}/connect`,
        { accessToken },
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: socialKeys.profiles(clientId),
      });
      queryClient.invalidateQueries({
        queryKey: socialKeys.dashboard(clientId),
      });
    },
  });
}
