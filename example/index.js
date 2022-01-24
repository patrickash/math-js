import MathUtilities from '../src/math-utilities.js';

const arr = [12,2342,123,52,235,63,122];

document.querySelector('.example').innerHTML = `
  <p><strong>tanD:</strong> ${MathUtilities.tanD(23)}</p>
  <p><strong>mean:</strong> ${MathUtilities.mean(arr)}</p>
  <p><strong>range:</strong> ${MathUtilities.range(arr)}</p>`;
