
export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}


export const categories: Category[] = [
  { id: 1, name: "Caps" },
  { id: 2, name: "Shoes" },
  { id: 3, name: "Pants" },
  { id: 4, name: "T-Shirt" },
];

export const products: Product[] = [
  {
    //caps
    id: 1,
    name: "Casquette Holographic Tech",
    category: categories[0].name,
    price: "2 000",
    image: "/images/2_caps.jfif",
  },
  {
    id: 5,
    name: "Casquette Dark Tech",
    category: categories[0].name,
    price: "3 500",
    image: "/images/grey_caps.jfif",
  },
  {
    id: 7,
    name: "Casquette Light Tech",
    category: categories[0].name,
    price: "3 500",
    image: "/images/Go Sport.jfif",
  },
  {
    id: 8,
    name: "Casquette Tech",
    category: categories[0].name,
    price: "3 500",
    image: "/images/bleu_caps.jfif",
  },
  {
    id: 9,
    name: "Casquette Neon Tech",
    category: categories[0].name,
    price: "4 000",
    image: "/images/caps_gucci.jfif",
  },
  {
    id: 10,
    name: "Casquette Ultra Tech",
    category: categories[0].name,
    price: "5 000",
    image: "/images/caps_soldier.jfif",
  },
  {
    id: 11,
    name: "Casquette Tech",
    category: categories[0].name,
    price: "3 500",
    image: "/images/red_caps.jfif",
  },
  {
    id: 12,
    name: "Casquette Neon Tech",
    category: categories[0].name,
    price: "4 000",
    image: "/images/caps_tricolor.jfif",
  },
  //shoes
  {
    id: 2,
    name: "Baskets Holographic Tech",
    category: categories[1].name,
    price: "5 000",
    image: "/images/air_max.jfif",
  },
  {
    id: 6,
    name: "Baskets Dark Tech",
    category: categories[1].name,
    price: "6 500",
    image: "/images/air_max (1).jfif",
  },
  {
    id: 13,
    name: "Baskets Light Tech",
    category: categories[1].name,
    price: "6 500",
    image: "/images/air_max (2).jfif",
  },
  {
    id: 14,
    name: "Baskets Tech",
    category: categories[1].name,
    price: "6 500",
    image: "/images/Nike Air Max Plus TN 'Pink Fade' Women's.jfif",
  },
  {
    id: 15,
    name: "Baskets Neon Tech",
    category: categories[1].name,
    price: "7 000",
    image: "/images/Sapatilhas Nike Air Max Plus Júnior.jfif",
  },
  {
    id: 16,
    name: "Baskets Ultra Tech",
    category: categories[1].name,
    price: "8 000",
    image: "/images/shoes_1.jfif",
  },
  {
    id: 17,
    name: "Baskets Tech",
    category: categories[1].name,
    price: "6 500",
    image: "/images/shoes_2.jfif",
  },
  {
    id: 18,
    name: "Baskets Neon Tech",
    category: categories[1].name,
    price: "7 000",
    image: "/images/shoes_black.jfif",
  },
  //pants
  {
    id: 3,
    name: "Pantalon Holographic Tech",
    category: categories[2].name,
    price: "4 000",
    image: "/images/pants_1.jfif",
  },
  {
    id: 9,
    name: "Pantalon Dark Tech",
    category: categories[2].name,
    price: "5 500",
    image: "/images/pants_2.jfif",
  },
  {
    id: 19,
    name: "Pantalon Light Tech",
    category: categories[2].name,
    price: "5 500",
    image: "/images/pants_3.jfif",
  },
  {
    id: 20,
    name: "Pantalon Tech",
    category: categories[2].name,
    price: "5 500",
    image: "/images/pants_4.jfif",
  },
  {
    id: 21,
    name: "Pantalon Neon Tech",
    category: categories[2].name,
    price: "6 000",
    image: "/images/pants_5.jfif",
  },
  {
    id: 22,
    name: "Pantalon Ultra Tech",
    category: categories[2].name,
    price: "7 000",
    image: "/images/pants_6.jfif",
  },
  {
    id: 23,
    name: "Pantalon Tech",
    category: categories[2].name,
    price: "5 500",
    image: "/images/pants_7.jfif",
  },
  {
    id: 24,
    name: "Pantalon Neon Tech",
    category: categories[2].name,
    price: "6 000",
    image: "/images/pants_8.jfif",
  },
  //t-shirt
  {
    id: 4,
    name: "T-Shirt Holographic Tech",
    category: categories[3].name,
    price: "3 000",
    image: "/images/lacoste_1.jfif",
  },
  {
    id: 8,
    name: "T-Shirt Dark Tech",
    category: categories[3].name,
    price: "4 500",
    image: "/images/lacoste_2.jfif",
  },
  {
    id: 25,
    name: "T-Shirt Light Tech",
    category: categories[3].name,
    price: "4 500",
    image: "/images/lacoste_3.jfif",
  },
  {
    id: 26,
    name: "T-Shirt Tech",
    category: categories[3].name,
    price: "4 500",
    image: "/images/lacoste_4.jfif",
  },
  {
    id: 27,
    name: "T-Shirt Neon Tech",
    category: categories[3].name,
    price: "5 000",
    image: "/images/lacoste_5.jfif",
  },
  {
    id: 28,
    name: "T-Shirt Ultra Tech",
    category: categories[3].name,
    price: "6 000",
    image: "/images/lacoste_6.jfif",
  },
  {
    id: 29,
    name: "T-Shirt Tech",
    category: categories[3].name,
    price: "4 500",
    image: "/images/lacoste_7.jfif",
  },
  {
    id: 30,
    name: "T-Shirt Neon Tech",
    category: categories[3].name,
    price: "5 000",
    image: "/images/lacoste_8.jfif",
  },
];
