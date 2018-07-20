import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GithubComponent} from './components/github/github.component';
import {ExchangesComponent} from './components/exchanges/exchanges.component';

const routes: Routes = [
	{ path: 'github', component: GithubComponent},
	{ path: 'exchanges', component: ExchangesComponent},
	{ path: '', redirectTo: '/github', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
