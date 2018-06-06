import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-line-chart',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.css']
})


export class LineChartComponent {
	public weatherForecast: WeatherForecast;
	public chartType: string = 'line';

	public chartLegend: boolean = true;


	public chartOptions: any = {
		responsive: true,
		legend: {
			position: 'bottom'
		}
	};

	constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
		http.get(baseUrl + 'api/LineChart/GetWeatherForecast').subscribe(result => {
			this.weatherForecast = result.json() as WeatherForecast;
		}, error => console.error(error));
	}
	public chartColors: Array<any> = [
		{

			//backgroundColor: 'rgba(255, 0, 0, 0.2)',
			borderColor: 'rgba(255,153,51,1)',
			pointBackgroundColor: 'rgba(0,128,0,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)',
			pointRadius: 8,
			fill: false,
		},
		{

			//backgroundColor: 'rgba(0, 0, 255, 0.4)',
			borderColor: 'rgba(77,83,96,1)',
			pointBackgroundColor: 'rgba(77,83,96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(77,83,96,1)',
			lineTension: 0,
			pointRadius: 10,
			pointStyle: 'rectRounded',
			fill: false,
		},
		{
			//backgroundColor: 'green',
			borderColor: 'rgba(0,128,0,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)',
			pointStyle: 'rect',
			pointRadius: 6,
			fill: false,

		},

		{

			//backgroundColor: 'rgba(255, 255, 0, 0.2)',
			borderColor: 'rgba(0,0,255,1)',
			pointBackgroundColor: 'rgba(0,0,255,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)',
			pointStyle: 'triangle',
			pointRadius: 10,
			fill: false,
		}
	];

	public showLineChart() {
		this.chartType = 'line';
	}

	public showBarChart() {
		this.chartType = 'bar';
	}
}

interface Weather {
	data: Array<number>;
	label: string;
}

interface WeatherForecast {
	weatherList: Weather[];

}

