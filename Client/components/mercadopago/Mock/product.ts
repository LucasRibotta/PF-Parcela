
export interface IProduct {
    id: number;
    title: string;
    price: number;
    img: string;
    description: string[];
  }
  
  export default function Product({id, title, price, description, img}:IProduct) {
    id: id
    title: title
    price: price
    description: description
    img: img
  };