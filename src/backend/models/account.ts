import AccountType from "./account_type";
import Company from "./company";
import Person from "./person";

export default interface Account {
  code?: string;
  id?: number;
  is: string;
  is_buyer?: boolean;
  is_organisor?: boolean;
  is_reseller?: boolean;
  is_supplier?: boolean;
  type?: AccountType;
  type_detail?: Company | Person;
}
