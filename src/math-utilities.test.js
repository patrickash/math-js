import MathUtilities from "./math-utilities";

describe('MathUtilities', () => {

  // radiansToDegrees
  test('radiansToDegrees() PI radians returns 180 deg ', () => {
    expect(MathUtilities.radiansToDegrees(Math.PI)).toBe(180);
  });

  // degreesToRadians
  test('degreesToRadians() 180 degrees returns PI radians', () => {
    expect(MathUtilities.degreesToRadians(180)).toBe(Math.PI);
  });

  // sinD
  test('sinD() sine of 180 deg returns 0', () => {
    expect(MathUtilities.sinD(180)).toBeCloseTo(0, 5);
  });

  test('sinD() sine of 270 deg returns -1', () => {
    expect(MathUtilities.sinD(270)).toBe(-1);
  });

  // cosD
  test('cosD() cosine of 90 deg returns 0', () => {
    expect(MathUtilities.cosD(90)).toBeCloseTo(0, 5);
  });

  test('cosD() cosine of 180 deg returns -1', () => {
    expect(MathUtilities.cosD(180)).toBe(-1);
  });

  // tanD
  test('tanD() tangent of 45 deg return 1', () => {
    expect(MathUtilities.tanD(45)).toBe(1);
  });

  test('tanD() tangent of 135 deg returns -1', () => {
    expect(MathUtilities.tanD(135)).toBe(-1);
  });

  // arctangent
  test('arctangent() (10y, 10x) returns 45 deg', () => {
    expect(MathUtilities.atan2D(10, 10)).toBe(45);
  });

  test('arctangent() (10y, -10x) returns 135 deg', () => {
    expect(MathUtilities.atan2D(10, -10)).toBe(135);
  });

  // angleOfLine
  test('angleOfLine() points (10,10) and (20,20) return 45 deg', () => {
    expect(MathUtilities.atan2D(10, 10, 20, 20)).toBe(45);
  });

  // asinD
  test('asinD() inverse sine of 1 returns 90', () => {
    expect(MathUtilities.asinD(1)).toBe(90);
  });

  // acosD
  test('acosD() inverse cosine of -1 returns 180', () => {
    expect(MathUtilities.acosD(-1)).toBe(180);
  });

  // fixAngle
  test('fixAngle() 1670 deg returns normalized angle of 230 deg', () => {
    expect(MathUtilities.fixAngle(1670)).toBe(230);
  });

  // cartisianToPolar
  test('cartisianToPolar() {x:10,y:10} from pole returns {r:14.14, t:45}', () => {
    expect(MathUtilities.cartisianToPolar({
      x: 10,
      y: 10
    })).toEqual({
      r: expect.closeTo(14.14,2),
      t: 45,
    });
  });

  // polarToCartisian
  test('polarToCartisian() {r: rMath.sqrt(200), t: 45} from pole returns {x: 10, y: 10}', () => {
    let p = {
      x: 10,
      y: 10
    }
    expect(MathUtilities.polarToCartisian({
      r: Math.sqrt((p.x * p.x) + (p.y * p.y)),
      t: 45
    })).toEqual({
      x: expect.closeTo(10, 5),
      y: expect.closeTo(10, 5),
    });
  });

  // mean
  test('mean() [11,4,93,234,63,249] returns 109', () => {
    let arr = [ 11, 4, 93, 234, 63, 249 ];
    expect(MathUtilities.mean(arr)).toBe(109);
  });

  // median
  test('median() [11,4,93,234,63,241] returns 78', () => {
    let arr = [ 11, 4, 93, 234, 63, 241 ];
    expect(MathUtilities.median(arr)).toBe(78);
  });

  test('median() [11,4,93,234,63,241,-100] returns 63', () => {
    let arr = [ 11, 4, 93, 234, 63, 241, -100 ];
    expect(MathUtilities.median(arr)).toBe(63);
  });

  // mode - return array of most frequent numbers in the array
  test('mode() [1, 2, 3, 2, 4, 3, 5] returns [2, 3]', () => {
    let arr = [1, 2, 3, 2, 4, 3, 5];
    expect(MathUtilities.mode(arr)).toStrictEqual([2, 3]);
  });

  // mode - should return an empty array
  test('mode() [] returns []', () => {
    let arr = [];
    expect(MathUtilities.mode(arr)).toEqual([]);
  });

  // mode - should return an empty with 1 element if all numbers occur once
  test('mode() [1,2,3,4,5,6] returns [1,2,3,4,5,6]', () => {
    let arr = [1,2,3,4,5,6];
    expect(MathUtilities.mode(arr)).toStrictEqual(arr);
  });

  // mode - should handle negative numbers and 0
  test('mode() [] returns []', () => {
    let arr = [1, 2, 3, 0, -1, -1, -1, 0, 0];
    expect(MathUtilities.mode(arr)).toStrictEqual([-1, 0]);
  });

  // range
  test('range() [11,4,93,234,63,241] returns 237', () => {
    let arr = [
      11,
      4,
      93,
      234,
      63,
      241
    ];
    expect(MathUtilities.range(arr)).toBe(237);
  });

});
