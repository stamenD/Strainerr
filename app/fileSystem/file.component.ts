import { Component,OnInit} from "@angular/core";
import * as fs from "tns-core-modules/file-system";
const fileSystemModule = require("tns-core-modules/file-system");
@Component({
    selector: "fileComponent",
    moduleId: module.id,
    templateUrl: "file.component.html",
    // styleUrls: ['./file.component.css']
})

export class FileComponent implements  OnInit {

    constructor() { }


    ngOnInit() {
        // const documents = fileSystemModule.knownFolders.documents();
        // const folder = documents.getFolder(vm.get("folderName") || "testFolder");
        // const file = folder.getFile(`${(vm.get("fileName") || "testFile")}`.txt);
        
        // file.writeText(vm.get("fileTextContent") || "some random content")
        //     .then((result) => {
        //         file.readText()
        //             .then((res) => {
        //                 vm.set("successMessage", `Successfully saved in${file.path}`);
        //                 vm.set("writtenContent", res);
        //                 vm.set("isItemVisible", true);
        //             });
        //     }).catch((err) => {
        //         console.log(err);
        //     });

        var documents = fs.knownFolders.documents();
        var path = fs.path.join(documents.path, "pages.txt");
        var file = fs.File.fromPath(path);
        file.writeText("123123").then((result)=>{
            file.readText().then((r)=>{
            console.log(r)

            })
            console.log(1111)
        
        }).catch((err)=>{console.log(err)})
    
        // return new Promise<Object>((resolve, reject) => {
        //     file.readText().then((content: string) => {
        //         let data = <Array<Object>>JSON.parse(content);
        //         resolve(data);
        //     })
        //         .catch((err) => {
        //             reject(err);
        //         });
        // });
    }

    
}
