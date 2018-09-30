import { Component, OnInit } from "@angular/core";
import * as calendarModule from "nativescript-ui-calendar";
import { CalendarTransitionMode } from "nativescript-ui-calendar";
import { CalendarStylesService } from '../services/calendar-service'
import { ExercisesService } from "../services/exercises-service";
// import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { InlineEventCellStyle, CalendarEvent, CalendarEventsViewMode, RadCalendar, CalendarMonthViewStyle } from "nativescript-ui-calendar"
import { StorageService } from "../services/storage-service";
import * as dialogs from "ui/dialogs";


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
    public selectedDate = 0
    public selectedExercise = -1
    constructor(
        private _calendarService: CalendarStylesService,
        private _exercisesService: ExercisesService,
        private _storageService: StorageService) {
        this.selectedExercise = -1
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
    onEvent(args) {
        let exIndex
        let bonusIndex = 0
        let ex = args.eventData.title.split(" ")[0]
        let bonus = args.eventData.title.split(" ")[1] + " " + args.eventData.title.split(" ")[2]
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
    onDateDeselected(args) {
        console.log("onDateDeselected: " + args.date);
    }

    onNavigatedToDate(args) {
        // console.log("onNavigatedToDate: " + args.date);
    }

    onNavigatingToDateStarted(args) {
        // console.log("onNavigatingToDateStarted: " + args.date);
    }

    onViewModeChanged(args) {
        // console.log("onViewModeChanged: " + args.newValue);
    }
    onTap(args) {
        if (this.selectedExercise == +args)
            this.selectedExercise = -1
        else
            this.selectedExercise = +args
    }
    setBonus() {
        this.indexVersion += 1;
        this.indexVersion == this.bonusses.length ? this.indexVersion = 0 : "";
    }
    setExercise() {
        this._storageService.setWorkout(this.selectedExercise, this.indexVersion, this.selectedDate)
        this.loadEvents()
    }
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
            let date = new Date(events[i]["date"]);
            let event = new calendarModule.CalendarEvent(title, date, date, true);

            this.calendarEvents.push(event);
        }
    }
}
