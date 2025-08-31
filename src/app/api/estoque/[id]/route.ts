import { deleteProduct, updateProduct } from "@/lib/estoque";

export async function PUT(req: Request, ctx: RouteContext<'/api/estoque/[id]'>) {
  const body = await req.json()
  let { id } = await ctx.params
  id = parseInt(id)

  const update = updateProduct(id, body)
  return Response.json({ update, status: 201 })
}

export async function DELETE(req: Request, ctx: RouteContext<'/api/estoque/[id]'>) {
  let { id } = await ctx.params
  id = parseInt(id)
  deleteProduct(id)
  return Response.json({ status: 204 })
}
