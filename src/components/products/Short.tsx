import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Short() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" className="bg-card">
					Shorting
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className=""></SheetContent>
		</Sheet>
	);
}
