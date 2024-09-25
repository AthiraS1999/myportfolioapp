import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../components/Test.css'


const Testmonial = () => {
  return (
    <div className='test'>
      <div className='test-title'>
        <h1>Testmonials</h1>
                <div class="card mb-3" style={{maxWidth:"250px"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
  </div>
</div>
      </div>

    </div>
  )
}

export default Testmonial