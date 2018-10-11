import { Component, OnInit } from '@angular/core';
import { LinearAxis } from "nativescript-ui-chart";
import { StorageService } from '../services/storage-service';
import { ExercisesService } from '~/services/exercises-service';
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
@Component({
    selector: "statistic",
    moduleId: module.id,
    templateUrl: "./statistic.component.html",
    styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
    public allWorkouts = [];

    public timesPerMonth = {}; //
    public timesPerThisMonth = {};//
    public mostTimesPerMonth = {};
    public sourcePieThisMonth = [];//
    public categoricalSourceMonth = [];

    public timesPerWeek = {};
    public timesPerThisWeek = {};
    public mostTimesPerWeek = {};
    public sourcePieThisWeek = [];
    public categoricalSourceWeek = [];

    public timesPerCurrentState = {};
    public timesPerThisCurrentState = {};
    public mostTimesPerCurrentState = {};
    public sourcePieThisCurrentState = [];
    public categoricalSourceCurrentState = [];


    public minWeek = new Date();
    public maxWeek = new Date();

    public exercises
    public workouts
    public thisWeek
    public thisYear
    public thisMonth

    public currentState = "Week"

    private _linearAxisZoomPan: LinearAxis;
    private _linearAxisZoom: LinearAxis;
    public selectedExercise = -1
    public tabSelectedIndex: number;
    public tabSelectedIndexInner: number;

    constructor(private storageService: StorageService, private exercisesService: ExercisesService) {
        this.tabSelectedIndex = 0;
        this.tabSelectedIndexInner = 0;
    }

    onSelectedIndexChangedInner(args: SelectedIndexChangedEventData) {
        const newIndex = args.newIndex;
        this.selectedExercise = newIndex
    }

    changeMeasure() {
        if (this.currentState == "Week") {
            this.currentState = "Month"
            this.timesPerCurrentState = this.timesPerMonth;
            this.timesPerThisCurrentState = this.timesPerThisMonth;
            this.mostTimesPerCurrentState = this.mostTimesPerMonth;
            this.sourcePieThisCurrentState = this.sourcePieThisMonth;
            this.categoricalSourceCurrentState = this.categoricalSourceMonth;

        }
        else {
            this.currentState = "Week"
            this.timesPerCurrentState = this.timesPerWeek;
            this.timesPerThisCurrentState = this.timesPerThisWeek;
            this.mostTimesPerCurrentState = this.mostTimesPerWeek;
            this.sourcePieThisCurrentState = this.sourcePieThisWeek;
            this.categoricalSourceCurrentState = this.categoricalSourceWeek;
        }
    }

    init() {

        this.exercises = this.exercisesService.getExercises();
        this.workouts = this.storageService.getAllWorkouts();

        this.thisWeek = this.getWeekNumber(new Date(), true)
        this.thisMonth = new Date().getMonth()
        this.thisYear = new Date().getFullYear();



        this.timesPerThisWeek["exercise"] = {}
        this.mostTimesPerWeek["exercise"] = {}

        this.mostTimesPerMonth["exercise"] = {}
        this.timesPerThisMonth["exercise"] = {}

        for (let i = 0; i < this.exercises.length; i++) {
            this.allWorkouts[i] = {}
            this.allWorkouts[i]["name"] = this.exercises[i]
            this.allWorkouts[i]["amount"] = 0


            this.sourcePieThisWeek[i] = {}
            this.sourcePieThisWeek[i]["name"] = this.exercises[i]
            this.sourcePieThisWeek[i]["amount"] = 0

            this.sourcePieThisMonth[i] = {}
            this.sourcePieThisMonth[i]["name"] = this.exercises[i]
            this.sourcePieThisMonth[i]["amount"] = 0


            this.timesPerThisWeek["exercise"][i] = 0;
            this.mostTimesPerWeek["exercise"][i] = {};
            this.mostTimesPerWeek["exercise"][i]["count"] = 0;
            this.mostTimesPerWeek["exercise"][i]["date"] = undefined;

            this.timesPerThisMonth["exercise"][i] = 0;
            this.mostTimesPerMonth["exercise"][i] = {};
            this.mostTimesPerMonth["exercise"][i]["count"] = 0;
            this.mostTimesPerMonth["exercise"][i]["date"] = undefined;

        }

        this.timesPerThisWeek["bonus"] = 0
        this.mostTimesPerWeek["bonus"] = 0

        this.timesPerThisMonth["bonus"] = 0
        this.mostTimesPerMonth["bonus"] = 0
    }

    ngOnInit() {
        this.init()

        for (let i = 0; i < this.workouts.length; i++) {
            let yearWorkout = new Date(this.workouts[i]["date"]).getFullYear();

            //times per week
            let n = this.getWeekNumber(new Date(this.workouts[i]["date"]), false)
            let d = (1 + (n - 1) * 7); // 1st of January + 7 days for each week
            let week = new Date(new Date(this.workouts[i]["date"]).getFullYear(), 0, d).toDateString();

            if (this.workouts[i]["exercise"] != -1) {
                this.allWorkouts[this.workouts[i]["exercise"]]["amount"]++;
                if (this.timesPerWeek[week]) {
                    if (this.timesPerWeek[week][this.workouts[i]["exercise"]])
                        this.timesPerWeek[week][this.workouts[i]["exercise"]] += 1
                    else
                        this.timesPerWeek[week][this.workouts[i]["exercise"]] = 1
                }
                else {
                    this.timesPerWeek[week] = {};
                    this.timesPerWeek[week][this.workouts[i]["exercise"]] = 1
                }
            }
            if (n == this.thisWeek && yearWorkout == this.thisYear) {
                if (this.workouts[i]["exercise"] != -1)
                    this.timesPerThisWeek["exercise"][this.workouts[i]["exercise"]] += 1;
                this.timesPerThisWeek["bonus"] += this.workouts[i]["bonus"]
            }

            //times per Month
            let month = new Date(new Date(this.workouts[i]["date"]).getFullYear(), new Date(this.workouts[i]["date"]).getMonth()).toDateString();
            if (this.workouts[i]["exercise"] != -1) {
                if (this.timesPerMonth[month]) {
                    if (this.timesPerMonth[month][this.workouts[i]["exercise"]])
                        this.timesPerMonth[month][this.workouts[i]["exercise"]] += 1
                    else
                        this.timesPerMonth[month][this.workouts[i]["exercise"]] = 1
                }
                else {
                    this.timesPerMonth[month] = {};
                    this.timesPerMonth[month][this.workouts[i]["exercise"]] = 1
                }
            }

            if (new Date(this.workouts[i]["date"]).getMonth() == this.thisMonth && yearWorkout == this.thisYear) {
                if (this.workouts[i]["exercise"] != -1)
                    this.timesPerThisMonth["exercise"][this.workouts[i]["exercise"]] += 1;
                this.timesPerThisMonth["bonus"] += this.workouts[i]["bonus"]
            }

        }
        console.log("this.timesPerMonth: ", this.timesPerMonth)

        for (let i = 0; i < this.exercises.length; i++) {
            // console.log(". ", this.timesPerThisWeek["exercise"][i.toString()])
            this.sourcePieThisWeek[i]["amount"] = this.timesPerThisWeek["exercise"][i.toString()]
        }
        for (let i = 0; i < this.exercises.length; i++) {
            // console.log(". ", this.timesPerThisWeek["exercise"][i.toString()])
            this.sourcePieThisMonth[i]["amount"] = this.timesPerThisMonth["exercise"][i.toString()]
        }


        let j = 0
        this.categoricalSourceWeek = []
        // console.log(">>. ", this.timesPerWeek)
        for (var prop in this.timesPerWeek) {
            this.categoricalSourceWeek[j] = {}
            this.categoricalSourceWeek[j]["date"] = new Date(prop);
            if (this.minWeek > new Date(prop))
                this.minWeek = new Date(prop)
            if (this.maxWeek < new Date(prop))
                this.maxWeek = new Date(prop)
            for (let i = 0; i < this.exercises.length; i++) {
                this.categoricalSourceWeek[j][i + 1] = this.timesPerWeek[prop][i];
                if (this.timesPerWeek[prop][i] >= this.mostTimesPerWeek["exercise"][i]["count"]) {
                    this.mostTimesPerWeek["exercise"][i]["count"] = this.timesPerWeek[prop][i]
                    this.mostTimesPerWeek["exercise"][i]["date"] = prop
                }
            }
            j++;
        }
        // console.log(">>. ", this.categoricalSourceWeek)

        this.categoricalSourceWeek.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));

        j = 0
        this.categoricalSourceMonth = []
        console.log(">>. ", this.timesPerMonth)
        for (var prop in this.timesPerMonth) {
            this.categoricalSourceMonth[j] = {}
            this.categoricalSourceMonth[j]["date"] = new Date(prop);
            if (this.minWeek > new Date(prop))
                this.minWeek = new Date(prop)
            if (this.maxWeek < new Date(prop))
                this.maxWeek = new Date(prop)
            for (let i = 0; i < this.exercises.length; i++) {
                this.categoricalSourceMonth[j][i + 1] = this.timesPerMonth[prop][i];
                if (this.timesPerMonth[prop][i] >= this.mostTimesPerMonth["exercise"][i]["count"]) {
                    this.mostTimesPerMonth["exercise"][i]["count"] = this.timesPerMonth[prop][i]
                    this.mostTimesPerMonth["exercise"][i]["date"] = prop
                }
            }
            j++;
        }
        console.log(">>. ", this.categoricalSourceMonth)

        this.categoricalSourceMonth.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));


        this._linearAxisZoom = new LinearAxis();
        this._linearAxisZoom.horizontalLocation = "Left";
        this._linearAxisZoom.allowZoom = true;

        this._linearAxisZoomPan = new LinearAxis();
        this._linearAxisZoomPan.horizontalLocation = "Right";
        this._linearAxisZoomPan.allowZoom = true;
        this._linearAxisZoomPan.allowPan = true;

        this.timesPerCurrentState = this.timesPerWeek;
        this.timesPerThisCurrentState = this.timesPerThisWeek;
        this.mostTimesPerCurrentState = this.mostTimesPerWeek;
        this.sourcePieThisCurrentState = this.sourcePieThisWeek;
        this.categoricalSourceCurrentState = this.categoricalSourceWeek;

    }

    onTap(args) {
        if (this.selectedExercise == +args)
            this.selectedExercise = -1
        else
            this.selectedExercise = +args
    }

    getWeekNumber(d, special) {
        let now = d;
        let onejan = new Date(now.getFullYear(), 0, 1);
        if (special)
            return Math.ceil((((now.valueOf() - onejan.valueOf()) / 86400000) + onejan.getDay() - 1) / 7);
        return Math.ceil((((now.valueOf() - onejan.valueOf()) / 86400000) + onejan.getDay()) / 7);
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