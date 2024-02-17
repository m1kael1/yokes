import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
	const productType = await prisma.productType.findMany();
	return Response.json(productType);
}
