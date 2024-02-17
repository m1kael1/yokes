"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-separator";
import { BurgerMenu, CartIcon, UserAvatarIcon } from "@/asset/icons";
import { useCategory, useProductType } from "@/services/queries";

export default function SheetMenu() {
	const { data: category, isLoading } = useCategory();
	console.log(category);
	return (
		<Sheet>
			<SheetTrigger className="sm:hidden">
				<BurgerMenu className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className=" flex-row justify-start items-center space-y-0">
					<div className="flex gap-4">
						<CartIcon className="cursor-pointer" />
						<UserAvatarIcon className="cursor-pointer" />
					</div>
					<SheetTitle className="mx-auto">Yokes</SheetTitle>
				</SheetHeader>
				<Separator className="h-px bg-border" />
				<ul className="flex flex-col gap-3 mb-7 mt-4">
					{category?.map((category) => (
						<Link className="w-fit" key={category.name} href={`/`}>
							<SheetClose>
								<Button variant="link">{category.title}</Button>
							</SheetClose>
						</Link>
					))}
				</ul>
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
