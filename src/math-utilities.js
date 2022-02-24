export default class MathUtilities {

	constructor () {
		this.VERSION = "1.0";
	}

	/**
	 * Takes a radian value and returns its equivalent in degrees.
	 * @method radiansToDegrees
	 * @param {Number} r Radian value to convert
	 * @returns {Number} Degree equivalent of the radian value.
	 */
	static radiansToDegrees (r) {
		return (r * 180) / Math.PI;
	}

	/**
	 * Takes a degree value and returns its equivalent in radians.
	 * @method degreesToRadians
	 * @param {Number} d Degree value to convert.
	 * @returns {Number} Radian equivalent to the degree value.
	 */
	static degreesToRadians (d) {
		return (d * Math.PI) / 180;
	}

  /**
   * Returns the sine of an angle passed in as a degree
   * @method sinD
   * @param {Number} a Angle, in degrees.
   * @returns {Number} Sine of angle (between 1 and -1).
   */
  static sinD (a) {
    return Math.sin(a * (Math.PI / 180));
  }

  /**
   * Returns the cosine of an angle passed in as a degree
   * @method cosD
   * @param {Number} a Angle, in degrees.
   * @returns {Number} Cosine of angle (between 1 and -1).
   */
  static cosD (a) {
    return Math.cos(a * (Math.PI / 180));
  }

  /**
   * Return the tangent of an angle passed
   * @method tanD
   * @param {Number} a
   * @returns {Number} Tangent of angle
   */
  static tanD (a) {
    return a === 45 ? 1 : a === 135 ? -1 : Math.tan(a * (Math.PI / 180));
  }

  /**
   * Return the arctangent of the y,x coordinate passed
   * @param {Number} y
   * @param {Number} x
   * @returns Arctangent of y,x
   */
  static atan2D (y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  /**
   * Return the angle of the line connecting two points
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   * @returns Angle of the line connecting the two points passed.
   */
  static angleOfLine (x1, y1, x2, y2) {
    return this.atan2D(y2 - y1, x2 - x1);
  }

  /**
   * Returns angle equal to ratio of opposite side and hypotenuse
   * @param {Number} r
   * @returns Angle in degrees
   */
  static asinD (r) {
    return Math.asin(r) * (180 / Math.PI);
  }

  /**
   * Returns angle equal to ratio of adjacent side and hypotenuse
   * @param {Number} r
   * @returns Angle in degrees
   */
  static acosD (r) {
    return Math.acos(r) * (180 / Math.PI);
  }

  /**
   * Normalizes angle between 0 and 360 degrees
   * @param {Number} a
   * @returns Angle in degrees
   */
  static fixAngle (a) {
    a %= 360;

    return (a < 0) ? a + 360 : a;
  }

  /**
   * Converts cartisian coordinates to polar coordinates
   * @param {Object} p
   * @returns Object (radius r and angle t)
   */
  static cartisianToPolar (p) {
    let r = Math.sqrt(p.x * p.x + p.y * p.y),
      t = this.atan2D(p.y, p.x);

    return {r:r, t:t};
  }

  /**
   * Coverts polar coordinates to cartisian coordinates
   * @param {Object} p
   * @returns Object (x,y)
   */
  static polarToCartisian (p) {
    let x = p.r * this.cosD(p.t),
      y = p.r * this.sinD(p.t);

    return {x:x, y:y};
  }

  /**
   * Return the mean value of the array of numbers passed
   * @param {Array} arr
   * @returns Return mean value of a set of numbers.
   */
  static mean (arr) {
    let m = 0, len = arr.length, i;

    for (i = arr.length; --i > -1;) {
      m = arr[i] + m;
    }

    return m / len;
  }

  /**
   * Return mediam value of the array of numbers passed
   * @param {Array} arr
   * @returns Return median value of a set of numbers.
   */
  static median (arr) {
    let len = arr.length;

    arr.sort( (a, b) => {
      return a - b
    });

    if (len === 0) return 0;

    if (len === 1) return arr[0];

    if (len%2 === 1) {
      return arr[Math.floor(len * .5)];
    } else {
      return this.mean([arr[(len * .5) - 1], arr[len * .5]]);
    }
  }

  /**
   * Return the range between the min and max numbers in an array
   * @param {Array} arr
   * @returns Returns the max range found in a set of numbers.
   */
  static range (arr) {
    arr.sort( (a, b) => {
      return a - b
    });

    return arr[arr.length - 1] - arr[0];
  }

}
