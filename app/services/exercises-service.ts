import { Injectable } from '@angular/core';

@Injectable()
export class ExercisesService {

    getExercises() {
        return ["Дом", "Лост", "Бягане", "Фитнес"]
    }
    getBonusses() {
        return  ["", "+1 протеин", "+2 протеин"]
    }

}