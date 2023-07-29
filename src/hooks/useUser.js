import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/auth/auth";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
