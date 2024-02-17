import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface IProduct {
	imageSrc: string;
	productName: string;
	price: string;
}

const products: IProduct[] = [
	{
		imageSrc: "/images/Popular-1.png",
		productName: "The Poplar suede sofa",
		price: "£980",
	},
	{
		imageSrc: "/images/New-Ceramics-1.png",
		productName: "The Dandy chair",
		price: "£250",
	},
	{
		imageSrc: "/images/New-Ceramics-3.png",
		productName: "The Silky Vase",
		price: "£125",
	},
];

export default function ListingPopular() {
	return (
		<section className="px-6 container mx-auto pb-14 pt-20 lg:px-0 ">
			<h1 className="text-2xl mb-8 mx-auto">Our Popular Product</h1>
			<div className="w-full grid lg:grid-cols-4 gap-5 grid-cols-2 place-items-center mb-11 lg:grid-row-1">
				{products.map((product, index) => (
					<Card
						key={index}
						className={`bg-background border-0 shadow-[none] mx-h-[462px] w-full ${
							index === 0 ? "col-span-2" : ""
						}`}
					>
						<CardHeader className="p-0 relative">
							<Image
								height={375}
								width={305}
								className="object-cover w-full object-center"
								src={product.imageSrc}
								alt="Product"
							/>
						</CardHeader>
						<br />
						<p>{product.productName}</p>
						<p>{product.price}</p>
					</Card>
				))}
			</div>
			<Link href="/products">
				<Button
					variant="secondary"
					className="mx-auto block hover:bg-primary hover:text-primary-foreground"
				>
					View Collection
				</Button>
			</Link>
		</section>
	);
}
