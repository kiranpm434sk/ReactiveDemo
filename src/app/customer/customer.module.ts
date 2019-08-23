import { NgModule} from "@angular/core";
import { CustomerComponent } from './customer.component';
import { customerrouting } from './customer.routing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations:[CustomerComponent],
  imports:[CommonModule,ReactiveFormsModule,customerrouting]
})
export class CustomerModule { }
