
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'nativescript-ui-calendar' 
import { Color } from "color";
import { CalendarMonthViewStyle, 
    DayCellStyle, 
    CellStyle,
     CalendarWeekViewStyle, 
     CalendarYearViewStyle, 
     MonthCellStyle, 
     CalendarMonthNamesViewStyle, 
     CalendarDayViewStyle, 
     DayEventsViewStyle, 
     AllDayEventsViewStyle,
     InlineEventCellStyle } from "nativescript-ui-calendar";

@Injectable()
export class CalendarStylesService{
    getMonthViewStyle(): CalendarMonthViewStyle {
        var monthViewStyle = new CalendarMonthViewStyle();
        // monthViewStyle.backgroundColor = "Gray";
        // monthViewStyle.showTitle = true;
        monthViewStyle.showWeekNumbers = true
        // monthViewStyle.showDayNames = true;
        // monthViewStyle.selectionShape = "Round";
        // monthViewStyle.selectionShapeSize = 15;
        // monthViewStyle.selectionShapeColor = "Red";
       
        var todayCellStyle = new DayCellStyle();
        // todayCellStyle.cellBackgroundColor = "#babecf";
        // todayCellStyle.cellBorderWidth = 2;
        // todayCellStyle.cellBorderColor = "#007c29";
        // todayCellStyle.cellTextColor = "#5b391e";
        // todayCellStyle.cellTextFontName = "Times New Roman";
        todayCellStyle.cellTextFontStyle = "Bold";
        todayCellStyle.cellTextSize = 20;
        monthViewStyle.todayCellStyle = todayCellStyle;
        
        var dayCellStyle = new DayCellStyle();
        // dayCellStyle.showEventsText = false;
        // dayCellStyle.eventTextColor = "White";
        // dayCellStyle.eventFontName = "Times New Roman";
        // dayCellStyle.eventFontStyle = "BoldItalic";
        // dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = "VerticalCenter";
        // dayCellStyle.cellPaddingHorizontal = 10;
        // dayCellStyle.cellPaddingVertical = 5;
        dayCellStyle.cellBackgroundColor = "#babecf";
        dayCellStyle.cellBorderWidth = 1.5;
        dayCellStyle.cellBorderColor = "#9c45ff";
        // dayCellStyle.cellTextColor = "#745151";
        // dayCellStyle.cellTextFontName = "Times New Roman";
        dayCellStyle.cellTextFontStyle = "Bold";
        dayCellStyle.cellTextSize = 14;
        monthViewStyle.dayCellStyle = dayCellStyle;
        
        var weekendCellStyle = new DayCellStyle();
        // weekendCellStyle.eventTextColor = "BlueViolet";
        // weekendCellStyle.eventFontName = "Times New Roman";
        // weekendCellStyle.eventFontStyle = "BoldItalic";
        // weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellAlignment = "VerticalCenter";
        weekendCellStyle.cellPaddingHorizontal = 10;
        weekendCellStyle.cellPaddingVertical = 5;
        weekendCellStyle.cellBackgroundColor = "#ffffff";
        weekendCellStyle.cellBorderWidth = 1.5;
        weekendCellStyle.cellBorderColor = "#9c45ff";
        // weekendCellStyle.cellTextColor = "#745151";
        // weekendCellStyle.cellTextFontName = "Times New Roman";
        // weekendCellStyle.cellTextFontStyle = "Bold";
        weekendCellStyle.cellTextSize = 14;
        monthViewStyle.weekendCellStyle = weekendCellStyle;
        
        var selectedCellStyle = new DayCellStyle();
        // selectedCellStyle.eventTextColor = "Blue";
        // selectedCellStyle.eventFontName = "Times New Roman";
        // selectedCellStyle.eventFontStyle = "Bold";
        // selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellAlignment = "VerticalCenter";
        selectedCellStyle.cellPaddingHorizontal = 10;
        selectedCellStyle.cellPaddingVertical = 5;
        selectedCellStyle.cellBackgroundColor = "#5d96ff";
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = "#004cd8";
        // selectedCellStyle.cellTextColor = "Black";
        // selectedCellStyle.cellTextFontName = "Times New Roman";
        // selectedCellStyle.cellTextFontStyle = "Bold";
        selectedCellStyle.cellTextSize = 18;
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;
        
        // var weekNumberCellStyle = new CellStyle();
        // weekNumberCellStyle.cellBackgroundColor = "#bbcbdb";
        // weekNumberCellStyle.cellBorderWidth = 1;
        // weekNumberCellStyle.cellBorderColor = "#f1e8ca";
        // weekNumberCellStyle.cellTextColor = "#ffffff";
        // weekNumberCellStyle.cellTextFontName = "Times New Roman";
        // weekNumberCellStyle.cellTextFontStyle = "Bold";
        // weekNumberCellStyle.cellTextSize = 10;
        // monthViewStyle.weekNumberCellStyle = weekNumberCellStyle;
        
        var dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = "#9c45ff";
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = "#745151";
        dayNameCellStyle.cellTextColor = "#745151";
        dayNameCellStyle.cellTextFontName = "Times New Roman";
        dayNameCellStyle.cellTextFontStyle = "Bold";
        dayNameCellStyle.cellTextSize = 10;
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;
        
        var titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#5d96ff";
        titleCellStyle.cellBorderWidth = 2;
        titleCellStyle.cellBorderColor = "#745151";
        titleCellStyle.cellTextColor = "#ffffff";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        monthViewStyle.titleCellStyle = titleCellStyle;

        return monthViewStyle;
    }
    getYearViewStyle(): CalendarYearViewStyle {
        var yearViewStyle = new CalendarYearViewStyle();
        
        var titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#5d96ff";
        titleCellStyle.cellBorderWidth = 2;
        titleCellStyle.cellBorderColor = "#745151";
        titleCellStyle.cellTextColor = "#ffffff";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        yearViewStyle.titleCellStyle = titleCellStyle;
        
        var monthCellStyle = new MonthCellStyle();
        // monthCellStyle.weekendTextColor = "#ffc400";
        // monthCellStyle.todayTextColor = "Black";
        // monthCellStyle.dayTextColor = "#745151";
        // monthCellStyle.dayFontName = "Times New Roman";
        // monthCellStyle.dayFontStyle = "Bold";
        // monthCellStyle.dayTextSize = 12;
        // monthCellStyle.dayNameTextColor = "#9ebd9e";
        // monthCellStyle.dayNameFontName = "Times New Roman";
        // monthCellStyle.dayNameFontStyle = "Bold";
        // monthCellStyle.dayNameTextSize = 14;
        monthCellStyle.monthNameTextColor = "#9c45ff";
        monthCellStyle.monthNameFontName = "Times New Roman";
        monthCellStyle.monthNameFontStyle = "BoldItalic";
        monthCellStyle.monthNameTextSize = 10;
        yearViewStyle.monthCellStyle = monthCellStyle;
        
        return yearViewStyle;
    }
    getDayViewStyle(): CalendarDayViewStyle {
        var dayViewStyle = new CalendarDayViewStyle();
        // dayViewStyle.backgroundColor = "#ffc400";
        dayViewStyle.showWeekNumbers = false;
        // dayViewStyle.showDayNames = true;
        // dayViewStyle.showTitle = true;

        // var todayCellStyle = new DayCellStyle();
        // todayCellStyle.cellBackgroundColor = "#ffc400";
        // todayCellStyle.cellBorderWidth = 1;
        // todayCellStyle.cellBorderColor = "#f1e8ca";
        // todayCellStyle.cellTextColor = "#745151";
        // todayCellStyle.cellTextFontName = "Times New Roman";
        // todayCellStyle.cellTextFontStyle = "Bold";
        // todayCellStyle.cellTextSize = 14;
        // dayViewStyle.todayCellStyle = todayCellStyle;
        
        // var dayCellStyle = new DayCellStyle();
        // dayCellStyle.showEventsText = false;
        // dayCellStyle.eventTextColor = "White";
        // dayCellStyle.eventFontName = "Times New Roman";
        // dayCellStyle.eventFontStyle = "BoldItalic";
        // dayCellStyle.eventTextSize = 8;
        // dayCellStyle.cellAlignment = "VerticalCenter";
        // dayCellStyle.cellPaddingHorizontal = 10;
        // dayCellStyle.cellPaddingVertical = 5;
        // dayCellStyle.cellBackgroundColor = "#9ebd9e";
        // dayCellStyle.cellBorderWidth = 1;
        // dayCellStyle.cellBorderColor = "#f1e8ca";
        // dayCellStyle.cellTextColor = "#745151";
        // dayCellStyle.cellTextFontName = "Times New Roman";
        // dayCellStyle.cellTextFontStyle = "Bold";
        // dayCellStyle.cellTextSize = 10;
        // dayViewStyle.dayCellStyle = dayCellStyle;
        
        // var weekendCellStyle = new DayCellStyle();
        // weekendCellStyle.eventTextColor = "BlueViolet";
        // weekendCellStyle.eventFontName = "Times New Roman";
        // weekendCellStyle.eventFontStyle = "BoldItalic";
        // weekendCellStyle.eventTextSize = 8;
        // weekendCellStyle.cellAlignment = "VerticalCenter";
        // weekendCellStyle.cellPaddingHorizontal = 10;
        // weekendCellStyle.cellPaddingVertical = 5;
        // weekendCellStyle.cellBackgroundColor = "#f1e8ca";
        // weekendCellStyle.cellBorderWidth = 1;
        // weekendCellStyle.cellBorderColor = "#f1e8ca";
        // weekendCellStyle.cellTextColor = "#745151";
        // weekendCellStyle.cellTextFontName = "Times New Roman";
        // weekendCellStyle.cellTextFontStyle = "Bold";
        // weekendCellStyle.cellTextSize = 12;
        // dayViewStyle.weekendCellStyle = weekendCellStyle;
        
        // var selectedCellStyle = new DayCellStyle();
        // selectedCellStyle.eventTextColor = "Blue";
        // selectedCellStyle.eventFontName = "Times New Roman";
        // selectedCellStyle.eventFontStyle = "Bold";
        // selectedCellStyle.eventTextSize = 8;
        // selectedCellStyle.cellAlignment = "VerticalCenter";
        // selectedCellStyle.cellPaddingHorizontal = 10;
        // selectedCellStyle.cellPaddingVertical = 5;
        // selectedCellStyle.cellBackgroundColor = "#745151";
        // selectedCellStyle.cellBorderWidth = 2;
        // selectedCellStyle.cellBorderColor = "#f1e8ca";
        // selectedCellStyle.cellTextColor = "Black";
        // selectedCellStyle.cellTextFontName = "Times New Roman";
        // selectedCellStyle.cellTextFontStyle = "Bold";
        // selectedCellStyle.cellTextSize = 18;
        // dayViewStyle.selectedDayCellStyle = selectedCellStyle;
        
        // var weekNumberCellStyle = new CellStyle();
        // weekNumberCellStyle.cellBackgroundColor = "#bbcbdb";
        // weekNumberCellStyle.cellBorderWidth = 1;
        // weekNumberCellStyle.cellBorderColor = "#f1e8ca";
        // weekNumberCellStyle.cellTextColor = "#745151";
        // weekNumberCellStyle.cellTextFontName = "Times New Roman";
        // weekNumberCellStyle.cellTextFontStyle = "Bold";
        // weekNumberCellStyle.cellTextSize = 8;
        // dayViewStyle.weekNumberCellStyle = weekNumberCellStyle;
        
        // var dayNameCellStyle = new CellStyle();
        // dayNameCellStyle.cellBackgroundColor = "#f1e8ca";
        // dayNameCellStyle.cellBorderWidth = 1;
        // dayNameCellStyle.cellBorderColor = "#745151";
        // dayNameCellStyle.cellTextColor = "#745151";
        // dayNameCellStyle.cellTextFontName = "Times New Roman";
        // dayNameCellStyle.cellTextFontStyle = "Bold";
        // dayNameCellStyle.cellTextSize = 10;
        // dayViewStyle.dayNameCellStyle = dayNameCellStyle;
        
        // var titleCellStyle = new DayCellStyle();
        // titleCellStyle.cellBackgroundColor = "#ffc400";
        // titleCellStyle.cellBorderWidth = 1;
        // titleCellStyle.cellBorderColor = "#f1e8ca";
        // titleCellStyle.cellTextColor = "#745151";
        // titleCellStyle.cellTextFontName = "Times New Roman";
        // titleCellStyle.cellTextFontStyle = "Bold";
        // titleCellStyle.cellTextSize = 18;
        // dayViewStyle.titleCellStyle = titleCellStyle;
        
        // var dayEventsViewStyle = new DayEventsViewStyle();
        // dayEventsViewStyle.backgroundColor = "Blue";
        // dayEventsViewStyle.timeLabelFormat = "HH:mm";
        // dayEventsViewStyle.timeLabelTextColor = "#0023ff";
        // dayEventsViewStyle.timeLabelTextSize = 12;
        // dayViewStyle.dayEventsViewStyle = dayEventsViewStyle;

        // var allDayEventsViewStyle = new AllDayEventsViewStyle();
        // allDayEventsViewStyle.backgroundColor = "#00ffff";
        // allDayEventsViewStyle.allDayText = "DAILY";
        // allDayEventsViewStyle.allDayTextIsVisible = true;
        // dayViewStyle.allDayEventsViewStyle = allDayEventsViewStyle;
        
        return dayViewStyle;
    }


