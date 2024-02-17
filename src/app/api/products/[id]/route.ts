import { prisma } from "@/lib/prisma";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function GET(request: Request, { params }: Params) {
	const product = await prisma.product.findUnique({
		where: {
			id: params.id,
		},
	});
	return Response.json(product);
}
