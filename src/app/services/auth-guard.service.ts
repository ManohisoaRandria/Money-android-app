import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  canActivate():Observable<boolean>| Promise<boolean>|boolean {
    if(localStorage.getItem('token')!= undefined && localStorage.getItem('token')!=''){
      return true;
    }else{
      this.router.navigate(['/']);
    }
  }

  constructor(private router:Router) { }
}
