import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
	const designers = await prisma.designer.findMany({});
	return Response.json(designers);
}
