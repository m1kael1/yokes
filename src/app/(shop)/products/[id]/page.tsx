"use client";

import { Button } from "@/components/ui/button";
import { useProduct } from "@/services/queries";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function DetailProduct() {
	const { id }: { id: string } = useParams();
	const { data: product, isLoading } = useProduct(id);

	return (
		<main className=" px-0">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<section className="flex flex-col mb-6 sm:flex-row sm:justify-center sm:container sm:px-0">
					<div className="h-[300px] relative sm:w-[300px]">
						<Image
							fill
							src={product?.imageUrl as string}
							alt={product?.name as string}
							className="w-full object-cover object-center sm:object-contain"
						/>
					</div>

					<div className="px-6 py-8 sm:py-0 sm:w-[500px]">
						<div className="flex flex-col gap-2">
							<h1 className="text-2xl tracking-widest">{product?.name}</h1>
							<h2 className="text-xl  tracking-wider">£{product?.price}</h2>
						</div>
						<div className="mt-6 flex flex-col gap-2">
							<h3 className="text-lg">Product Description</h3>
							<p>{product?.description}</p>
						</div>
						<div className="flex flex-col mt-6 gap-2">
							<h3 className="text-lg">Quantity</h3>
							<div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:items-center">
								<p className="bg-slate-200 text-center w-full py-3 font-semibold ">
									{product?.amount}
								</p>
								<Button className="sm:h-full">Add To Cart</Button>
							</div>
						</div>
					</div>
				</section>
			)}
		</main>
	);
}
