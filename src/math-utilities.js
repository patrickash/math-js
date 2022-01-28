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
    return Math.tan(a * (Math.PI / 180));
  }

  /**
   * Return the arctangent of the y,x coordinate passed
   * @param {Number} y
   * @param {Number} x
   * @returns Arctangent of y,x
   */
  static atan2D (y,x) {
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

  static asinD (r) {
    return Math.asin(r) * (180 / Math.PI);
  }

  static acosD (r) {
    return Math.acos(r) * (180 / Math.PI);
  }

  static fixAngle (a) {
    a %= 360;

    return (a < 0) ? a + 360 : a;
  }

  static cartisianToPolar (p) {
    var r = Math.sqrt(p.x * p.x + p.y * p.y),
      t = this.atan2D(p.y, p.x);

    return {r:r, t:t};
  }

  static polarToCartisian (p) {
    var x = p.r * this.cosD(p.t),
      y = p.r * this.sinD(p.t);

    return {x:x, y:y};
  }

  /**
   * Return the mean value of the array of numbers passed
   * @param {Array} a
   * @returns Return mean value of a set of numbers.
   */
  static mean (a) {
    var m = 0, len = a.length, i;

    for (i = a.length; --i > -1;) {
      m = a[i] + m;
    }

    return m / len;
  }

  /**
   * Return mediam value of the array of numbers passed
   * @param {Array} a
   * @returns Return median value of a set of numbers.
   */
  static median (a) {
    var len = a.length;

    a.sort();
    if (len === 0) return 0;

    if (len === 1) return a[0];

    if (len%2 === 1) {
      return a[Math.floor(len * .5)];
    } else {
      return this.mean([a[(len * .5) - 1], a[len * .5]]);
    }
  }

  /**
   * Return the range between the min and max numbers in an array
   * @param {Array} a
   * @returns Returns the max range found in a set of numbers.
   */
  static range (a) {
    a.sort();
    return a[a.length - 1] - a[0];
  }

}
