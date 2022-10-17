export interface Card {
  _id?: string;
  name?: string;
  address: string;
  description: string;
  phone: string;
  logo: string;
  backgroundImg: string;
  cardNumber?: number;
  user_id?: string;
}
