import axios, { type AxiosPromise } from "axios";
import type { FoodData } from "../interfaces/FoodData";
import { useQuery } from "@tanstack/react-query";

 const API_URL = 'https://api-cardapio-protfolio.onrender.com';


 const fetchData = async (): AxiosPromise<FoodData[]>=>{
    const response = axios.get(`${API_URL}/food`)
    return response;
 }

export function useFoodDataById(id: number) {
  const query = useQuery<FoodData>({
    queryKey: ["food-data", id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/food/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar dados");
      return response.json(); // retorna um objeto FoodData
    },
    enabled: !!id, // só executa se tiver id
  });

  return query; // data será FoodData
}




export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey:['food-data'],
        retry:2
    })

    return{
        ...query,
        data: query.data?.data
    }
}
