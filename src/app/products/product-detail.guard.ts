import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = +activatedRouteSnapshot.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('invalid product id');
      this.router.navigate(['/products']);
      return false;
    }
    // console.log(activatedRouteSnapshot);
    return true;
  }
}
