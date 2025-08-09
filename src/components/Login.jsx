import React, { useEffect } from 'react'

export default function Login() {
  useEffect(() => {
      // Instantly jumps to top without showing scroll
      window.scrollTo({
      top: 0,
      behavior: 'instant'  // Note: 'instant' is not officially supported, so omit 'behavior'
      });
    }, []);
  return (
      <div className='d-flex' style={{backgroundColor:"rgb(5, 83, 109)",minHeight:'90vh',justifyContent:'center',alignItems:'center'}}>
      <div class="container"style={{width:'50vw',height:'50vh', paddingTop:'50px', background:'whitesmoke', borderRadius:'10px',boxShadow:'0px 0px 10px 1px rgb(255,255,255,0.5)'}}>
        <h1 class="text-center my-2 text-dark fw-bolder">Login</h1>
    <form class="my-3">
  <div class="form-group text-dark my-2">
    <label for="loginEmail">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" maxlength="100"/>
  </div>
  <div class="form-group text-dark my-2">
    <label for="loginpassword">Password</label>
    <input type="password" class="form-control" id="=password" name="password" maxlength="10" />
  </div>
  <button type="submit" class="btn btn-info px-5 my-1 fw-semibold text-white">Login</button>
</form>
    </div>
    </div>
  )
}
