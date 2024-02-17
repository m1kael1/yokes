import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
	const category = await prisma.category.findMany();
	return Response.json(category);
}
