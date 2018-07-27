import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GithubComponent} from './components/github/github.component';
import {ExchangesComponent} from './components/exchanges/exchanges.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent},
	{ path: 'github', component: GithubComponent},
	{ path: 'exchanges', component: ExchangesComponent},
	{ path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
