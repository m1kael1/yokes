"use client";

import Hero from "@/components/elements/Hero";
import { FeaturesInfo } from "@/components/elements/FeaturesInfo";
import ListingNew from "@/components/elements/ListingNew";
import ListingPopular from "@/components/elements/ListingPopular";
import { EmailSignUp } from "@/components/elements/EmailSignUp";
import { FeaturesInfoBottom } from "@/components/elements/FeaturesInfoBottom";
import Category from "@/components/elements/Category";

export default function Home() {
	return (
		<main>
			<Category />
			<Hero />
			<FeaturesInfo />
			<ListingNew />
			<ListingPopular />
			<EmailSignUp />
			<FeaturesInfoBottom />
		</main>
	);
}