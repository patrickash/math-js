import MathUtilities from '../src/MathUtilities.js';

const arr = [12,2342,123,52,235,63,122];

document.querySelector('.example').innerHTML = `
  <p>MathUtilities.tanD: ${MathUtilities.tanD(23)}</p>
  <p>MathUtilities.mean: ${MathUtilities.mean(arr)}</p>`;
