import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
// import { DropDownModule } from "nativescript-drop-down/angular";
import {  NativeScriptUIChartModule} from "nativescript-ui-chart/angular";

import { CalendarStylesService } from "./services/calendar-service";
import { ExercisesService } from "./services/exercises-service";
import { StorageService } from "./services/storage-service";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ActionBarComponent } from "~/actionBar/actionBar.component";
import { CalendarComponent } from "~/calendar/calendar.component";
import { StatisticComponent } from "~/statistic/statistic.component";
import { FileComponent } from "~/fileSystem/file.component";
import { OptionsComponent } from "~/options/options.component";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptUIChartModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUICalendarModule,
        // DropDownModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        ActionBarComponent,
        CalendarComponent,
        StatisticComponent,
        FileComponent,
        OptionsComponent
    ],
    providers: [
        CalendarStylesService,
        ExercisesService,
        StorageService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
