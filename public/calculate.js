function calculate(height,weight){
    const h = height 
    const w = weight
    const h_squared = h*h 
    const bmi_ans =  w/h_squared 
    if (bmi_ans < 18.5){
        return 'Underweight'
        
    } 
    else if(bmi_ans < 24.9){
        
        
        return 'Healthy Weight'    
    }
    else if(bmi_ans < 29.9){
        
        return 'Overweight'
        
    }else {
        
        return 'Obese'
        
    }     
}
module.exports = {calculate};