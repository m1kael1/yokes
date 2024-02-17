import { Button } from "../ui/button";

export const FeaturesInfoBottom = () => {
	return (
		<section className="pt-9 lg:grid lg:grid-cols-2 lg:pt-0 ">
			<div className="flex flex-col gap-8 pb-12 px-6 sm:max-w-lg lg:justify-evenly sm:mx-auto sm:px-0">
				<div className="flex flex-col gap-5">
					<h3 className="text-xl lg:text-2xl">
						From a studio in London to a global brand with over 400 outlets
					</h3>
					<p className="text-sm  lg:text-base">
						When we started Avion, the idea was simple. Make high quality
						furniture affordable and available for the mass market.
					</p>
					<p className="text-sm  lg:text-base text-justify">
						Handmade, and lovingly crafted furniture and homeware is what we
						live, breathe and design so our Chelsea boutique become the hotbed
						for the London interior design community.
					</p>
				</div>
				<Button className="lg:w-fit">Get in Touch</Button>
			</div>

			<div className="w-full h-[358px] bg-primary lg:h-[603px]">
				<img
					src="/images/Features-Bottom.png"
					className="w-full h-full object-cover object-center"
					alt=""
				/>
			</div>
		</section>
	);
};
