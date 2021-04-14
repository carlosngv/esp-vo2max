import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vxData: any = [];

  username: string | null = '';

  constructor() {
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
  }

  public vxoChartOptions: ChartOptions = {responsive: true,};
  public vxoLabels: Label[] = [];
  public vxoChartType: ChartType = 'bar';
  public vxoChartLegend = true;
  public vxoData: MultiDataSet = [];
}
