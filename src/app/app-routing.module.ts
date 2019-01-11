import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { JournalsComponent } from './components/journals/journals.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    {
        path: "", 
        component: MainpageComponent
        // ,
        // children:[
        //     {path: "clients", component: ClientsComponent},
        // ]
    },
    { path: "home", component: HomeComponent },
    { path: "header", component: HeaderComponent },
    { path: "footer", component: FooterComponent },
    { path: "about", component: AboutusComponent },
    { path: "services", component: OurservicesComponent },
    { path: "journals", component: JournalsComponent },
    { path: "contact", component: ContactComponent },
    { path: "clients", component: ClientsComponent },


    { path: '**', redirectTo: '' }

    // {path: 'login', component: LoginComponent},
    // {path: '', component: DashboardComponent,canActivate: [AuthGuard] },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }