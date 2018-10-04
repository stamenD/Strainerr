import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class DropDownService {
    public change =  new Subject();

    tapButton() {
        this.change.next(true);
    }
}