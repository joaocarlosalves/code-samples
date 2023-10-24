import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api, headers } from 'shared/var';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

    get(what: string, end: string) { return this.http.get(this.mountGet(what, end)) }
    post(end: string, body: any) { return this.http.post(this.mountPost(end), body, headers) }
    mountGet(what: string, end: string) { return `${ api }/${ what }${ end != '' ? '&' + end : '' }` }
    mountPost(end: string) { return `${ api }/${ end }` }
}
