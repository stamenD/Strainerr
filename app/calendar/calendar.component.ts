import { Component, OnInit } from "@angular/core";
import * as calendarModule from "nativescript-ui-calendar";
import { CalendarTransitionMode } from "nativescript-ui-calendar";
<<<<<<< HEAD
import { Color } from "color";
import { CalendarStylesService } from '../services/calendar-service'
import { ExercisesService } from "~/services/exercises-service";
// import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { InlineEventCellStyle, CalendarEvent, CalendarEventsViewMode, RadCalendar, CalendarMonthViewStyle } from "nativescript-ui-calendar"
import { StorageService } from "~/services/storage-service";
import { clear } from "tns-core-modules/application-settings/application-settings";
=======
import { CalendarStylesService } from '../services/calendar-service'
import { ExercisesService } from "../services/exercises-service";
// import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { InlineEventCellStyle, CalendarEvent, CalendarEventsViewMode, RadCalendar, CalendarMonthViewStyle } from "nativescript-ui-calendar"
import { StorageService } from "../services/storage-service";
import * as dialogs from "ui/dialogs";
>>>>>>> features


@Component({
    selector: "Calendar",
    moduleId: module.id,
    templateUrl: "./calendar.component.html",
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    public calendarEvents = [];
    public calendarEventsHash = [];
    public monthViewStyle;
    public yearViewStyle;
    public dayViewStyle;
    public inlineEvent;
    public exercises;
    public selectedIndex = 1;
    public bonusses;
    public indexVersion = 0;
    public _mode = CalendarTransitionMode.Combo
<<<<<<< HEAD
    public selectedDate
    public selectedExercise

=======
    public selectedDate = 0
    public selectedExercise = -1
>>>>>>> features
    constructor(
        private _calendarService: CalendarStylesService,
        private _exercisesService: ExercisesService,
        private _storageService: StorageService) {
        this.selectedExercise = -1
<<<<<<< HEAD
        this.selectedDate = new Date();
=======
>>>>>>> features
    }

    ngOnInit(): void {
        this.monthViewStyle = this._calendarService.getMonthViewStyle();
        this.yearViewStyle = this._calendarService.getYearViewStyle();
        // this.monthNamesViewStyle = this._calendarService.getMonthNamesViewStyle();
        // this.weekViewStyle = this._calendarService.getWeekViewStyle();
        this.dayViewStyle = this._calendarService.getDayViewStyle();
        this.inlineEvent = this._calendarService.getInline();

        this.exercises = this._exercisesService.getExercises();
        this.bonusses = this._exercisesService.getBonusses();
        this.loadEvents()

    }

    calendarLoaded(args) {
        var calendar = <RadCalendar>args.object;
        console.log("Calendar");
        console.log(calendar.monthViewStyle);
        calendar.monthViewStyle = new CalendarMonthViewStyle();
        (<any>calendar.monthViewStyle).inlineEventCellStyle = this.inlineEvent;
    }

    onDateSelected(args) {
        console.log("onDateSelected: " + args.date);
        this.selectedDate = args.date;
    }
<<<<<<< HEAD

=======
    onEvent(args) {
        let exIndex
        let bonusIndex = 0
        let ex
        let bonus
        console.log(">>: " + args.eventData.title)
        if (args.eventData.title.split(" ").length == 3) {
            ex = args.eventData.title.split(" ")[0]
            bonus = args.eventData.title.split(" ")[1] + " " + args.eventData.title.split(" ")[2]
        }
        else{
            ex = null
            bonus = args.eventData.title.split(" ")[0] + " " + args.eventData.title.split(" ")[1]
        }
        for (let i = 0; i < this.exercises.length; i++)
            if (ex == this.exercises[i])
                exIndex = i
        for (let i = 0; i < this.bonusses.length; i++) {
            if (bonus == this.bonusses[i])
                bonusIndex = i
        }

        console.log("indexes: " + exIndex + " " + bonusIndex)

        dialogs.confirm({
            title: "Внимание",
            message: "Сигурни ли сте, че искате да изтриете тренировката.",
            okButtonText: "Да, искам да бъдат изтрита",
            cancelButtonText: "Откажи",
        }).then(result => {
            if (result) {
                this._storageService.deleteWorkout(exIndex, bonusIndex, args.eventData.startDate);
                this.loadEvents()
                dialogs.alert({
                    message: "Успешно изтрихте тренировката",
                    okButtonText: "ОК"
                }).then(() => {
                    console.log("Dialog closed!");
                });
            }
        });
    }
>>>>>>> features
    onDateDeselected(args) {
        console.log("onDateDeselected: " + args.date);
    }

    onNavigatedToDate(args) {
<<<<<<< HEAD
        console.log("onNavigatedToDate: " + args.date);
    }

    onNavigatingToDateStarted(args) {
        console.log("onNavigatingToDateStarted: " + args.date);
    }

    onViewModeChanged(args) {
        console.log("onViewModeChanged: " + args.newValue);
=======
        // console.log("onNavigatedToDate: " + args.date);
    }

    onNavigatingToDateStarted(args) {
        // console.log("onNavigatingToDateStarted: " + args.date);
    }

    onViewModeChanged(args) {
        // console.log("onViewModeChanged: " + args.newValue);
>>>>>>> features
    }
    onTap(args) {
        if (this.selectedExercise == +args)
            this.selectedExercise = -1
        else
            this.selectedExercise = +args
    }
    setBonus() {
        this.indexVersion += 1;
<<<<<<< HEAD
        this.indexVersion == 3 ? this.indexVersion = 0 : "";
=======
        this.indexVersion == this.bonusses.length ? this.indexVersion = 0 : "";
>>>>>>> features
    }
    setExercise() {
        this._storageService.setWorkout(this.selectedExercise, this.indexVersion, this.selectedDate)
        this.loadEvents()
    }
<<<<<<< HEAD
    loadEvents(){
        let events = this._storageService.getAllWorkouts();
        console.log("---------------------------------")
        console.log(events)

        this.calendarEvents = [];
        for (let i = 0; i < events.length; i++) {

            let title = this.exercises[events[i]["exercise"]] + " " + this.bonusses[events[i]["bonus"]];
=======
    loadEvents() {
        let events = this._storageService.getAllWorkouts();
        // console.log("---------------------------------")
        // console.log(events)

        this.calendarEvents = [];
        for (let i = 0; i < events.length; i++) {
            let title
            if (events[i]["exercise"] == -1)
                title = this.bonusses[events[i]["bonus"]];
            else
                title = this.exercises[events[i]["exercise"]] + " " + this.bonusses[events[i]["bonus"]];
>>>>>>> features
            let date = new Date(events[i]["date"]);
            let event = new calendarModule.CalendarEvent(title, date, date, true);

            this.calendarEvents.push(event);
        }
    }
}
