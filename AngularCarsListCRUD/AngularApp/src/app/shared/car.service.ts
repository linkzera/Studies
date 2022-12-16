import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './car.model';

@Injectable()
export class CarService {
  selectedCar: Car = new Car;
  cars: Car[] = [];
  readonly baseURL = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }

  postCar(emp: Car) {
    return this.http.post(this.baseURL, emp);
  }

  getCarList() {
    return this.http.get(this.baseURL);
  }

  putCar(emp: Car) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteCar(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}