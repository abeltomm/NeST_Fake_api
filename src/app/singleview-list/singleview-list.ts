import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';


@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList {
singleproduct:any;
constructor( private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef) {}
ngOnInit()
{
  const productid=this.route.snapshot.paramMap.get('titledid');
  if (productid){
    this.apiservice.getsingleProduct(productid).subscribe((data) => {
      this.singleproduct= data;
      this.cdr.detectChanges()
      console.log(data);

      });
    }
   }
}
