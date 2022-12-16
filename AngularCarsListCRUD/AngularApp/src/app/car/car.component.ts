import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CarService } from '../shared/car.service';
import { Car } from '../shared/car.model';

declare var M: any;

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {

  constructor(public carService: CarService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCarList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.carService.selectedCar = {
      _id: "",
      placa: "",
      chassi: "",
      renavam: "",
      modelo: "",
      marca:  "",
      ano:  2021,
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.carService.postCar(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCarList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.carService.putCar(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCarList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCarList() {
    this.carService.getCarList().subscribe((res) => {
      this.carService.cars = res as Car[];
    });
  }

  onEdit(emp: Car) {
    this.carService.selectedCar = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.carService.deleteCar(_id).subscribe((res) => {
        this.refreshCarList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}