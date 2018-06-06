import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/charts/scatter-chart/scatter-chart.component';
import { BubbleChartComponent } from './components/charts/bubble-chart/bubble-chart.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GaugeChartComponent } from './components/charts/gauge-chart/gauge-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        LineChartComponent,
        PieChartComponent,
        ScatterChartComponent,
        BubbleChartComponent,
        GaugeChartComponent,
        RadarChartComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ChartsModule,
        Ng2GoogleChartsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'line-chart', component: LineChartComponent },
            { path: 'pie-chart', component: PieChartComponent },
            { path: 'scatter-chart', component: ScatterChartComponent },
            { path: 'bubble-chart', component: BubbleChartComponent },
            { path: 'gauge-chart', component: GaugeChartComponent },  
            { path: 'radar-chart', component: RadarChartComponent }, 
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
