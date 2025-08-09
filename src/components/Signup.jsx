import React, { useEffect } from 'react'

export default function Signup() {
  useEffect(() => {
      // Instantly jumps to top without showing scroll
      window.scrollTo({
      top: 0,
      behavior: 'instant'  // Note: 'instant' is not officially supported, so omit 'behavior'
      });
    }, []);
  return (
    <div className='d-flex' style={{backgroundColor:"rgb(5, 83, 109)",minHeight:'90vh',justifyContent:'center',alignItems:'center'}}>
      <div class="container py-5" style={{width:'50vw',height:'fit-content',background:'whitesmoke',borderRadius:'10px',boxShadow:'0px 0px 10px 1px rgb(255,255,255,0.5)'}}>
        <h1 class="text-center my-2 text-dark fw-bolder">Sign Up</h1>
    <form class="my-3">
  <div class="form-group text-dark my-2">
    <label for="contactName">Your Name</label>
    <input type="text" class="form-control" id="contactName" name="name" maxlength="100" placeholder="Enter Your Name"/>
  </div>
  <div class="form-group text-dark my-2">
    <label for="contactEmail">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" maxlength="100" placeholder="name@example.com"/>
  </div>
   <div class="form-group text-dark my-2">
    <label for="contactPhone">Phone Number</label>
    <input type="phone" class="form-control" id="contactPhone" name="phone" maxlength="10" placeholder="Enter Your Phone Number"/>
  </div>
  <div class="form-group text-dark my-2">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="=password" name="password" maxlength="10" />
  </div>
  <div class="form-group text-dark my-2">
    <label for="password2">Confirm Password</label>
    <input type="password" class="form-control" id="password2" name="password2" maxlength="10"/>
  </div>
  <button type="submit" class="btn btn-info px-5 my-1 fw-semibold text-white">Signup</button>
</form>
    </div>
    </div>
  )
}
