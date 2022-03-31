function calculate(height,weight){
    const h = height 
    const w = weight
    const h_squared = h*h 
    const bmi_ans =  w/h_squared 
    if (bmi_ans < 18.5){
        return alert(`Your height is ${height}m and weight is ${weight}kgs bmi =${bmi_ans}, Summary = Underweight`)  
    } 
    else if(bmi_ans < 24.9){
        
        
        return alert(`Your height is ${height}m and weight is ${weight}kgs bmi =${bmi_ans}, Summary = Healthy weight`)    
    }
    else if(bmi_ans < 29.9){
        
        return alert(`Your height is ${height}m and weight is ${weight}kgs bmi =${bmi_ans}, Summary = Overweight`)
        
    }else {
        
        return alert(`Your height is ${height}m and weight is ${weight}kgs bmi =${bmi_ans}, Summary = Obese`)   
    }     
}
module.exports = {calculate};