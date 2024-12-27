import { Component, Inject,OnInit,ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { ChartComponent } from "ng-apexcharts";
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: { text: string; offsetY?: number };
  colors: string[];
}; 

@Component({
    selector: 'app-dashboard',
    imports: [NgApexchartsModule,CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    standalone: true 

})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public secondChartOptions: Partial<ChartOptions>;
  public thirdChartOptions: Partial<ChartOptions>;
  public fourChartOptions: Partial<ChartOptions>;

  Datos!: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<DashboardComponent>) {
    this.Datos=data;
    this.chartOptions = {
      series: [],
      chart: {
        width: 340,
        height: 340,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 300,
          options: {
            chart: {
              width: 200,
              height: 200
            }
          }
        }
      ]
    };
  
    this.secondChartOptions = {
      series: [], // Ejemplo de datos estáticos
      chart: {
        width: 360,
        height: 360,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 300,
          options: {
            chart: {
              width: 200,
              height: 200
            }
          }
        }
      ]
    };
    this.thirdChartOptions = {
      series: [], // Ejemplo de datos estáticos
      chart: {
        width: 360,
        height: 360,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 300,
          options: {
            chart: {
              width: 200,
              height: 200
            }
          }
        }
      ]
    };
    this.fourChartOptions = {
      series: [], // Ejemplo de datos estáticos
      chart: {
        width: 350,
        height: 350,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 300,
          options: {
            chart: {
              width: 200,
              height: 200
            }
          }
        }
      ]
    };      

    const callDirections: string[] = Array.from(new Set(this.Datos.map((record: any) => record["Call Direction"])));
    const callDirectionCounts: number[] = callDirections.map((direction: string) =>
        this.Datos.filter((record: any) => record["Call Direction"] === direction).length
      );
////Obtener los 5 departamentos con más llamadas inbound
    const inboundCalls = this.Datos.filter((record: any) => record["Call Direction"] === "Inbound");

    // Agrupar por persona y contar las llamadas
    const callCountsByPerson: { [key: string]: number } = inboundCalls.reduce((acc: any, record: any) => {
      const person = record["Department"]; // Cambia "Person" al nombre del campo que identifica a las personas
      acc[person] = (acc[person] || 0) + 1;
      return acc;
    }, {});

    // Convertir a un arreglo y ordenar por número de llamadas descendente
    const sortedCallCounts = Object.entries(callCountsByPerson)
      .sort((a, b) => b[1] - a[1]) // Ordenar por número de llamadas (descendente)
      .slice(0, 5); // Tomar los primeros 5

    // Extraer nombres y conteos para el gráfico
    const topPersons = sortedCallCounts.map(([person, count]) => person);
    const topCallCounts = sortedCallCounts.map(([person, count]) => count);
/////Extraer llamadas TOP5 DE LOS DEPARTAMENTOS QUE NO CONTESTARON LLAMADAS
    const unanswerendCalls=this.Datos.filter(
      (record:any)=>record["Call Direction"]==="Inbound*"
    )

    // Agrupar por persona y contar las llamadas
    const callCountsByDepartment: { [key: string]: number } = unanswerendCalls.reduce((acc: any, record: any) => {
      const person = record["Department"]; // Cambia "Person" al nombre del campo que identifica a las personas
      acc[person] = (acc[person] || 0) + 1;
      return acc;
    }, {});

    // Convertir a un arreglo y ordenar por número de llamadas descendente
    const sortedCallImboundCounts = Object.entries(callCountsByDepartment)
      .sort((a, b) => b[1] - a[1]) // Ordenar por número de llamadas (descendente)
      .slice(0, 5); // Tomar los primeros 5

    // Extraer nombres y conteos para el gráfico
    const top5Persons = sortedCallImboundCounts.map(([person, count]) => person);
    const top5CallCounts = sortedCallImboundCounts.map(([person, count]) => count);    

///Obtener llamas answerend y unanswerend
    const answerendCalls = this.Datos.filter((record: any) => record["Call Direction"] === "Inbound" || record["Call Direction"]==="Outbound");
    const unansweredCalls = this.Datos.filter((record: any) =>(record["Call Direction"] === "Inbound*" || record["Call Direction"] === "Outbound*"));
    // Calcular los totales
    const answeredCount = answerendCalls.length;
    const unansweredCount = unansweredCalls.length;
      
    // Crear el arreglo con nombres y valores
    const categories = ["ANSWERED", "UNANSWERED"];
    const values = [answeredCount, unansweredCount];    
    
    // Actualiza chartOptions con los datos calculados
    this.chartOptions.series = callDirectionCounts;
    this.chartOptions.labels = callDirections;
    // Actualiza secondChartOptions con los datos calculados
    this.secondChartOptions.series = topCallCounts;
    this.secondChartOptions.labels = topPersons;
    // Actualiza secondChartOptions con los datos calculados
    this.thirdChartOptions.series = top5CallCounts;
    this.thirdChartOptions.labels = top5Persons;

    //Actualizar fourChartOptions con los datos calculados
    this.fourChartOptions.series = values;
    this.fourChartOptions.labels = categories;

    }
    
    ngOnInit(): void {}

    onClose():void{
      this.dialogRef.close(); // Si estás usando Angular Material

    }

    }
