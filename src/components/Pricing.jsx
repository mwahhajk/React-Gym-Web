import { Check } from 'lucide-react'
import React from 'react'

function Pricing() {

  const pricing=[
    {
      imageUrl:"/pricing.jpg",
      title:"Quarterly",
      price:"12000",
      length:"3"
    },
       {
      imageUrl:"/pricing.jpg",
      title:"Half Year",
      price:"20000",
      length:"6"
    },
       {
      imageUrl:"/pricing.jpg",
      title:"Yearly",
      price:"32000",
      length:"12"
    }
  ]
  return (
    <section className='pricing'>
       <h1>Elite Fitness Pricing</h1>
      <div className="wrapper">
       {
        pricing.map(elem=>(
          <div key={elem.title} className='card'>
            <img src={elem.imageUrl} alt="" srcset="" />
            <div className='title'>
            <h1>{elem.title}</h1>
            <h1>Package</h1>
            <h3>Rs {elem.price}</h3>
            <p>For {elem.length} months</p>

            </div>
            <div className="description">
              <p>
                <Check/>Well Equipped
              </p>
                 <p>
                <Check/>All Day Trainer
              </p>
                 <p>
                <Check/>Rest Rooms For Members
              </p>
                 <p>
                <Check/>Seperate Timings For Girls
              </p>
                 <p>
                <Check/>20 Days Freezing Option
              </p>
            </div>
          </div>
          
        ))
       }

      </div>
    </section>
  )
}

export default Pricing