export class API {
    private name: string ;
    constructor(n:string){
      this.name = n ;
    };
    describe(){
      console.log(`Your name is  ${this.name}`);
    }
}