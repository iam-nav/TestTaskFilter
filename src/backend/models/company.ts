import AccountType from "./account_type";

export default interface Company {
  account: AccountType;
  coc: string;
  code: string;
  id: string;
  is: string;
  legalname: string;
  name: string;
  phonenumber: string;
  vat: string;
  website: string;
}
