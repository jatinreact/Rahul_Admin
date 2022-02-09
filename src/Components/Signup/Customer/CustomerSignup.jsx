import React from 'react'
import HOC from '../../../Common/HOC'
import {Grid,Card} from "@material-ui/core"
import "./Customer.css"

const CustomerSignup = (props) => {
    return (
        <>
                    <section>
        <div className="home_padding mb-4">
        
       
       


        <div className='sign_up_customer d-flex'>
          <Grid className="Component_main_grid" style={{justifyContent:"center"}}>
            <Grid item md={6}>
           
              <Card className="Card_shadow m-5">

                <div className="card_color_customer p-3">
                <h4 className='text-center mt-2 mb-4' style={{color:"#fff" , fontSize:"30px"}}>Customer SignUp</h4>
                <div className='ml-3'><label for="exampleInputEmail1">* Business name</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">* Address</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Business name"
                    />
                  </div>
                  <Grid className="Component_main_grid" >
            <Grid item md={4}>
            <div className="col-md-12 pb-3">
            <input
                      type="text"
                      class="form-control"
                      placeholder="City"
                    />
                    </div>
                </Grid>
                <Grid item md={4}>
                <div className="col-md-12 pb-3">
                <input
                      type="text"
                      class="form-control"
                      placeholder="State"
                    />
                    </div>
                </Grid>
                <Grid item md={4}>
                <div className="col-md-12 pb-3">
                <input
                      type="text"
                      class="form-control"
                      placeholder="zip"
                    />
                    </div>
                </Grid>
                </Grid>
                <div className='ml-3'><label for="exampleInputEmail1">* Phone No</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Number"
                    />
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">* Email</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">* EIN</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="XXX-XXXXX"
                    />
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>


                  {/* <div className='login_forgont d-flex p-1' style={{justifyContent:"space-between"}}>
                  <div className='pl-2' >Need an account? <span className='account_signup'>Sign up</span></div>
               <div>
                 <p className='pr-2 account_signup'>Forgot password?</p>
                 </div>
                 
                 </div> */}
                <div className="pricing_btn text-right mb-3 mr-4">
                  <button type="button" class="btn btn-success" onClick={()=> props.history.push("/custonerLogin")}>
                    Log In
                  </button>
                </div>
                </div>
               
              </Card>
            </Grid>

                {/* <Grid item md={6}>
            
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
                </Grid> */}
          </Grid>
      
        </div>
        </div>
      </section>
        </>
    )
}

export default HOC(CustomerSignup)
