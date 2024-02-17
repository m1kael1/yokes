import Link from "next/link";

const DashboardHeader = () => {
	return (
		<header className=" h-16 w-full fixed left-0 top-0 z-50 border-b-4 flex items-center bg-secondary">
			<section className="container">
				<Link href="/dashboard">
					<h1 className="text-2xl font-semibold">Yokes</h1>
				</Link>
			</section>
		</header>
	);
};

export default DashboardHeader;
