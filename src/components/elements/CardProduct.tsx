import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import { FC } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Product {
	id: string;
	imageUrl: string;
	name: string;
	price: number;
}

export const CardProduct: FC<Product> = ({ id, imageUrl, name, price }) => {
	return (
		<Card className="bg-background border-0 shadow-[none] max-h-[462px] w-full ">
			<CardHeader className="p-0">
				<Image
					height={375}
					width={305}
					className="object-cover object-center w-full "
					src={imageUrl}
					alt="Product"
				/>
			</CardHeader>
			<div className="flex flex-col mt-2">
				<Link href={`/products/${id}`} className="w-fit">
					<Button variant="link" className="w-fit p-0 text-wrap text-start">
						{name}
					</Button>
				</Link>
				<span className="text-primary font-semibold ">£{price}</span>
			</div>
		</Card>
	);
};
