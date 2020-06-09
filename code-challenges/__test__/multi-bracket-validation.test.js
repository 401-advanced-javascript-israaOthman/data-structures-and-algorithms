'use strict';

const multiBracketValidation = require('../../multiBracketValidation/multi-bracket-validation');

describe('multiBracketValidation function ', ()=>{
  it('it should return true if the brackets in the string are balanced',()=>{
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });

  it('it should return false if the brackets in the string are not balanced',()=>{
    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();
    expect(multiBracketValidation('{')).toBeFalsy();
    expect(multiBracketValidation(')')).toBeFalsy();
    expect(multiBracketValidation('[}')).toBeFalsy();
  });

  it('it should return error message if the input is not string ' , ()=>{
    expect(multiBracketValidation(5)).toEqual(' the input shoub be string only');

  });
});