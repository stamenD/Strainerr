import { Component, OnInit } from '@angular/core';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { LinearAxis } from "nativescript-ui-chart";
import { StorageService } from '../services/storage-service';
import { forEach } from '@angular/router/src/utils/collection';
import { ExercisesService } from '~/services/exercises-service';
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { alert } from "tns-core-modules/ui/dialogs";
@Component({
    selector: "statistic",
    moduleId: module.id,
    templateUrl: "./statistic.component.html",
    styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
    public categoricalSource = [];
    public timesPerWeek = {};
    public allWorkouts = [];
    public mostTimesPerWeek = {};
    public sourcePie = [];
    public timesPerThisWeek = {};
    public minWeek = new Date();
    public selectTab = 0;
    public exercises
    public workouts
    public thisWeek
    public maxWeek = new Date();;
    private _linearAxisZoomPan: LinearAxis;
    private _linearAxisZoom: LinearAxis;
    public selectedExercise = -1


    public tabSelectedIndex: number;
    public tabSelectedIndexResult: string;
    public tabSelectedIndexInner: number;

    constructor(private storageService: StorageService, private exercisesService: ExercisesService) {
        this.tabSelectedIndex = 0;
        this.tabSelectedIndexInner = 0;
        // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    }

    onSelectedIndexChangedInner(args: SelectedIndexChangedEventData) {
        const newIndex = args.newIndex;
        this.selectedExercise = newIndex
    }

    ngOnInit() {
        this.exercises = this.exercisesService.getExercises();
        this.workouts = this.storageService.getAllWorkouts();
        this.thisWeek = this.getWeekNumber(new Date())
        this.timesPerThisWeek["exercise"] = {}
        this.mostTimesPerWeek["exercise"] = {}
        for (let i = 0; i < this.exercises.length; i++) {
            this.sourcePie[i] = {}
            this.allWorkouts[i] = {}
            this.allWorkouts[i]["name"] = this.exercises[i]
            this.allWorkouts[i]["amount"] = 0
            this.sourcePie[i]["name"] = this.exercises[i]
            this.sourcePie[i]["amount"] = 0
            this.timesPerThisWeek["exercise"][i] = 0;
            this.mostTimesPerWeek["exercise"][i] = {};
            this.mostTimesPerWeek["exercise"][i]["count"] = 0;
            this.mostTimesPerWeek["exercise"][i]["date"] = undefined;
        }
        this.timesPerThisWeek["bonus"] = 0
        this.mostTimesPerWeek["bonus"] = 0
        for (let i = 0; i < this.workouts.length; i++) {

            let n = this.getWeekNumber(new Date(this.workouts[i]["date"]))
            let d = (1 + (n - 1) * 7); // 1st of January + 7 days for each week
            let y = new Date(new Date(this.workouts[i]["date"]).getFullYear(), 0, d).toDateString();
            if (this.workouts[i]["exercise"] != -1) {
                this.allWorkouts[this.workouts[i]["exercise"]]["amount"]++;
                if (this.timesPerWeek[y]) {
                    if (this.timesPerWeek[y][this.workouts[i]["exercise"]])
                        this.timesPerWeek[y][this.workouts[i]["exercise"]] += 1
                    else
                        this.timesPerWeek[y][this.workouts[i]["exercise"]] = 1
                }
                else {
                    this.timesPerWeek[y] = {};
                    this.timesPerWeek[y][this.workouts[i]["exercise"]] = 1
                }
            }

            if (n == this.thisWeek) {
                if (this.workouts[i]["exercise"] != -1)
                    this.timesPerThisWeek["exercise"][this.workouts[i]["exercise"]] += 1;
                this.timesPerThisWeek["bonus"] += this.workouts[i]["bonus"]
            }
        }

        for (let i = 0; i < this.exercises.length; i++) {
            console.log(". ", this.timesPerThisWeek["exercise"][i.toString()])
            this.sourcePie[i]["amount"] = this.timesPerThisWeek["exercise"][i.toString()]
        }
        let j = 0
        this.categoricalSource = []
        console.log(">>. ", this.sourcePie)
        for (var prop in this.timesPerWeek) {
            this.categoricalSource[j] = {}
            this.categoricalSource[j]["date"] = new Date(prop);
            if (this.minWeek > new Date(prop))
                this.minWeek = new Date(prop)
            if (this.maxWeek < new Date(prop))
                this.maxWeek = new Date(prop)
            for (let i = 0; i < this.exercises.length; i++) {
                this.categoricalSource[j][i + 1] = this.timesPerWeek[prop][i];
                if (this.timesPerWeek[prop][i] >= this.mostTimesPerWeek["exercise"][i]["count"]) {
                    this.mostTimesPerWeek["exercise"][i]["count"] = this.timesPerWeek[prop][i]
                    this.mostTimesPerWeek["exercise"][i]["date"] = prop
                }
            }
            j++;
        }
        console.log(">>. ", this.categoricalSource)
        this.categoricalSource.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
        console.log(">>. ", this.categoricalSource)



        this._linearAxisZoom = new LinearAxis();
        this._linearAxisZoom.horizontalLocation = "Left";
        this._linearAxisZoom.allowZoom = true;

        this._linearAxisZoomPan = new LinearAxis();
        this._linearAxisZoomPan.horizontalLocation = "Right";
        this._linearAxisZoomPan.allowZoom = true;
        this._linearAxisZoomPan.allowPan = true;
    }

    onTap(args) {
        if (this.selectedExercise == +args)
            this.selectedExercise = -1
        else
            this.selectedExercise = +args
    }

    getWeekNumber(d) {
        let now = d;
        let onejan = new Date(now.getFullYear(), 0, 1);
        return Math.ceil((((now.valueOf() - onejan.valueOf()) / 86400000) + onejan.getDay()) / 7);
    }

    selectStatistic(n) {
        this.selectTab = n;
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