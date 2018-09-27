import { Component, OnInit } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
import { StorageService } from "~/services/storage-service";
const fileSystemModule = require("tns-core-modules/file-system");
@Component({
    selector: "fileComponent",
    moduleId: module.id,
    templateUrl: "file.component.html",
    // styleUrls: ['./file.component.css']
})

export class FileComponent implements OnInit {

    constructor(private storage: StorageService) { }

    public allInfo;
    ngOnInit() {
        this.allInfo = this.storage.getAllWorkouts();
        // var documents = fs.knownFolders.documents();
        // console.log(">> ", documents)
        // var path = fs.path.join(documents.path, "pages.txt");
        // var file = fs.File.fromPath(path);
        // file.writeText("123123").then((result) => {
        //     file.readText().then((r) => {
        //         console.log(r)

        //     })
        //     console.log(1111)

        // }).catch((err) => { console.log(err) })

    }


}
