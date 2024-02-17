"use client";

import { CardProduct } from "../elements/CardProduct";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "../ui/pagination";
import { useCategory, useProducts } from "@/services/queries";

export default function ListProduct() {
	const { data: products, isLoading } = useProducts();

	return (
		<section className="container px-6 sm:mx-auto mt-6 lg:w-fit lg:m-0 pb-12">
			{isLoading ? (
				<p>Loading...</p>
			) : products?.length ? (
				<>
					<ul className="grid w-full md:grid-cols-4 gap-5 grid-cols-2 place-items-center mb-11">
						{products?.map(({ id, name, imageUrl, price }) => (
							<CardProduct
								key={id}
								id={id}
								imageUrl={imageUrl}
								name={name}
								price={price}
							/>
						))}
					</ul>
					<PaginationDemo />
				</>
			) : (
				<p>No Collection</p>
			)}
		</section>
	);
}

export function PaginationDemo() {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
