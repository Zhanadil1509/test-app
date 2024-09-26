import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/productsService.ts";

export function useGetProducts() {
    return useQuery<any>({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await productsService.allProducts();

            if (!res) {
                throw new Error("Network response was not ok");
            }
            return res;
        },
    });
}
