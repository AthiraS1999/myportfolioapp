import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../components/Quali.css'


const Qualification = () => {
  return (
    <div className='quali'>
      <div className='quali-title'>
        <h1>Qualification</h1>
      </div>
      <div className='quali-table'>
      <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Java full stack developer</div>
      Network Systems, Trivandrum
    </div>
    <span class="badge text-bg-primary rounded-pill">2024-</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Printing Technology</div>
      Capt & Technical High School,Sreekaryam
    </div>
    <span class="badge text-bg-primary rounded-pill">2020-2022</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Bsc Computer Science</div>
      Sree Sankara Vidhya Peetom College, Nagaroor
    </div>
    <span class="badge text-bg-primary rounded-pill">2017-2020</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Senior Secondary</div>
      Raja Ravi Varma Higher Secondary School,Kilimanoor
    </div>
    <span class="badge text-bg-primary rounded-pill">2015-2017</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">SSLC</div>
      Raja Ravi Varma Higher Secondary School,Kilimanoor
    </div>
    <span class="badge text-bg-primary rounded-pill">2014-2015</span>
  </li>
</ol>
      </div>
        
    </div>
   

  )
}

export default Qualification