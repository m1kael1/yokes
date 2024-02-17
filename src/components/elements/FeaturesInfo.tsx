import {
	CheckMark,
	DeliveryIcon,
	PurchaseIcon,
	SproutIcon,
} from "@/asset/icons";
import { CardFeaturesInfo } from "./CardFeaturesInfo";

export interface IFeature {
	icon: JSX.Element;
	title: string;
	desc: string;
}
const feartures: IFeature[] = [
	{
		icon: <DeliveryIcon />,
		title: "Next day as standard",
		desc: "Order before 3pm and get your order the next day as standard",
	},
	{
		icon: <CheckMark />,
		title: "Made by true artisans",
		desc: "Handmade crafted goods made with real passion and craftmanship",
	},
	{
		icon: <PurchaseIcon />,
		title: "Unbeatable prices",
		desc: "For our materials and quality you won't find better prices anywhere",
	},
	{
		icon: <SproutIcon />,
		title: "Recycled packaging",
		desc: "We use 100% recycled packaging to ensure our footprint is manageable",
	},
];

export function FeaturesInfo() {
	return (
		<section className="px-6 pt-12 pb-11 lg:px-0 container mx-0 sm:mx-auto sm:w-fit">
			<h3 className="w-fit sm:mx-auto text-lg mb-9">
				What makes our brand different
			</h3>
			<div className="flex flex-col gap-10 w-fit sm:mx-auto lg:grid-cols-4 sm:grid sm:grid-cols-2 lg:px-5 ">
				{feartures.map((feature, index) => {
					return <CardFeaturesInfo key={index} feature={feature} />;
				})}
			</div>
		</section>
	);
}
