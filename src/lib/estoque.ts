export default interface Product {
  id: number,
  name: string,
  quantity: number,
  price: number,
  lastUpdate: string,
  isPerishable: boolean,
  expiration?: string

}

export const estoque: Product[] = [{
  id: 1,
  name: 'test1',
  quantity: 2,
  price: 2,
  lastUpdate: 'ontote',
  isPerishable: false,

},
{
  id: 2,
  name: 'test2',
  quantity: 2,
  price: 2,
  lastUpdate: 'onte',
  isPerishable: true,
  expiration: 'amanha'



}]
let idCounter: number = 2

export function addProduct(data: Omit<Product, 'lastUpdate' | 'id'>) {
  const newProduct: Product = {
    id: idCounter++,
    lastUpdate: new Date().toISOString(),
    ...data
  }
  console.log('addProduct', newProduct)
  estoque.push(newProduct)
  return newProduct
}

export function deleteProduct(id: number) {
  console.log('to no delete')
  console.log(id)
  const index = estoque.findIndex((product) => product.id === id)
  if (index !== -1) {
    console.log('dentro do index')
    estoque.splice(index, 1)
    console.log(estoque)
  }
}

export function updateProduct(id: number, newData: Partial<Product>) {
  const index = estoque.findIndex((product) => product.id === id)
  if (index === -1) throw new Error("Produto nao encontrado")
  estoque[index] = {
    ...estoque[index],
    ...newData,
    lastUpdate: new Date().toISOString()
  }
  console.log(estoque[index])
  console.log(estoque)
  return estoque[index]
}
