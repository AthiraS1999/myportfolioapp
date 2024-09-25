import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../components/Test.css'
import testimage from'../../src/components/Reshma.jpg'
import karu from'../../src/components/karu.jpg.png'
import sree from'../../src/components/sreejit.jpg'


const Testmonial = () => {
  return (
    <div className='test'>
      <div className='text-title'>
        <h1>Testmonials</h1>
      </div>
        <div className='container'>
          <div className='row'>
          <div class="card1 mb-3" style={{maxWidth:"450px"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={testimage} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body1">
                {/* <h5 class="card-title1">Card title</h5> */}
                <p class="card-text1">"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."</p>
                <p class="card-text2">-Reshma </p>
              </div>
            </div>
        </div>
      </div>
      <div class="card1 mb-3" style={{maxWidth:"450px"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={karu} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body1">
                {/* <h5 class="card-title1">Card title</h5> */}
                <p class="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text2">Last updated 3 mins ago</p>
              </div>
            </div>
        </div>
      </div>
      <div class="card1 mb-3" style={{maxWidth:"450px"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={sree} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body1">
                <h5 class="card-title1">Card title</h5>
                <p class="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text2"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
        </div>
      </div>
      <div class="card1 mb-3" style={{maxWidth:"450px"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body1">
                <h5 class="card-title1">Card title</h5>
                <p class="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text2">Last updated 3 mins ago</p>
              </div>
            </div>
        </div>
      </div>
          </div>
        </div>

    </div>
  )
}

export default Testmonial