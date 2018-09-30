import { Injectable } from '@angular/core';
import * as calendarModule from "nativescript-ui-calendar"

import { getBoolean, setBoolean, getNumber, setNumber, getString, setString, hasKey, remove, clear } from "application-settings";
@Injectable()
export class StorageService {
    '{"exercise":0,"bonus":2,"date":"2018-09-26T00:00:00.000Z"} {"exercise":0,"bonus":2,"date":"2018-09-26T00:00:00.000Z"} {"exercise":1,"bonus":0,"date":"2018-10-01T00:00:00.000Z"} {"exercise":-1,"bonus":1,"date":"2018-09-30T00:00:00.000Z"} {"exercise":1,"bonus":0,"date":"2018-10-07T00:00:00.000Z"} {"exercise":1,"bonus":0,"date":"2018-10-07T00:00:00.000Z"}'

    setWorkout(title, bonus, date) {
        let exsNumber = getNumber("numberExs", 0)

        let json = { "exercise": title, "bonus": bonus, "date": date };
        console.log(json)
        setString(exsNumber.toString(), JSON.stringify(json));

        setNumber("numberExs", exsNumber + 1)
    }
    setWorkoutJSON(json) {
        let exsNumber = getNumber("numberExs", 0)
        console.log(json)

        setString(exsNumber.toString(), JSON.stringify(json));
        setNumber("numberExs", exsNumber + 1)
    }

    getAllWorkouts(): string[] {
        let calendarEvents = [];
        let exsNumber = getNumber("numberExs", 0)
        for (let i = 0; i < exsNumber; i++) {
            let eventInfo = JSON.parse(getString(i.toString()));
            calendarEvents.push(eventInfo);
        }
        return calendarEvents;
    }
    getAllWorkoutsString(): string {
        let calendarEvents = "";
        let exsNumber = getNumber("numberExs", 0)
        for (let i = 0; i < exsNumber; i++) {
            calendarEvents += " "
            calendarEvents += getString(i.toString());
        }
        return calendarEvents;
    }
    deleteAllWorkouts() {
        clear();
    }
    deleteWorkout(ex, bonus, date) {
        let exsNumber = getNumber("numberExs", 0)
        for (let i = 0; i < exsNumber; i++) {
            let eventInfo = JSON.parse(getString(i.toString()));
            console.log("-----------------------------------")
            console.log(eventInfo["exercise"], " ", ex)
            console.log(eventInfo["bonus"], " ", bonus)
            console.log(new Date(eventInfo["date"]))
            console.log(new Date(date))
            if (eventInfo["exercise"] == ex && eventInfo["bonus"] == bonus && new Date(eventInfo["date"]).getTime() == new Date(date).getTime()) {
                remove(i.toString())
                console.log(exsNumber - 1)
                console.log(getString((exsNumber - 1).toString()))
                if (i != exsNumber - 1) setString(i.toString(), getString((exsNumber - 1).toString()));
                setNumber("numberExs", exsNumber - 1)
                break;
            }

        }
    }
}