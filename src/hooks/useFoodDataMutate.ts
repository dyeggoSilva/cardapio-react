
import axios, { type AxiosPromise } from "axios";
import type { FoodData } from "../interfaces/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

 const API_URL = 'https://api-cardapio-protfolio.onrender.com';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
 const postData = async (data : FoodData): AxiosPromise<any>=>{
    const response = axios.post(API_URL + '/food',data);
    return response;
 }


export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry:2,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    })

    return mutate
}