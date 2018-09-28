import { Injectable } from '@angular/core';
import * as calendarModule from "nativescript-ui-calendar"

import { getBoolean, setBoolean, getNumber, setNumber, getString, setString, hasKey, remove, clear } from "application-settings";
@Injectable()
export class StorageService {

    setWorkout(title,bonus,date) {
        let exsNumber = getNumber("numberExs", 0)
      
        let json = { "exercise": title, "bonus": bonus, "date": date };
        setString(exsNumber.toString(), JSON.stringify(json)); 
        
        setNumber("numberExs", exsNumber + 1)
    }

    getAllWorkouts(): string[]{
        let calendarEvents = [];
        let exsNumber = getNumber("numberExs", 0)
        for (let i = 0; i < exsNumber ; i++) {
            let eventInfo = JSON.parse(getString(i.toString()));
            calendarEvents.push(eventInfo);
        }
        return calendarEvents;
    }
    getAllWorkoutsString(): string{
        let calendarEvents = "";
        let exsNumber = getNumber("numberExs", 0)
        for (let i = 0; i < exsNumber ; i++) {
            calendarEvents +=" "
            calendarEvents += getString(i.toString());
        }
        return calendarEvents;
    }
    deleteAllWorkouts(){
        clear();
    }

}