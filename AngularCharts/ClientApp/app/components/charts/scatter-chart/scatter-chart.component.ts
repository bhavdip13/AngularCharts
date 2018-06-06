import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-scatter-chart',
    templateUrl: './scatter-chart.component.html',
    styleUrls: ['./scatter-chart.component.css']
})

export class ScatterChartComponent {

    public scatterData: Scatter[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/ScatterChart/GetScatterChartData').subscribe(result => {
            this.scatterData = result.json() as Scatter[];
        }, error => console.error(error));
    }

    public chartLegend: boolean = true;
    //public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public chartColors: Array<any> = [
        {

            backgroundColor: 'rgba(0,128,0,1)',
            borderColor: 'rgba(0,128,0,1)',
            pointBackgroundColor: 'rgba(0,128,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointRadius: 8
        },
        {

            backgroundColor: 'rgba(77,83,96,1)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            lineTension: 0,
            pointRadius: 10,
            pointStyle: 'rectRounded'
        },
        {
            backgroundColor: 'rgba(255,99,33,1)',
            borderColor: 'rgba(255,99,33,1)',
            pointBackgroundColor: 'rgba(255,99,33,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointStyle: 'rect',
            pointRadius: 12,

        },

        {

            backgroundColor: 'rgba(0,0,255,1)',
            borderColor: 'rgba(0,0,255,1)',
            pointBackgroundColor: 'rgba(0,0,255,1)',
            pointBorderColor: 'rgba(0,0,255,1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointStyle: 'triangle',
            pointRadius: 10,
            borderWidth: 2,
        },

        {

            backgroundColor: 'rgba(255,0,0,1)',
            borderColor: 'rgba(255,0,0,1)',
            pointBackgroundColor: 'rgba(255,0,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointStyle: 'rectRot',
            pointRadius: 12,
        }
    ];
    public scatterChartType: string = 'scatter';
    public ScatterchartOptions: any = {
        responsive: true,
        legend: {
            position: 'bottom'
        },

        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    };
}

interface Scatter {
    data: Array<ScatterData>;
    label: string;
}

interface ScatterData {
    x: number;
    y: number;
}