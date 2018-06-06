import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-bubble-chart',
    templateUrl: './bubble-chart.component.html',
    styleUrls: ['./bubble-chart.component.css']
})
/** BubbleChart component*/
export class BubbleChartComponent {

    public bubbleChartData: Bubble[];

    public bublleChartType: string = 'bubble';

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/BubbleChart/GetBubbleChartData').subscribe(result => {
            this.bubbleChartData = result.json() as Bubble[];
        }, error => console.error(error));
    }

    public chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(0,128,0,1)',
        },
        {
            backgroundColor: 'rgba(77,83,96,1)',
        },
        {
            backgroundColor: 'rgba(255,99,33,1)',
        },

        {
            backgroundColor: 'rgba(0,0,255,1)',
        },

        {
            backgroundColor: 'maroon',
        }
    ];

}


interface Bubble {
    data: Array<BubbleData>;
    label: string;
}


interface BubbleData {
    x: number;
    y: number;
    r: number;
}