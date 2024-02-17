"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { useCategory } from "@/services/queries";
import { useEffect } from "react";
import { preload } from "swr";
import fetcher from "@/services/fetcher";

export default function Category() {
	const { data: category } = useCategory();

	return (
		<NavigationMenu className="hidden sm:block mx-auto">
			<NavigationMenuList>
				{category?.map((category) => (
					<NavigationMenuItem key={category.name}>
						<Link href={`/${category.name}`} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{category.title}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
