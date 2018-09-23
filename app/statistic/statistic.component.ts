import { Component, OnInit } from '@angular/core';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { LinearAxis } from "nativescript-ui-chart";
import { StorageService } from '~/services/storage-service';


@Component({
    selector: "statistic",
    moduleId: module.id,
    templateUrl: "./statistic.component.html",
    styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
    public categoricalSource;
    private _linearAxisZoomPan: LinearAxis;
    private _linearAxisZoom: LinearAxis;
    constructor(private storageService: StorageService) { 
    }


    ngOnInit() {

        this.categoricalSource = this.storageService.getAllWorkouts(); 
   

        for (let i = 0; i <  this.categoricalSource.length; i++) {

             this.categoricalSource[i]["date"] = new Date( this.categoricalSource[i]["date"]);
             this.categoricalSource[i]["exercise"] = this.categoricalSource[i]["bonus"] + Math.random()*10;
        }
        console.log("---------------------------------")
        console.log( this.categoricalSource)
        // [
        //     { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
        //     { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
        //     { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
        //     { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
        //     { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        // ];


        this._linearAxisZoom = new LinearAxis();
        this._linearAxisZoom.horizontalLocation = "Left";
        this._linearAxisZoom.allowZoom = true;

        this._linearAxisZoomPan = new LinearAxis();
        this._linearAxisZoomPan.horizontalLocation = "Right";
        this._linearAxisZoomPan.allowZoom = true;
        this._linearAxisZoomPan.allowPan = true;
    }


    public get linearAxisZoomPan(): LinearAxis {
        return this._linearAxisZoomPan;
    }

    public set linearAxisZoomPan(value: LinearAxis) {
        this._linearAxisZoomPan = value;
    }

    public get linearAxisZoom(): LinearAxis {
        return this._linearAxisZoom;
    }

    public set linearAxisZoom(value: LinearAxis) {
        this._linearAxisZoom = value;
    }
}