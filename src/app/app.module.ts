import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './containers/site.component';
import { HeaderComponent } from './containers/header/header.component';
import { ContentComponent } from './containers/content/content.component';
import { SidebarComponent } from './containers/content/sidebar/sidebar.component';
import { FooterComponent } from './containers/footer/footer.component';
import { TableComponent } from './containers/content/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
