import { FC } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export interface CheckBoxProps {
	id: string;
	label: string;
}

export const CheckBox: FC<CheckBoxProps> = ({ id, label }) => {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id={id} />
			<Label htmlFor="terms">{label}</Label>
		</div>
	);
};
