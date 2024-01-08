import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoginInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // console.log("login response")
        // console.log(req.headers)
        return next.handle(req).pipe(

            tap((event)=>{
               
                if(event.type===4){
                    // console.log(event)
                }
            })
        )
    }
}