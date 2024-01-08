import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./component/user/user.component";
import { UserDetailsComponent } from "./component/user-details/user-details.component";
import { SignUpComponent } from "./component/sign-up/sign-up.component";
import { authGuard } from "./services/guard/auth.guard";
import { formCheckGuard } from "./services/guard/form-check.guard";
import { LoginComponent } from "./component/login/login.component";

const routes:Routes=[
    {
        path:'user',
        // canActivate:[authGuard],
        children:[
            {
                path:'',component:UserComponent
            },
            {
                path:':id',component:UserDetailsComponent,
                
            }
        ]
    },
    {
        path:'signup',component:SignUpComponent,
        // canDeactivate:[formCheckGuard]
    },
    {
        path:'login',component:LoginComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}