import { Services, servicesFactory } from "../../services/serviceFactory";

export const getProductList = async (request: keyof Services, payload:{}) => {   
    try {
        const api =  servicesFactory.createService(request)
        const response = await api.get(
            `/api/Product/featuredlist?${Object.entries(payload)
              .map(([key, val]) => `${key}=${val}`)
              .join('&')}`
          );
          const { data } = response;
          const { Data } = data;
          return Data; 
    } catch (error) {
        console.log(error)
    }
}