import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './common.token';
import { CONSTANTS } from '../constants/common.constants';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private _httpClient = inject(HttpClient);
    private _popup = inject(ToastrService);
    private _tokenService = inject(TokenService);

    get<TResponse>(url: string): Observable<TResponse> {
        var requestHeaders = new HttpHeaders();

        requestHeaders = requestHeaders.set(CONSTANTS.AUTHORIZATION, this._tokenService.getAccessToken());

        return this._httpClient.get<TResponse>(url, { headers: requestHeaders }).pipe(
            tap(response => console.log(JSON.stringify(response))),
            catchError((error: HttpErrorResponse) => this.handleError(error))
        );
    }

    post<TPayload, TResponse>(url: string, data: TPayload): Observable<TResponse> {
        var requestHeaders = new HttpHeaders();

        requestHeaders = requestHeaders.set(CONSTANTS.AUTHORIZATION, this._tokenService.getAccessToken());

        return this._httpClient.post<TResponse>(url, data, { headers: requestHeaders }).pipe(
            tap(response => console.log(JSON.stringify(response))),
            catchError((error: HttpErrorResponse) => this.handleError(error))
        );
    }

    put<TPayload, TResponse>(url: string, data: TPayload): Observable<TResponse> {
        var requestHeaders = new HttpHeaders();

        requestHeaders = requestHeaders.set(CONSTANTS.AUTHORIZATION, this._tokenService.getAccessToken());

        return this._httpClient.put<TResponse>(url, data, { headers: requestHeaders }).pipe(
            tap(response => console.log(JSON.stringify(response))),
            catchError((error: HttpErrorResponse) => this.handleError(error))
        );
    }

    delete<TPayload, TResponse>(url: string, data: TPayload): Observable<TResponse> {
        var requestHeaders = new HttpHeaders();

        requestHeaders = requestHeaders.set(CONSTANTS.AUTHORIZATION, this._tokenService.getAccessToken());

        return this._httpClient.delete<TResponse>(url, { headers: requestHeaders, body: data }).pipe(
            tap(response => console.log(JSON.stringify(response))),
            catchError((error: HttpErrorResponse) => this.handleError(error))
        );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error(error);

        if (error.status >= CONSTANTS.ERROR_SERVER_STATUS_CODE) {
            this._popup.error(CONSTANTS.RESPONSE_SEVER_ERROR);
        }

        return throwError(error);
    }
}