import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  people = [
    { name: 'mens', value: 100 },
    { name: 'womens', value: 200 },
    { name: 'kids', value: 300 }
  ]

  pieChartData:any = {
    labels : this.people.map(person => person.name),
    datasets: [
    {
      data: this.people.map(person => person.value),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      label: 'People'
    }
  ]
  }
   pieChartOptions = {
    responsive: true,
    // borderColor: 'red',
    legend: {
        position: 'left',
      },
    datalabels: {
    color: '#fff',
    font: {
      weight: 'bold',
      size: 14
    },
    formatter: (value:any, ctx:any) => {
      return ctx.chart.data.labels?.[ctx.dataIndex] || '';
    },
    anchor: 'center',
    align: 'center'
  }
  }


  private newLabel? = 'New label';

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      // backgroundColor: 'rgba(148,159,177,0.2)',
      {
        // title: 'Line Chart Example',
        // backgroundColor: 'rgba(148,159,177,0.2)',
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Series C',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true, position: 'bottom' },
      title: {
        display: true,
        text: 'Line Chart Example',
        position: 'bottom',
        color: 'red',
        padding: {
          top: 10,
          bottom: 30
        }
      },
      // annotation: {
      //   annotations: {
      //     line1: {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         display: true,
      //         position: 'center',
      //         color: 'orange',
      //         content: ['LineAnno'],
      //         font: {
      //           weight: 'bold',
      //         },
      //       },
      //     },
      //   },
      // },
    },
  };

  public lineChartType: ChartType = 'line';

  public chartClicked({event, active}: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    // console.log(event, active);
  }

  barOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart Example',
      },
    },
    indexAxis: 'y',
    // scales: {
    //   x: {
    //     grid: {
    //       display: false,
    //     },
    //   },
    //   y: {
    //     beginAtZero: true,
    //     ticks: {
    //       stepSize: 20,
    //     },
    //   },
    // },

  }

  barChart = {
    
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        borderWidth: 1,
      },
      {
        label: 'Series B',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        borderWidth: 1,
      }
    ]
  }


  // lineData = {
  //   labels: ['one','two','three','four','five'],
  //   dataSe
  // }

  lineData = {
  labels: ['one','two','three','four','five'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.8
  }]
};

lineOptions = {
  responsive: true,
  fill: true,
  backgroundColor: 'red',
  indexAxis: true,
  label: 'gdgdgdggdgd'
}

showCharts = true;
@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
ngAfterViewInit() {
  window.addEventListener('resize', () => {
    this.showCharts = false;
    console.log('resize');
    setTimeout(() => {
      this.showCharts = true;
    }, 100);
  });
  // setTimeout(() => {
  //   this.chart?.chart?.resize();
  // }, 100); // wait for DOM to settle
}

}
