import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CustompipePipe } from './custompipe.pipe';
import { GenderspecificPipe } from './genderspecific.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CustompipePipe,
    GenderspecificPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
