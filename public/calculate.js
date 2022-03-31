function calculate(height,weight){
    const h = height 
    const w = weight
    const h_squared = h*h 
    const bmi_ans =  w/h_squared 
    if (bmi_ans < 18.5){
        return alert('Underweight')  
    } 
    else if(bmi_ans < 24.9){
        
        
        return alert('Healthy Weight')    
    }
    else if(bmi_ans < 29.9){
        
        return alert('Overweight')
        
    }else {
        
        return alert('Obese')   
    }     
}
module.exports = {calculate};