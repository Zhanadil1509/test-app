import { axiosClassic } from "../api/interceptors.ts";

//type Props = {};

export const productsService = {
    async allProducts() {
        const response = await axiosClassic.get<any>(``);

        return response.data;
    },
};
