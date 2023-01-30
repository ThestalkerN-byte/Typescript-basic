;(() => {
  type Product = {
    title: string
    createdAt: Date
    stock: number
  }
  const products: Product[] = []
  products.push({
    title: 'hola',
    createdAt: new Date(),
    stock: 23
  })
})()
