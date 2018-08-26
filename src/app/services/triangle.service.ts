import { Injectable } from '@angular/core';

@Injectable()
export class TriangleService {

  private supportedTriangles = {
    1: 'Equilateral Triangle',
    2: 'Isoceles Triangle',
    3: 'Scalene Triangle'
  };

  getTriangleType(sides) {
    if (this.hasValidInput(sides) && this.hasValidSides(sides)) {

      const uniqueSides = (new Set(sides)).size;
      return this.supportedTriangles[uniqueSides];
    } else {
      return 'Invalid Triangle';
    }
  }

  hasValidInput(sides) {

    // 1. Check if input is an array
    // 2. Check if there are 3 inputs only for a triangle
    // 3. Check if inputs are numbers
    if (sides instanceof Array === false || sides.length !== 3) {
      return false;
    }

    if (sides.filter(side => typeof parseFloat(side) !== 'number').length > 0) {
      return false;
    }

    for (const side of sides) {
      if (isNaN(side)) {
        return false;
      }
    }
    return true;
  }

  hasValidSides(sides) {

    const sideA = parseFloat(sides[0]),
      sideB = parseFloat(sides[1]),
      sideC = parseFloat(sides[2]);

    if (sides.filter(side => parseFloat(side) <= 0).length > 0) {
      return false;
    }

    if ((sideA + sideB) <= sideC || (sideB + sideC) <= sideA || (sideC + sideA) <= sideB) {
      return false;
    }

    return true;
  }

}
