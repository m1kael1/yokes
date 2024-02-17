import { Props } from ".";

export const BurgerMenu = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width={24}
			height={24}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width={16}
				height={16}
				fill="white"
				style={{ mixBlendMode: "multiply" }}
			/>
			<path d="M14 3H2V4H14V3Z" fill="#25424B" />
			<path d="M14 12H2V13H14V12Z" fill="#25424B" />
			<path d="M14 6H2V7H14V6Z" fill="#25424B" />
			<path d="M14 9H2V10H14V9Z" fill="#25424B" />
		</svg>
	);
};
