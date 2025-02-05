import type { Product, Designer, ProductType, Category } from "@prisma/client";
import useSWR from "swr";

export function useProducts() {
	return useSWR<Product[]>("/products");
}
export function useProduct(id: string) {
	return useSWR<Product>(`/products/${id}`);
}
export function useProductType() {
	return useSWR<ProductType[]>("/products/type");
}
export function useDesigner() {
	return useSWR<Designer[]>("/products/designer");
}
export function useCategory() {
	return useSWR<Category[]>("/products/category");
}
