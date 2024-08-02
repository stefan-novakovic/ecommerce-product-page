import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';

export type ProductType = {
   sku?: string;
   thumbnail?: string;
   name?: string;
   desc?: string;
   price?: number;
   oldPrice?: number;
};

export const products: ProductType[] = [
   {
      sku: 'product-1',
      thumbnail: thumbnail1,
      name: 'Fall Limited Edition Sneakers',
      desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 125,
      oldPrice: 250
   }
];
