export class AuthService {
    isAuth:boolean = false;
    
    signIn(){
        this.isAuth = true;
    }

    signOut(){
        this.isAuth = false;
    }
}
