import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    public id = 1;

    constructor(private _changeDetectionRef: ChangeDetectorRef) { }

    @ViewChild("sidedrawerId") public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        //fairly certain this statement is never entered
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
 
    }

    public openDrawer() {
        console.log("Drawer method reached");
        console.log(this.drawer); //returns undefined
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap(id) {
        this.drawer.closeDrawer();
        this.id = id;
    }
}