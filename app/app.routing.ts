import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

<<<<<<< HEAD
import { CalendarComponent } from "~/calendar/calendar.component";
import { StatisticComponent } from "~/statistic/statistic.component";
import { FileComponent } from "~/fileSystem/file.component";
import { OptionsComponent } from "~/options/options.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "items", component: StatisticComponent },
    { path: "home", component: CalendarComponent },
    { path: "file", component: OptionsComponent },
    { path: "options", component: OptionsComponent },
=======
import { CalendarComponent } from "./calendar/calendar.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { FileComponent } from "./fileSystem/file.component";
import { OptionsComponent } from "./options/options.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: StatisticComponent },
    { path: "home", component: CalendarComponent },
    { path: "file", component: FileComponent },
    // { path: "options", component: OptionsComponent },
>>>>>>> features
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }