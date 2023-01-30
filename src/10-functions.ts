(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const createProduct = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  };
  let product = createProduct('p1',new Date(),12,'XL')
})();
