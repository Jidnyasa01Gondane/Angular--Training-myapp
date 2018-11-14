import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactPersonallyComponent } from './contact-personally/contact-personally.component';
import { SendEnquiryComponent } from './send-enquiry/send-enquiry.component';
import { DetailsComponent } from './details/details.component';
import { MedicalComponent } from './medical/medical.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpcomponentComponent } from './httpcomponent/httpcomponent.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ContactPersonallyComponent,
    SendEnquiryComponent,
    DetailsComponent,
    MedicalComponent,
    HttpcomponentComponent,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path:'home', component:HomeComponent,
          children:
          [   
            {path:'details/:empId', component:DetailsComponent },
            {path:'MedicalDetails', component:MedicalComponent}
          ]
        },
        {path:'aboutus', component:AboutUsComponent},
        {path:'contactus', component:ContactUsComponent,
          children:
          [   
            {path:'contactPersonally', component:ContactPersonallyComponent},
            {path:'sendEnquiry', component:SendEnquiryComponent}
          ]
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
