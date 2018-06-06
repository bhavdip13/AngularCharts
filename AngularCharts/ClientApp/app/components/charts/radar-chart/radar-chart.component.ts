import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-radar-chart',
    templateUrl: './radar-chart.component.html',
    styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {

    public chart: RadarChartData;
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/RadarChart/GetRadarChartData').subscribe(result => {
            this.chart = result.json() as RadarChartData;
        }, error => console.error(error));
    }
}

interface ChartData {
    data: Array<number>;
    label: string;
}

interface RadarChartData {
    chartData: ChartData[];
    chartLabels: string[];
}