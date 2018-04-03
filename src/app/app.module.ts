import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, LayoutComponent, LayoutModule } from './layout';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    AppComponent,
	HeaderComponent,
	FooterComponent,
    LayoutComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
	LayoutModule,
	RouterModule.forRoot([
	{
		path : '',
		component : HomeComponent
	},{
	    path : 'app-register',
		component : RegisterComponent
	}
	]),
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
