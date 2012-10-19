/*
* MathUtilities
* This is a conversion from an AS class that I used for years. Some behaviors
* are based off of the functions in Robert Penner's 'Programming for Flash MX.'
* 
* The MIT License
* 
* Copyright (c) 2012 Patrick Ashamalla and other MathUtilities contributors.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

(function(window) {
	MathUtilities = function() {
		return new MathUtilities.fn.init();
	}

	MathUtilities.fn = MathUtilities.prototype = {
		constructor: MathUtilities,
		init: function() {
			return this;
		},
		// The current version of MathUtilities.
		VERSION: "0.1",

		/**
		* Takes a radian value and returns its equivalent in degrees.
		* @method radiansToDegrees
		* @param (Number) r Radian value to convert.
		* @return (Number) Degree equivalent of the radian value.
		*/
		radiansToDegrees: function(r) {
			return (r * 180) / Math.PI;
		},

		/**
		* Takes a degree value and returns its equivalent in radians.
		* @method degreesToRadians
		* @param (Number) d Degree value to convert.
		* @return (Number) Radian equivalent to the degree value.
		*/
		degreesToRadians: function(d) {
			return (d * Math.PI) / 180;
		},

		/**
		* Returns the sine of an angle passed in as a degree
		* @method sinD
		* @param (Number) a Angle, in degrees.
		* @return (Number) Sine of angle (between 1 and -1).
		*/
		sinD: function(a) {
			return Math.sin(a * (Math.PI / 180));
		},

		/**
		* Returns the cosine of an angle passed in as a degree
		* @method cosD
		* @param (Number) a Angle, in degrees.
		* @return (Number) Cosine of angle (between 1 and -1).
		*/
		cosD: function(a) {
			return Math.cos(a * (Math.PI / 180));
		},
		tanD: function(a) {
			return Math.tan(a * (Math.PI / 180));
		},
		atan2D: function(y,x) {
			return Math.atan2(y, x) * (180 / Math.PI);
		},
		angleOfLine: function(x1, y1, x2, y2) {
			return this.atan2D(y2 - y1, x2 - x1);
		},
		asinD: function(r) {
			return Math.asin(r) * (180 / Math.PI);	
		},
		acosD: function(r) {
			return Math.acos(r) * (180 / Math.PI);
		},
		fixAngle: function(a) {
			a %= 360;

			return (a < 0) ? a + 360 : a;
		},
		cartisianToPolar: function(p) {
			var r = Math.sqrt(p.x * p.x + p.y * p.y),
				t = this.atan2D(p.y, p.x);

			return {r:r, t:t};
		},
		polarToCartisian: function(p) {
			var x = p.r * this.cosD(p.t),
				y = p.r * this.sinD(p.t);

			return {x:x, y:y};
		},
		mean: function(a) {
			var m = 0, len = a.length, i;

			for (i = a.length; --i > -1;) {
				m = a[i] + m;
			}

			return m / len;
		},
		median: function(a) {
			var len = a.length;

			a.sort();
			if (len === 0) return 0;

			if (len === 1) return a[0];

			if (len%2 === 1) {
				return a[Math.floor(len * .5)];
			} else {
				return this.mean([a[(len * .5) - 1], a[len * .5]]);
			}
		},
		range: function(a) {
			a.sort();
			return a[a.length - 1] - a[0];
		}
	}

	// Expose class
	window.MathUtilities = MathUtilities.fn;
}(window));