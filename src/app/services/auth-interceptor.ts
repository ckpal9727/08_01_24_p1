import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";


export class AuthInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // console.log("REquest interceptor")
        let modifiedRequest=req.clone({
            headers: req.headers.append('new','new value')
        })
        return next.handle(modifiedRequest);
    }
}