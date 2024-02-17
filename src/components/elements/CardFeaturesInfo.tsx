import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { IFeature } from "./FeaturesInfo";

interface Props {
	feature: IFeature;
}

export const CardFeaturesInfo = ({ feature }: Props) => {
	return (
		<Card className="border-0 shadow-[none] lg:max-w-64 bg-background">
			<CardHeader className="p-0 gap-4">
				{feature.icon}
				<CardTitle>{feature.title}</CardTitle>
				<CardDescription>{feature.desc}</CardDescription>
			</CardHeader>
		</Card>
	);
};
