import { Props } from ".";

export const PurchaseIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width={24}
				height={24}
				fill="white"
				style={{ mixBlendMode: "multiply" }}
			/>
			<path
				d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM21 6V8.25H3V6H21ZM3 18V9.75H21V18H3Z"
				fill="#25424B"
			/>
			<path d="M12 15H4.5V16.5H12V15Z" fill="#25424B" />
		</svg>
	);
};
