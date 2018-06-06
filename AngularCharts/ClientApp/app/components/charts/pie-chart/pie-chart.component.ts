import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})


export class PieChartComponent {

    public worldPopulation: WorldPopulation;
    public chartType: string = 'pie';
    //public chartType: string = 'doughnut';

    public chartName: string = 'Pie Chart';

    //public chartType: string = 'polarArea';

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/PieChart/GetPopulationData').subscribe(result => {
            this.worldPopulation = result.json() as WorldPopulation;
        }, error => console.error(error));
    }

    public showPieChart() {
        this.chartType = 'pie';
        this.chartName = 'Pie Chart';
    }

    public showDoughnutChart() {
        this.chartType = 'doughnut';
        this.chartName = 'Doughnut Chart';
    }


    public showPolarAreaChart() {
        this.chartType = 'polarArea';
        this.chartName = 'Polar Area Chart';
    }
}

interface WorldPopulation {
    countries: Array<string>;
    population: Array<number>;
}