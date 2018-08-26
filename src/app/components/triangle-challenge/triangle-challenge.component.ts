import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TriangleService} from '../../services/triangle.service';

@Component({
  selector: 'app-triangle-challenge',
  templateUrl: './triangle-challenge.component.html',
  styleUrls: ['./triangle-challenge.component.css'],
  providers: [TriangleService]
})
export class TriangleChallengeComponent {

  triangleType: string;

  constructor(private triangleService: TriangleService) {
  }
  /*Validator compose allows to add more custom validations*/
  triangleForm = new FormGroup({
    sideA : new FormControl('', Validators.compose([Validators.required])),
    sideB : new FormControl('', Validators.compose([Validators.required])),
    sideC : new FormControl('', Validators.compose([Validators.required])),
  });

  public onSubmit() {
      this.triangleType = this.triangleService.getTriangleType(Object.values(this.triangleForm.value));
  }
}
