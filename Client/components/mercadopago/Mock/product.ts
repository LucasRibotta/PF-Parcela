
export interface IProduct {
  _id: string;
  name: string;
  price?: number | string | null;
  image: string[];
  description: string;
}

export default function Product(product: IProduct) {
  const { _id, name, price, description, image } = product
};
