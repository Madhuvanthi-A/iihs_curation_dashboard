import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import * as _ from 'lodash'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-magazineview',
  templateUrl: './magazineview.component.html',
  styleUrls: ['./magazineview.component.scss'],
  animations: [routerTransition()]

})

export class MagazineviewComponent implements OnInit {
@Input('feeds') item:any=[];
@Input('pagination') p:any=[];
alert:boolean=false;
imgstatus:number=0;
feedmark:number =0;
//p:any;
  constructor() {
   /*if(this.incomingfeeds.length == 0) {
      // code...
      //document.getElementById('loading').style.display = 'block';
      //setTimeout(5000);
      //console.log("load spinner");
     // console.log("mang",this.incomingfeeds.length);
      this.imgstatus == 1;
    }
    else {
      console.log("nt em",this.incomingfeeds.length);

    }*/
   }

  ngOnInit() {
    /*if(this.incomingfeeds.length == 0) {
       // code...
       document.getElementById('loading').style.display = 'block';
       setTimeout(5000);
       console.log("load spinner");
       console.log("mang loading",this.incomingfeeds.length);
       this.imgstatus == 1;
     }
     else {
       document.getElementById('loading').style.display = 'none';
       console.log("mang loaded",this.incomingfeeds.length);

     }
  */

   
	}
  checkimg(feeds){
     
      
      
      return (/<img[\s\S]*>/i.test(feeds));
   
  }
  checkhtml(feeds){
    //var str = 'Crime watch Chronicle Reporter, Bhopal Over a dozen people sustained burn injuries... <a class="meta-more" href="http://www.centralchronicle.com/lpg-cylinder-explodes-while-cooking-food-over-a-dozen-injured.html">more <span class="meta-nav">&#187;</span></a>'
    //console.log("checkforhtml",this.stripHtml(str));
    return (/<p|a|span|div[\s\S]*>/i.test(feeds));
    
  }
  stripHtml(html){
      // Create a new div element
      var temporalDivElement = document.createElement("div");
      // Set the HTML content with the providen
      temporalDivElement.innerHTML = html;
      // Retrieve the text property of the element (cross-browser support)
      return temporalDivElement.textContent || temporalDivElement.innerText || "";
  }
  extracturl(str){
    //var regex = /<img.*?src='(.*?)'/;
    //var regex = /<img[\s\S]*>/i;
     //var src = regex.exec(str);
     //console.log("src",src[0]);
     //var s = src[0].replace(/(height=")\d+("\W+width=")\d+/, '$1$2');
     //console.log("s",s);

     var tmp = document.createElement('div');
     
     tmp.innerHTML = str;
    
   
     var src = tmp.querySelector('img').getAttribute('src');
     
     return src;
     /*var div = document.createElement('div');
     div.innerHTML = src[0];
     var elements = div.childNodes;
     console.log("eleme",elements[0]);
     if(elements[0]){
       return elements[0]|| null;
     }
     else{
       return null;
     }*/
   
  }
  handleAlert(sendAlert:any){
    if(sendAlert){
      this.alert=true;
    }
  }
  public closeAlert(alert: any) {
      this.alert=false;
  }
  handleIcon(sendIcon:any){
    
    //this.feedmark = sendIcon;
    console.log("icon",this.feedmark)
  }

 
  
}