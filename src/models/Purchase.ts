import { IAddress } from "./Address";
import { ICoffee } from "./Coffee";

export interface IPurchase {
  id: string;
  coffeesList: ICoffee[];
  payment: string;
  address: IAddress;
}