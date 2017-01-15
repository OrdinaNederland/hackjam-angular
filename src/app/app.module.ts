// Entry point of our application
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BookListComponent} from './components/book/booklist.component';
import {MenuComponent} from './components/menu/menu.component';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppService} from './services/app.service';

@NgModule({
  imports: [
    BrowserModule
    , FormsModule
    , HttpModule
  ], // Inject built-in modules
  declarations: [
    AppComponent
    , BookListComponent
    , MenuComponent], // Inject your own modules
  providers: [
    AppService
  ],
  bootstrap: [AppComponent] // Module you need to bootstrap
})
export class AppModule {
}
