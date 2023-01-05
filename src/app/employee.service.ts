import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees"

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    // @ts-ignore
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number | undefined) : Observable<Employee> {
    return  this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number | undefined, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number | undefined): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
