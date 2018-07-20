import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { GithubComponent } from './components/github/github.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExchangesComponent } from './components/exchanges/exchanges.component';

@NgModule({
	declarations: [
		AppComponent,
		GithubComponent,
		HeaderComponent,
		FooterComponent,
		ExchangesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
