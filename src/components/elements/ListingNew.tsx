"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { CardProduct } from "./CardProduct";
import { useProducts } from "@/services/queries";

export default function ListingNew() {
	const { data: products, isLoading } = useProducts();

	return (
		<section className="container px-6 mx-auto pb-14 pt-20 lg:px-0 ">
			<h1 className="text-2xl mb-8 mx-auto">New Ceramics</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<ul className="grid w-full md:grid-cols-4 gap-5 grid-cols-2 place-items-center mb-11 ">
						{products?.slice(0, 4).map(({ id, name, imageUrl, price }) => (
							<CardProduct
								key={id}
								id={id}
								name={name}
								imageUrl={imageUrl}
								price={price}
							/>
						))}
					</ul>
					<Link href="/products">
						<Button
							variant="secondary"
							className="mx-auto block hover:bg-primary hover:text-primary-foreground"
						>
							View Collection
						</Button>
					</Link>
				</>
			)}
		</section>
	);
}
