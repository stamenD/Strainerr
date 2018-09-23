import { Component,OnInit} from "@angular/core";
import { StorageService } from "~/services/storage-service";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "optionsComponent",
    templateUrl: "options.component.html",
    moduleId: module.id
    // styleUrls: ['./options.component.css']
})

export class OptionsComponent implements  OnInit {

    constructor(private storage : StorageService) { }


    ngOnInit() {

    }

    clear(){
        dialogs.confirm({
            title: "Внимание",
            message: "При потвърждаване ще бъдат изтрите всички записи за тренировките.",
            okButtonText: "Да, искам да бъдат изтрити",
            cancelButtonText: "Откажи",
        }).then(result => {
            if(result){
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
}
