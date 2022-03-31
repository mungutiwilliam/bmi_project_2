
const {calculate} = require('./public/calculate');

test.each([[1.5, 80,'Obese'], [1.9, 80,'Healthy Weight'], [1.9, 30,'Underweight'],[1.9, 100,'Overweight']])(
    '%i height %i weight equals %i bmi_ans', (height,weight, expected)=>{
        expect(calculate(height,weight)).toBe(expected);
    }
)
