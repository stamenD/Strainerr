import { Component, OnInit } from "@angular/core";
import { DropDownService } from "~/services/dropdown-service";
@Component({
    selector: "actionBar",
    moduleId: module.id,
    templateUrl: "./actionBar.component.html",
    styleUrls: ['./actionBar.component.css']
})
export class ActionBarComponent implements OnInit {

    constructor(private dropDownService:DropDownService) { }

    ngOnInit(): void {
       
       
    }
    onNavBtnTap(){
        // This code will be called only in Android.
        this.dropDownService.tapButton()
        console.log("Navigation button tapped!");
    }
}
