import { TestBed, inject } from '@angular/core/testing';

import { TriangleService } from './triangle.service';

describe('TriangleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleService]
    });
  });

  it('Triangle Service should be created', inject([TriangleService], (service: TriangleService) => {
    expect(service).toBeTruthy();
  }));

  it('Input [1,1,1] should return Equilateral Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.getTriangleType([1, 1, 1])).toBe('Equilateral Triangle');  }));

  it('Input [1,2,2] should return Isoceles Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.getTriangleType([1, 2, 2])).toBe('Isoceles Triangle');  }));

  it('Input [2,3,4] should return Scalene Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.getTriangleType([2, 3, 4])).toBe('Scalene Triangle');  }));

  it('Input [1,2,10] should return Invalid Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.getTriangleType([1, 2, 10])).toBe('Invalid Triangle');  }));

  it('Input [0,0,0] should return Invalid Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.getTriangleType([0, 0, 0])).toBe('Invalid Triangle');  }));

  it('Input [-1,0,0] should return Invalid Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.getTriangleType([-1, 0, 0])).toBe('Invalid Triangle');  }));

  it('Input [10] should return false -> Should be an array of size 3', inject([TriangleService], (service: TriangleService) => {
    expect(service.hasValidInput([10])).toBe(false);  }));

  it('Input 100 should return false -> Should be an array', inject([TriangleService], (service: TriangleService) => {
    expect(service.hasValidInput(100)).toBe(false);  }));

  it('Input [10, 20] should return false -> Should have 3 sides', inject([TriangleService], (service: TriangleService) => {
    expect(service.hasValidInput([10, 20])).toBe(false);  }));

  it('Input [abcd, b, c] should return false -> Should have valid numbers', inject([TriangleService], (service: TriangleService) => {
    expect(service.hasValidInput(['abcd', 'b', 'c'])).toBe(false);  }));

  it('Input [1, 1, 1] should return true -> Valid Inputs', inject([TriangleService], (service: TriangleService) => {
    expect(service.hasValidInput([1, 1, 1])).toBe(true);  }));

  it('Input [1, 1, 1] should return true -> has Valid Sides', inject([TriangleService], (service: TriangleService) => {
    expect(service.hasValidSides([1, 1, 1])).toBe(true);  }));

  it('Input [1, -1, 1] should return true -> has InValid Sides', inject([TriangleService], (service: TriangleService) => {
    expect(service.hasValidSides([1, -1, 1])).toBe(false);  }));
});
