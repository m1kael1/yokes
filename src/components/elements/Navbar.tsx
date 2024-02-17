import SheetMenu from "./SheetMenu";
import { CartIcon, UserAvatarIcon } from "@/asset/icons";
import SheetSearch from "./SheetSearch";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex w-full justify-between items-center flex-row-reverse sm:flex-row ">
			<div className="flex md:block items-center gap-5 ">
				<SheetSearch />
				<SheetMenu />
			</div>
			<Link href="/">
				<h1 className="text-2xl font-semibold">Yokes</h1>
			</Link>
			<div className="sm:flex gap-4 hidden">
				<CartIcon className="cursor-pointer" />
				<UserAvatarIcon className="cursor-pointer" />
			</div>
		</nav>
	);
}
