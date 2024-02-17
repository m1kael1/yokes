import { Facebook, Instagram, LinkedIn, Skype, Twitter } from "@/asset/icons";
import { Separator } from "../ui/separator";

const SocialLinksIcon = [
	<LinkedIn />,
	<Twitter />,
	<Facebook />,
	<Twitter />,
	<Skype />,
	<Instagram />,
];

export default function Footer() {
	return (
		<footer className="px-6 bg-primary pb-6 pt-14 text-primary-foreground ">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-2 gap-5  sm:grid-cols-4">
					<div>
						<h1 className="text-2xl font-semibold mb-3">Yokes</h1>
						<p className="text-sm leading-7">
							21 New York Street
							<br />
							New York City
							<br />
							United States of America
							<br />
							432 34
						</p>
					</div>
					<div>
						<p className="mb-5">Social Links</p>
						<div className="grid grid-cols-3 gap-y-5 w-fit lg:grid-cols-6 ">
							{SocialLinksIcon.map((icon, index) => (
								<span key={index} className="pr-6">
									{icon}
								</span>
							))}
						</div>
					</div>
					<div>
						<p className="mb-3">Our Company</p>
						<p className="text-sm leading-7">
							About us <br />
							Vacancies <br />
							Contact us <br />
							Privacy <br />
							Returns policy
						</p>
					</div>
					<div>
						<p className="mb-3">Menu</p>
						<p className="text-sm leading-7">
							New arrivals <br />
							Best sellers <br />
							Recently viewed <br />
							Popular this week <br />
							All Products
						</p>
					</div>
				</div>
				<Separator className="mt-7 mb-4" />
				<p>Copyright 2022 CV Yokes</p>
			</div>
		</footer>
	);
}
