import { Separator } from "@/components/ui/separator";
import Navbar from "./Navbar";
import Category from "./Category";

export default function Header() {
	return (
		<header className="w-full flex flex-col items-center py-5 px-7 gap-2 ">
			<Navbar />
			<Separator className="hidden sm:block" />
			<Category />
		</header>
	);
}
