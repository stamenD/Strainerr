import { Component, OnInit } from "@angular/core";
import * as calendarModule from "nativescript-ui-calendar";
import { CalendarTransitionMode } from "nativescript-ui-calendar";
import { Color } from "color";
import { CalendarStylesService } from '../services/calendar-service'
import { ExercisesService } from "../services/exercises-service";
// import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { InlineEventCellStyle, CalendarEvent, CalendarEventsViewMode, RadCalendar, CalendarMonthViewStyle } from "nativescript-ui-calendar"
import { StorageService } from "../services/storage-service";
import { clear } from "tns-core-modules/application-settings/application-settings";


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
    public selectedDate
    public selectedExercise = -1

    constructor(
        private _calendarService: CalendarStylesService,
        private _exercisesService: ExercisesService,
        private _storageService: StorageService) {
        this.selectedExercise = -1
        this.selectedDate = new Date();
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
        // console.log("onDateSelected: " + args.date);
        this.selectedDate = args.date;
    }

    onDateDeselected(args) {
        // console.log("onDateDeselected: " + args.date);
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
        this.indexVersion == 3 ? this.indexVersion = 0 : "";
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
