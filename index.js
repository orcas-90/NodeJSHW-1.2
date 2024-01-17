const isoscelesTriangle = require('./node_modules/type-triangle/isoscelesTriangle');
const Istriangle = require('./node_modules/type-triangle/Istriangle');
const equilateralTriangle = require('./node_modules/type-triangle/equilateralTriangle.js');
const rightTriangle = require('./node_modules/type-triangle/rightTriangle');

require('dotenv').config();

  let sideOne = process.env.SIDEONE;
  let sideTwo = process.env.SIDETWO;
  let sideThree = process.env.SIDETHREE;
  console.log('isoscelesTriangle: ' + isoscelesTriangle(sideOne, sideTwo, sideThree));
  console.log('Istriangle: ' + Istriangle(sideOne, sideTwo, sideThree));
  console.log('equilateralTriangle: ' + equilateralTriangle(sideOne, sideTwo, sideThree));
  console.log('rightTriangle: ' + rightTriangle(sideOne, sideTwo, sideThree));