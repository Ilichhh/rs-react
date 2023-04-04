export interface CardPreviewData {
  id: number;
  name: string;
  status: string;
  image: string;
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
