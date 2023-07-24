export const images = [
  {
    id: "01",
    src: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    alt: "Awesome watch",
  },
  {
    id: "02",
    src: "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80",
    alt: "Awesome watch",
  },
  {
    id: "03",
    src: "https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "Awesome watch",
  },
  {
    id: "04",
    src: "https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    alt: "Awesome watch",
  },
  {
    id: "05",
    src: "https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    alt: "Awesome watch",
  },
  {
    id: "06",
    src: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80",
    alt: "Awesome watch",
  },
];

export const products = [
  {
    id: "1",
    name: "Special Soup",
    currency: "USD",
    price: 19,
    salePrice: 12.99,
    flag: "new",
    imageUrl:
      "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    rating: 4,
    ratingCount: 199,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "2",
    name: "Fried Noodles",
    currency: "USD",
    price: 20,
    salePrice: 17.99,
    flag: "on-sale",
    imageUrl:
      "https://images.unsplash.com/photo-1635685296916-95acaf58471f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5vb2RsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
    ratingCount: 300,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "3",
    name: "Paneer Momos",
    currency: "USD",
    price: 5,
    salePrice: 3.99,
    imageUrl:
      "https://images.unsplash.com/photo-1647999019630-dabe1a837693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3Vya3VyZSUyMG1vbW9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 4,
    ratingCount: 900,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "4",
    name: "Roast Chicken Wrap",
    currency: "USD",
    price: 20,
    salePrice: 19.99,
    imageUrl:
      "https://images.unsplash.com/photo-1630914441316-6d95bbd00caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    ratingCount: 166,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
export type ProductImage = ElementType<typeof images>;
