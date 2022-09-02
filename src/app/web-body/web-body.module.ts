import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebBodyHeaderComponent } from './web-body-header/web-body-header.component';
import { WebBodyComponent } from './web-body.component';
import { WebBodyFooterComponent } from './web-body-footer/web-body-footer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WebBodyHeaderComponent,
    WebBodyComponent,
    WebBodyFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    WebBodyHeaderComponent,
    WebBodyComponent,
    WebBodyFooterComponent
  ]
})
export class WebBodyModule { }
