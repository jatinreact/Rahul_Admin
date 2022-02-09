import React from 'react'
import HOC from '../../Common/HOC'
import { Grid, Card } from "@material-ui/core";
import "./Home.css"

const Home = (props) => {
 
 
    return (
        <>
        <section>
        <div className="home_padding mb-4">
        
       
       

        <div className="category_sect">
          <div className="container">
            <div className="heading_contact">
              <h3 className="text-center pt-4 mb-5">Contact Us</h3>
              <div className="text-center pl-5 pr-5 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                mauris arcu, lobortis id interdum vitae, interdum eget elit.
                Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit
                ultrices maximus.
              </div>
            </div>
          </div>
        </div>

        <div>
          <Grid className="Component_main_grid">
            <Grid item md={6}>
           
              <Card className="Card_shadow m-5">

                <div className="p-3">
                <h4 className='text-center mt-2 mb-4'>Customer Login</h4>
                <div className='ml-3'><label for="exampleInputEmail1">Email</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">Password</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className='login_forgont d-flex p-1' style={{justifyContent:"space-between"}}>
                  <div className='pl-2' >Need an account? <span className='account_signup'>Sign up</span></div>
               <div>
                 <p className='pr-2 account_signup'>Forgot password?</p>
                 </div>
                 
                 </div>
               
                </div>
                <div className="pricing_btn text-right mb-3 mr-4">
                  <button type="button" class="pricing_button" onClick={()=> props.history.push("/customerSignup")}>
                    Log In
                  </button>
                </div>
              </Card>
            </Grid>

            <Grid item md={6}>
          
                  <Card className="Card_shadow m-5">

<div className="p-3">
<h4 className='text-center mt-2 mb-4'>Wholesaler Login</h4>
<div className='ml-3'><label for="exampleInputEmail1">Email</label></div>
  <div className="col-md-12 pb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Enter Email"
    />
  </div>
  <div className='ml-3'><label for="exampleInputEmail1">Password</label></div>
  <div className="col-md-12 pb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Password"
    />
  </div>
  <div className='login_forgont d-flex p-1' style={{justifyContent:"space-between"}}>
  <div className='pl-2' >Need an account? <span className='account_signup'>Sign up</span></div>
<div>
 <p className='pr-2 account_signup'>Forgot password?</p>
 </div>
 
 </div>

</div>
<div className="pricing_btn text-right mb-3 mr-4">
  <button type="button" class="pricing_button">
    Log In
  </button>
</div>
</Card>
            </Grid>
          </Grid>
      
        </div>
        </div>
      </section>
        </>
    )
}

export default HOC(Home)
