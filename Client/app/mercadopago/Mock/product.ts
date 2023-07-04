export interface IProduct {
    id: number;
    title: string;
    price: number;
    img: string;
    description: string[];
  }
  
  export const Product: IProduct = {
    id: 1,
    title: "Parcela",
    price: 26000,
    description: [
      "PArcela totalmente plana, con gente adentro pero simpatica, ellos son gratis y van como exclavos, sobre todo el pelado",
    ],
    img: "https://casolutions.cl/img/entrada.jpg",
  };