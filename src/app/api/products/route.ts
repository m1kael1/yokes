import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
	const products = await prisma.product.findMany({
		include: {
			productType: true,
		},
	});
	return Response.json(products);
}
