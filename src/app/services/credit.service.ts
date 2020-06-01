import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { provideRoutes } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn:'root'
})
@Pipe({
    name: 'dateFormatPipe',
})
export class CreditService {

     constructor(private http:HttpClient){}
}