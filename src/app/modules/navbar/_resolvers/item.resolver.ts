import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Item } from './item';

@Injectable()
export class ItemResolver implements Resolve<Item> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> | Promise<Item> | Item {
        return of({
            name: 'Item ' + route.params.id
        });
    }

}
