export interface CardData {
  id: number;
  imageSrc: string;
  price: number;
  lastPrice: number;
  owner: string;
}

export interface ProductData {
  title: string;
  price: number;
  imageSrc: string;
  date: string;
  network: string;
  mainnet: string;
  agreement: boolean;
}

export interface Products {
  products: ProductData[];
}
