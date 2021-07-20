import { Component, OnInit } from '@angular/core';
import { indiaService } from 'src/app/service/india.service';


@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
      
  constructor(private service:indiaService) { 
    
  }

  //ngOnInit(): void { 
      //this.service.getindia().subscribe(data=>{
    // this.dataArr = data;
     //console.warn(data)
     
   //});
   

 // }
//}

stateKey:any=[]
stateSummaryData:any=[]
ttl_confirmedCases=0
ttl_deathCases=0
ttl_recovrCases=0
ttl_vaccCases=0

ngOnInit(): void {
  //To dispaly the Data Satte Wise
  this.service.getindia().subscribe(data => {
    Object.entries(data).forEach(([keys, values]) => {
      this.stateKey = keys;
      Object.entries(values).forEach(([keyData, valData]) => {
        console.log(keyData + "=" + valData);
        if (keyData == 'total') {
          this.stateSummaryData.push(
            {
              state: keys,
              total: valData
            }
          );
        }
      })
    });

    console.log(this.stateSummaryData)
  
    //Get Total Cases
    this.stateSummaryData.forEach((records: any) => {
      console.log(records );
      this.ttl_confirmedCases += records.total.confirmed;
      this.ttl_deathCases += records.total.deceased;
      this.ttl_recovrCases += records.total.recovered;
      this.ttl_vaccCases += records.total.vaccinated1+records.total.vaccinated2;
    });
  });



}
}