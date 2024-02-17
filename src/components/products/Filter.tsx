import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { CheckBox } from "./CheckBox";
import { CheckBoxProps } from "./CheckBox";

export const PRODUCT_TYPE: CheckBoxProps[] = [
	{
		id: "furniture",
		label: "Furniture",
	},
	{
		id: "homeware",
		label: "Homeware",
	},
	{
		id: "sofas",
		label: "Sofas",
	},
	{
		id: "light-fittings",
		label: "Light fittings",
	},
	{
		id: "accessories",
		label: "Accessories",
	},
];
export const PRCES: CheckBoxProps[] = [
	{
		id: "low",
		label: "0 - 100",
	},
	{
		id: "mid",
		label: "100 - 200",
	},
	{
		id: "high",
		label: "250 +",
	},
];
export const DESIGNER: CheckBoxProps[] = [
	{
		id: "robert-smith",
		label: "Robert Smith",
	},
	{
		id: "liam-galagher",
		label: "Liam Galagher",
	},
	{
		id: "biggie-smalls",
		label: "Biggie Smalls",
	},
];
export default function Filter() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" className="bg-card">
					Filters
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader className="text-start">Product type</SheetHeader>
				<Separator />
				<ul className="mt-4 flex flex-col gap-3">
					{PRODUCT_TYPE.map(({ id, label }) => (
						<CheckBox key={id} id={id} label={label} />
					))}
				</ul>
				<SheetHeader className="text-start mt-6">Price</SheetHeader>
				<Separator />
				<ul className="mt-4 flex flex-col gap-3">
					{PRCES.map(({ id, label }) => (
						<CheckBox key={id} id={id} label={label} />
					))}
				</ul>
				<SheetHeader className="text-start mt-6">Designer</SheetHeader>
				<Separator />
				<ul className="mt-4 flex flex-col gap-3">
					{DESIGNER.map(({ id, label }) => (
						<CheckBox key={id} id={id} label={label} />
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
}
