export default class GlobalVariables {
    constructor() {
        this.userId = localStorage.getItem('userId') || "";
        this.dbUrl = 'http://localhost:3000/users'; 
    }
    userId:string = "";
    dbUrl:string = ""


}