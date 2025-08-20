import React, { useState } from 'react'
import { toast } from 'react-toastify';

function BMICalculator() {
  const[height,setHeight]=useState();
  const[weight,setWeight]=useState();
  const[gender,setGender]=useState();
  const[BMI,setBMI]=useState();

  function calculateBMI(e) {
    e.preventDefault();
    if(!height || !weight||!gender )
    {
      toast.error("Please enter all required fields")
      return;
    }
    const heightInMetres=height/100;
    const bmiValue=weight/(heightInMetres*heightInMetres)
    setBMI(bmiValue);

  if(BMI<18.5)
  {
    toast.warning("You are ubder weight")
  }
  else if(BMI>=18.5 && BMI<24.5){
    toast.success("You are perfect, keep enjoying healthy life style")
  }
  else{
    toast.warning("You are overweight")
  }
  }
  return (
    <section className='bmi'>
      <h1>BMI Calculator</h1>
      <div className="container-bmi">
        <div className="wrapper">
          
          <form action={calculateBMI}>
            <div>
              <label htmlFor="">Enter Height (cm)</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Enter Weught</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Select Gender</label>
              <select name="" id="">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="bmi.jpg" alt="" srcset="" />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator