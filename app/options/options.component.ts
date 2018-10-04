<<<<<<< HEAD
import { Component,OnInit} from "@angular/core";
import { StorageService } from "~/services/storage-service";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "optionsComponent",
    templateUrl: "options.component.html",
    // styleUrls: ['./options.component.css']
})

export class OptionsComponent implements  OnInit {

    constructor(private storage : StorageService) { }

=======
import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage-service";
import * as dialogs from "ui/dialogs";
import * as email from 'nativescript-email'
@Component({
    selector: "optionsComponent",
    templateUrl: "options.component.html",
    moduleId: module.id,
    styleUrls: ['./options.component.css']
})

export class OptionsComponent implements OnInit {

    composeOptions: email.ComposeOptions
    constructor(private storage: StorageService) {
        this.composeOptions = {
            subject: "Backup Strainerr",
            body: "asdasd",
            to: ["stamendragoew@gmail.com"],
            cc: ["stamendragoew@gmail.com"]
        }
    }
>>>>>>> features

    ngOnInit() {

    }

<<<<<<< HEAD
    clear(){
=======
    clear() {
>>>>>>> features
        dialogs.confirm({
            title: "Внимание",
            message: "При потвърждаване ще бъдат изтрите всички записи за тренировките.",
            okButtonText: "Да, искам да бъдат изтрити",
            cancelButtonText: "Откажи",
        }).then(result => {
<<<<<<< HEAD
            if(result){
=======
            if (result) {
>>>>>>> features
                this.storage.deleteAllWorkouts();
                dialogs.alert({
                    message: "Успешно изтрихте данните",
                    okButtonText: "ОК"
                }).then(() => {
                    console.log("Dialog closed!");
                });
            }
        });
    }
<<<<<<< HEAD
=======
    send() {
        console.log(3)
        email.available().then((available) => {
            console.log(4)
            console.log(available)

            if (available) {
                email.compose(this.composeOptions).then((result) => {
                    if (result) {
                        console.log("1. ",result);
                    }
                    else {
                        console.log("2. ",result);
                    }
                })
            }
        }).catch((err) => {
            console.log(err);
            dialogs.alert({
                message: err,
                okButtonText: "ОК"
            })
        })
    }
>>>>>>> features
}
