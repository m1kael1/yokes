import DashboardHeader from "@/components/dashboard/elements/DashboardHeader";
import "../globals.css";
import DashboardNavbar from "@/components/dashboard/elements/DashboardNavbar";

export const metadata = {
	title: "Yokes | Dashboard",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<DashboardHeader />
				<div className="h-screen flex overflow-hidden ">
					<DashboardNavbar />
					<main className="w-full pt-16"> {children}</main>
				</div>
			</body>
		</html>
	);
}
