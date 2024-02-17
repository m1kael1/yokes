import Image from "next/image";

export default function Banner() {
	return (
		<div className="w-full h-52 relative mb-6 flex items-end justify-start">
			<Image fill src="/images/Popular-1.png" objectFit="cover" alt="" />
			<h1 className="px-6 text-4xl relative text-background  w-full  max-w-7xl mx-auto mb-6">
				All Products
			</h1>
		</div>
	);
}
