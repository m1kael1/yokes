import Banner from "@/components/products/Banner";
import Filter from "@/components/products/Filter";
import ListProduct from "@/components/products/ListProduct";
import Short from "@/components/products/Short";
import SideMenu from "@/components/products/SideMenu";

export default function Products() {
	return (
		<main>
			<Banner />
			<section className="flex justify-center gap-5 lg:hidden">
				<Filter />
				<Short />
			</section>
			<section className="flex max-w-7xl mx-auto">
				<SideMenu />
				<ListProduct />
			</section>
		</main>
	);
}
