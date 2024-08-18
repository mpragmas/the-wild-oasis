import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: CreateCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("new cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, CreateCabin };
}
