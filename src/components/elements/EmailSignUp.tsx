import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const EmailSignUp = () => {
	return (
		<section className="sm:py-14 sm:bg-card ">
			<div className="px-6 py-12 sm:bg-background sm:py-16 sm:container mx-auto">
				<div className="flex flex-col gap-16 sm:gap-20 sm:max-w-[571px] mx-auto ">
					<div className="flex flex-col gap-4">
						<h3 className="text-xl sm:text-4xl sm:text-center">
							Join the club and get the benefits
						</h3>
						<p className="text-sm text-justify sm:text-center sm:text-base">
							Sign up for our newsletter and receive exclusive offers on new
							ranges, sales, pop up stores and more
						</p>
					</div>
					<div className="flex items-center">
						<Input className="h-10" placeholder="your@email.com" />
						<Button className="h-full ">Subscribe</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
