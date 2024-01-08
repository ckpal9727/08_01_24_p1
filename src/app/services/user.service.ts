import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, Subject, catchError, map, of, tap, throwError } from "rxjs";
import { User } from "../model/user.model";

class Response {
    constructor(public name: string, public email: string, public expires: number) {}

    // You might have other methods or properties here
}



@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) { }

    isLogin!: Subject<boolean>

    addUser(user: User): Observable<User> {
        return this.http.post<User>('http://localhost:3000/users', user)
    }
    updateUser(id: number, user: User): Observable<User> {
        return this.http.put<User>(`http://localhost:3000/users/${id}`, user)
    }
    getUsers(): Observable<User[]> {
        let params = new HttpParams();
        params = params.append('data', 'value')
        params = params.append('key', 'ck')

        return this.http.get<User[]>(`http://localhost:3000/users`, { params: params });
    }
    deleteUser(id: number): Observable<HttpEvent<User>> {
        return this.http.delete<User>(`http://localhost:3000/users/${id}`, { observe: 'events' }).
            pipe(tap((response) => {
                // if(response.type===HttpEventType.Sent){
                //     console.log("Data sent")
                // }
                // if(response.type===HttpEventType.Response){
                //     console.log(response.body)
                // }
            }))
    }
    getUser(id: number): Observable<User> {
        return this.http.get<User>(`http://localhost:3000/users/${id}`)
    }
    auth(email: string, password: string): Observable<{_id:string,name:string,email:string,isAdmin:boolean}> {        
        // const existUser = this.http.get<User>(`http://localhost:3000/uses?email=${email}&&password=${password}`)
        // return existUser  
       return this.http.post<{_id:string,name:string,email:string,isAdmin:boolean}>(`http://localhost:8000/api/users/login`,{email,password})
        
    }

    handleError(err:HttpErrorResponse){
        
        if(err.error.message==="Invalid password " || "Invalid email"){            
            return err.error.message  
        }else{
            return err.statusText
        }
        
       
    }

}

