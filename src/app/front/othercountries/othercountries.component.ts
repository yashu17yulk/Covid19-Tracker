import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataServiceService } from 'src/app/service/data-service.service';
import { DateWiseData } from '../models/date-wise-data';
import { GlobalDataSummary } from '../models/global-data';

@Component({
  selector: 'app-othercountries',
  templateUrl: './othercountries.component.html',
  styleUrls: ['./othercountries.component.css']
})
export class OthercountriesComponent implements OnInit {

  data : GlobalDataSummary[]=[];
  countries : string[] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  selectedCountryData : DateWiseData[]=[]; 
  dateWiseData:any ;
  loading = true;
  options:any = {
    height : 500, 
    animation:{
      duration: 1000,
      easing: 'out',
    },
  }
 
  constructor(private services : DataServiceService) { }

  ngOnInit(): void {

    merge(
      this.services.getDateWiseData().pipe(
        map(result=>{
          this.dateWiseData = result;
        })
      ), 
      this.services.getGlobalData().pipe(map(result=>{
        this.data = result;
        this.data.forEach((cs:any)=>{
          this.countries.push(cs.country)
        })
      }))
    ).subscribe(
      {
        complete : ()=>{
         this.updateValues('India')
         this.loading = false;
        }
      }
    )
    
    

  }

  updateChart(){
    let dataTable = [];
    dataTable.push(["Date" , 'Cases'])
    this.selectedCountryData.forEach(cs=>{
      dataTable.push([cs.date , cs.cases])
    })

   
  }

  updateValues(country : string){
    console.log(country);
    this.data.forEach((cs:any)=>{
      if(cs.country == country){
        this.totalActive = cs.active
        this.totalDeaths = cs.death
        this.totalRecovered = cs.recovered
        this.totalConfirmed = cs.confirmed
      }
    })

    this.selectedCountryData  = this.dateWiseData[country]
    // console.log(this.selectedCountryData);
    this.updateChart();
    
  }

}


