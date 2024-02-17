"use client";

import { PRCES } from "./Filter";
import { CheckBox } from "./CheckBox";
import { Separator } from "../ui/separator";
import { useDesigner, useProductType } from "@/services/queries";

export default function SideMenu() {
	const { data: productTypes } = useProductType();
	const { data: designers } = useDesigner();
	return (
		<aside className="hidden lg:flex lg:flex-col w-1/5 pl-6 mb-8">
			<div className="flex flex-col gap-8">
				<div>
					<h1 className="text-start mb-1">Product type</h1>
					<Separator />
					<ul className="mt-4 flex flex-col gap-3">
						{productTypes?.map(({ name, title }) => (
							<CheckBox key={name} id={name} label={title} />
						))}
					</ul>
				</div>
				<div>
					<h1 className="text-start mb-2">Price</h1>
					<Separator />
					<ul className="mt-4 flex flex-col gap-3">
						{PRCES.map(({ id, label }) => (
							<CheckBox key={id} id={id} label={label} />
						))}
					</ul>
				</div>
				<div>
					<h1 className="text-start mb-2">Designer</h1>
					<Separator />
					<ul className="mt-4 flex flex-col gap-3">
						{designers?.map(({ id, name }) => (
							<CheckBox key={id} id={id} label={name} />
						))}
					</ul>
				</div>
			</div>
		</aside>
	);
}
