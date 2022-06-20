import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule} from './app.routing.module'
import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
