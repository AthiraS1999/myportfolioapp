import React from 'react'
import '../components/Serv.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
const Services = () => {
  return (
    
    <div className='serv'>
      <div className='serv-title'>
        <h1>My Services</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
          <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
          <h5 class="card-title">Web design</h5>
              <p class="card-text">Web development is the process of building,programing....</p>
               <a href="#" class="btn btn-primary">Read more</a>
        </div>
                   </div>
                       </div>
          <div className='col-sm-4'>
          <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
             <h5 class="card-title">App design</h5>
              <p class="card-text">Web development is the process of building,programing.....</p>
              <a href="#" class="btn btn-primary">Read more</a>
         </div>
           </div>
          </div>
          <div className='col-sm-4'>
          <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
             <h5 class="card-title">Social media</h5>
              <p class="card-text">Web development is the process of building,programing......</p>
              <a href="#" class="btn btn-primary">Read more</a>
         </div>
           </div>
          </div>

          
        </div>
      </div>

     
      
         
    </div>
 
  )
}

export default Services