export interface CardData {
  id: number;
  imageSrc: string;
  price: number;
  lastPrice: number;
  owner: string;
}

export interface FormInputs {
  title: string;
  price: number;
  image: FileList | undefined;
  date: string;
  network: string;
  mainnet: string;
  agreement: boolean;
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
