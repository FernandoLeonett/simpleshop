export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}
export interface ItemCart{

  item: Product;
  quantity:number;
}



