// * test: if the calucator is ran three times in a row does it give the correct answer in all three scenarios? (it looks like it breaks sometimes)

import React from 'react';
import renderer from 'react-test-renderer';
import AutoCalculator from './autoCalculator.js';

test('If the calculator is ran three times in a row with different values does it give the correct in each scenario?', () => {
    // first just trying to run it once
    const userEntry = {
        loanType: "New",
        term: "60",
        scoreRange: "APlus",
        loanAmount: "25000",
    }
    expect(AutoCalculator(userEntry).toEqual(461.43))
    
})

