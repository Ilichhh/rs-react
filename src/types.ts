export interface CardData {
  id: number;
  imageSrc: string;
  price: number;
  lastPrice: number;
  owner: string;
}

export interface ProductData {
  title: string;
  imageSrc: string;
  date: string;
  network: string;
}

export interface Products {
  products: ProductData[];
}
