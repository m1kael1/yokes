import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardNavbar = () => {
	return (
		<aside className="container w-64 h-screen text-primary  top-0 left-0 pt-16 border-r-4 bg-card">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-lg font-bold pb-2">
						Product
					</AccordionTrigger>
					<AccordionContent>
						<Link href="/dashboard/product/list">
							<Button variant="link" className="py-0 pr-0">
								List Product
							</Button>
						</Link>
						<Link href="/dashboard/product/add">
							<Button variant="link" className="py-0 pr-0">
								Add Product
							</Button>
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			{/* Designer */}
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-lg font-bold pb-2">
						Designer
					</AccordionTrigger>
					<AccordionContent>
						<Link href="/dashboard/designer/list">
							<Button variant="link" className="py-0 pr-0">
								List Designer
							</Button>
						</Link>
						<Link href="/dashboard/designer/add">
							<Button variant="link" className="py-0 pr-0">
								Add Designer
							</Button>
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</aside>
	);
};

export default DashboardNavbar;
