import API from "@/lib/API";
import { apiRoutes } from "@/lib/apiRoutes";
import { Cart } from "@/types/Cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCart() {
  return useQuery<Cart>({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const { data } = await API.get(apiRoutes.getCart);
      return data;
    },
  });
}

export function mutateCart({
  variantToAdd,
  variantToRemove,
  flavor,
}: {
  variantToAdd?: string;
  variantToRemove?: string;
  flavor?: string;
}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const { data } = await API.post(apiRoutes.updateCart, {
        variantToAdd,
        variantToRemove,
        flavor,
      });
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["cartItems"] });
    },
  });
}
