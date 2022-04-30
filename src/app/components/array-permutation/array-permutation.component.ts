import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-array-permutation',
  templateUrl: './array-permutation.component.html',
  styleUrls: ['./array-permutation.component.css']
})
export class ArrayPermutationComponent implements OnInit {
  combinations: any = [];
  arrayForm = new FormGroup({
    firstArray: new FormControl('', Validators.required),
    secondArray: new FormControl('', Validators.required),
    thirdArray: new FormControl('', Validators.required)
  })
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.commonService.getPermutation({
      arr1: this.arrayForm.controls['firstArray'].value.split(','),
      arr2: this.arrayForm.controls['secondArray'].value.split(','),
      arr3: this.arrayForm.controls['thirdArray'].value.split(',')
    }).subscribe({
      next: (response) => {
        console.log(response);
        this.combinations = response.data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
