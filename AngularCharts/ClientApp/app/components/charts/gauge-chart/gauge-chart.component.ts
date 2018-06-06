import { Component } from '@angular/core';

@Component({
    selector: 'app-gauge-chart',
    templateUrl: './gauge-chart.component.html',
    styleUrls: ['./gauge-chart.component.css']
})

export class GaugeChartComponent {

    constructor() {

    }

    guageChartData = {
        chartType: 'Gauge',
        dataTable: [
            ['Label', 'Value'],
            ['CPU', 33],
            ['Memory', 84],
            ['Disk', 55],
            ['Network', 5],
            ['GPU', 3]
        ],
        options: {
            'title': 'Tasks',
            'greenFrom': 0,
            'greenTo': 30,
            'yellowFrom': 30,
            'yellowTo': 80,
            //'yellowColor': '#CCCC00',
            'redFrom': 80, 'redTo': 100,
            'max': 100
        },
    };

    risk = {
        chartType: 'Gauge',
        dataTable: [
            ['Label', 'Value'],
            ['Market Risk', 3.2],            
        ],
        options: {
            'title': 'Market Risk',            
            'max': 5,
            'greenFrom': 0,
            'greenTo': 3,
            'yellowFrom': 3,
            'yellowTo': 4,
            'redFrom': 4,
            'redTo': 5,
        },
    };

    risk2 = {
        chartType: 'Gauge',
        dataTable: [
            ['Label', 'Value'],
            ['Risk', 1.8],
        ],
        options: {
            'title': 'Risk',
            'max': 5,
            'greenFrom': 0,
            'greenTo': 3,
            'yellowFrom': 3,
            'yellowTo': 4,
            'redFrom': 4,
            'redTo': 5,
            'minorTicks':10,
        },
    };
}