import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  months = ['Janvier-19', 'Fevrier-19', 'Mars-19', 'Avril-19', 'Mai-19',
             'Juin-19',  'Juillet-19', 'Aout-19', 'Septembre-19',
              'Octobre-19', 'Novembre-19', 'Decembre-19'];
  resp = [];
  
  exist(m) {
    var found = false;
    found = this.resp.find(function(element) {
      if(element.month == m) {
        return true;
      };
    });
    return found;
  }

  ngOnInit() {
    this.resp.push({month: 'Janvier-19', amount: 150});
    this.resp.push({month: 'Fevrier-19', amount: 150});
    this.resp.push({month: 'Mars-19', amount: 50});
    console.log(this.resp.length);
    // console.log(this.months);
    let i = 1;
    for(let month of this.months){
      if(!this.exist(month)){
        this.resp.push({month: month, amount: 0});
      }
      i++;

    }
    console.log(this.resp);
    for(let m of this.resp) {
      console.log(m);
    }
  }
}
