// Entry point of our application
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppService} from './services/app.service';

@NgModule({
  imports: [BrowserModule, FormsModule], // Inject built-in modules
  declarations: [AppComponent],
  providers: [AppService],
  bootstrap: [AppComponent] // Module you need to bootstrap
})
export class AppModule {
}
