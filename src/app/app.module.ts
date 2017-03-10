// Entry point of our application
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PartyListComponent} from './components/party/partylist.component';
import {MenuComponent} from './components/menu/menu.component';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppService} from './services/app.service';
import {SidebarComponent} from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule
    , FormsModule
  ], // Inject built-in modules
  declarations: [
    AppComponent
    , PartyListComponent
    , MenuComponent
    , SidebarComponent], // Inject your own modules
  providers: [
    AppService
  ],
  bootstrap: [AppComponent] // Module you need to bootstrap
})
export class AppModule {
}
