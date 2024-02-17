import Image from "next/image";
import { Button } from "../ui/button";

export default function Herok() {
	return (
		<section className="lg:py-14 container px-0 mx-auto">
			<div className="flex ">
				<div className="px-6 pb-6 pt-10 lg:pl-14 lg:pr-20 lg:py-14 bg-primary flex flex-col justify-between lg:max-w-[820px]">
					<div className="lg:mr-32">
						<p className="text-white text-3xl mb-9">
							The furniture brand for the future, with timeless designs
						</p>
						<Button className="hidden lg:block hover:bg-destructive bg-primary-foreground text-accent-foreground hover:text-secondary">
							View collection
						</Button>
					</div>
					<p className="text-white text-lg mt-16 lg:mt-0">
						A new era in eco friendly furniture with Avelon, the French luxury
						retail brand with nice fonts, tasteful colors and a beautiful way to
						display things digitally using modern web technologies.
					</p>
					<Button className="lg:hidden hover:bg-destructive bg-primary-foreground text-accent-foreground hover:text-secondary mt-8">
						View collection
					</Button>
				</div>
				<div className="min-h-[520px] w-full hidden md:block relative">
					<Image
						fill
						className="object-center h-full w-full object-cover"
						src="/images/Right-Image.png"
						alt="Right image"
					/>
				</div>
			</div>
		</section>
	);
}