    getInline(){
        var inlineEvents = new InlineEventCellStyle();
        inlineEvents.cellBackgroundColor="#f39b90"; 
        inlineEvents.eventTextColor="DeepSkyBlue"; 
        inlineEvents.eventFontName="Avenir";
        inlineEvents.eventFontStyle="BoldItalic";
        inlineEvents.eventTextSize=14; 

       
        return inlineEvents;
    }

    
 



    getWeekViewStyle(): CalendarWeekViewStyle {
        var weekViewStyle = new CalendarWeekViewStyle();
        weekViewStyle.backgroundColor = "#ffc400";
        weekViewStyle.showTitle = true;
        weekViewStyle.showWeekNumbers = true
        weekViewStyle.showDayNames = true;
        
        var todayCellStyle = new DayCellStyle();
        todayCellStyle.cellBackgroundColor = "#ffc400";
        todayCellStyle.cellBorderWidth = 1;
        todayCellStyle.cellBorderColor = "#f1e8ca";
        todayCellStyle.cellTextColor = "#745151";
        todayCellStyle.cellTextFontName = "Times New Roman";
        todayCellStyle.cellTextFontStyle = "Bold";
        todayCellStyle.cellTextSize = 14;
        weekViewStyle.todayCellStyle = todayCellStyle;
        
        var dayCellStyle = new DayCellStyle();
        dayCellStyle.showEventsText = false;
        dayCellStyle.eventTextColor = "White";
        dayCellStyle.eventFontName = "Times New Roman";
        dayCellStyle.eventFontStyle = "BoldItalic";
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = "VerticalCenter";
        dayCellStyle.cellPaddingHorizontal = 10;
        dayCellStyle.cellPaddingVertical = 5;
        dayCellStyle.cellBackgroundColor = "#9ebd9e";
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = "#f1e8ca";
        dayCellStyle.cellTextColor = "#745151";
        dayCellStyle.cellTextFontName = "Times New Roman";
        dayCellStyle.cellTextFontStyle = "Bold";
        dayCellStyle.cellTextSize = 10;
        weekViewStyle.dayCellStyle = dayCellStyle;
        
        var weekendCellStyle = new DayCellStyle();
        weekendCellStyle.eventTextColor = "BlueViolet";
        weekendCellStyle.eventFontName = "Times New Roman";
        weekendCellStyle.eventFontStyle = "BoldItalic";
        weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellAlignment = "VerticalCenter";
        weekendCellStyle.cellPaddingHorizontal = 10;
        weekendCellStyle.cellPaddingVertical = 5;
        weekendCellStyle.cellBackgroundColor = "#f1e8ca";
        weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = "#f1e8ca";
        weekendCellStyle.cellTextColor = "#745151";
        weekendCellStyle.cellTextFontName = "Times New Roman";
        weekendCellStyle.cellTextFontStyle = "Bold";
        weekendCellStyle.cellTextSize = 12;
        weekViewStyle.weekendCellStyle = weekendCellStyle;
        
        var selectedCellStyle = new DayCellStyle();
        selectedCellStyle.eventTextColor = "Blue";
        selectedCellStyle.eventFontName = "Times New Roman";
        selectedCellStyle.eventFontStyle = "Bold";
        selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellAlignment = "VerticalCenter";
        selectedCellStyle.cellPaddingHorizontal = 10;
        selectedCellStyle.cellPaddingVertical = 5;
        selectedCellStyle.cellBackgroundColor = "#745151";
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = "#f1e8ca";
        selectedCellStyle.cellTextColor = "Black";
        selectedCellStyle.cellTextFontName = "Times New Roman";
        selectedCellStyle.cellTextFontStyle = "Bold";
        selectedCellStyle.cellTextSize = 18;
        weekViewStyle.selectedDayCellStyle = selectedCellStyle;
        
        var weekNumberCellStyle = new CellStyle();
        weekNumberCellStyle.cellBackgroundColor = "#bbcbdb";
        weekNumberCellStyle.cellBorderWidth = 2;
        weekNumberCellStyle.cellBorderColor = "#745151";
        weekNumberCellStyle.cellTextColor = "#745151";
        weekNumberCellStyle.cellTextFontName = "Times New Roman";
        weekNumberCellStyle.cellTextFontStyle = "Bold";
        weekNumberCellStyle.cellTextSize = 8;
        weekViewStyle.weekNumberCellStyle = weekNumberCellStyle;
        
        var dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = "#bbcbdb";
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = "#f1e8ca";
        dayNameCellStyle.cellTextColor = "#745151";
        dayNameCellStyle.cellTextFontName = "Times New Roman";
        dayNameCellStyle.cellTextFontStyle = "Bold";
        dayNameCellStyle.cellTextSize = 10;
        weekViewStyle.dayNameCellStyle = dayNameCellStyle;
        
        var titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#ffc400";
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = "#f1e8ca";
        titleCellStyle.cellTextColor = "#745151";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        weekViewStyle.titleCellStyle = titleCellStyle;
        
        return weekViewStyle;
    }
    getMonthNamesViewStyle(): CalendarMonthNamesViewStyle {
        var monthNamesViewStyle = new CalendarMonthNamesViewStyle();
        
        var titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#ffc400";
        titleCellStyle.cellBorderWidth = 2;
        titleCellStyle.cellBorderColor = "#f1e8ca";
        titleCellStyle.cellTextColor = "#745151";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        monthNamesViewStyle.titleCellStyle = titleCellStyle;
        
        var monthNameCellStyle = new CellStyle();
        monthNameCellStyle.cellBackgroundColor = "#9ebd9e";
        monthNameCellStyle.cellBorderWidth = 2;
        monthNameCellStyle.cellBorderColor = "#f1e8ca";
        monthNameCellStyle.cellTextColor = "#745151";
        monthNameCellStyle.cellTextFontName = "Times New Roman";
        monthNameCellStyle.cellTextFontStyle = "Bold";
        monthNameCellStyle.cellTextSize = 20;
        monthNamesViewStyle.monthNameCellStyle = monthNameCellStyle;
        
        return monthNamesViewStyle;
    }

}