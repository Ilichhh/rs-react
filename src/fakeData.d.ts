export interface CardProps {
  id: number;
  imageSrc: string;
  price: number;
  lastPrice: number;
  owner: string;
}

export const data: CardProps[];

export const networks: string[];

export const mainnetSelector: string[];
