import dummyData from "./mockdata.json"
import Account from './models/account';

export default class AccountRepository {

    private constructor(){}

    private static instance: AccountRepository

    static getInstance() : AccountRepository  {
        if(!this.instance){
            this.instance = new AccountRepository()
        }
        return this.instance;
    }

    async getAllAccounts() : Promise<Account[]> {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return  dummyData.items;
    }

    async getAccountSummary(id: number) : Promise<Account > {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const account =  dummyData.items.find((item)=> item.id === id );
        if(account){
            return account;
        }
        return Promise.reject("No account found for this id");
    }

}
