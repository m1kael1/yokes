import { SearchIcon } from "@/asset/icons";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";

export default function SheetSearch() {
	return (
		<Sheet>
			<SheetTrigger>
				<SearchIcon className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent className="max-w-lg  p-4 rounded-2xl sm:mx-auto" side="top">
				<SheetHeader className="flex flex-row items-center">
					Search Collection
				</SheetHeader>
				<Input className="rounded-xl " />
			</SheetContent>
		</Sheet>
	);
}
