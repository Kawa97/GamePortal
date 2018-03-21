import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../components/login/login.component';

import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { DetailGameComponent } from '../components/detail-game/detail-game.component';
import { AuthGuard } from '../services/authguard.service';
//import { ModifyComponent } from '../components/modify/modify.component'; 
    
    const routes: Routes = [
        { path: '', redirectTo:'login' ,pathMatch:'full'},
        { path: 'login' , component:LoginComponent},
        { path: 'home',component:HomeComponent,canActivate:[AuthGuard]},
        { path: 'list',component:ListComponent,canActivate:[AuthGuard]},
        { path: 'detail',component:DetailGameComponent,canActivate:[AuthGuard]}
        //{ path: 'modify',component:ModifyComponent,canActivate:[AuthGuard]},

        ];

    @NgModule({
    imports: [
    RouterModule.forRoot(
        routes,
    )
    ],

    exports: [
    RouterModule
    ]
    })
    export class DemoRouterModule{}