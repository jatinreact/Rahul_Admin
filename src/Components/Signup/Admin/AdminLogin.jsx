import React from 'react'
import HOC from '../../../Common/HOC'
import { Grid, Card } from "@material-ui/core"
import axios from "axios";
import Loder from "../../Loder/Loder"
import { getBaseUrl } from "../../utils";
import { useState } from 'react';
import ReactNotifications from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const AdminLogin = (props) => {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [isloading,setisloading] = useState("");

  const LoginUser = () => {

  try {

  
      let url = getBaseUrl() + "api/adminlogin";
      setisloading(true);
  
      let temp = {
        username:username,
        password:password,
      };
      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("data response:::", res);
            setisloading(false);
            localStorage.setItem("isAuth", true);
            props.history.push("/admin-revenue-list")
            // NotificationManager.success(res.data.msg, 'Title here');
            ReactNotifications(res.data.msg, "success");
            
          },
  
          (error) => {
            setisloading(false);
            console.log("data response error:::", error);
          }
        )
        .catch((e) => {
          setisloading(false);
          console.log("data response error:::", e);
        });
   

    
  } catch (error) {
    
  }
};

  return (
    <>
      <section>
        <div className="home_padding mb-4">
          <div className='sign_up_customer d-flex pt-3'>
            <Grid className="Component_main_grid" style={{ justifyContent: "center" }}>
              <Grid item md={6} xs={12}>

                <Card className="Card_shadow  m-5">

                  <div className="card_color_customer_admin p-3">
                    <h4 className='text-center mt-2 mb-4' style={{ color: "#fff", fontSize: "30px" }}>Admin Log-In</h4>
                    <div className='pl-4 pr-4'>
                      <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div>
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          value={username}
                          onChange={(e)=> {
                            setusername(e.target.value)
                          }}
                        />
                      </div>
                    </div>
                    <div className='pl-4 pr-4'>
                      <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div>
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e)=> {
                            setpassword(e.target.value)
                          }}
                        />
                      </div>
                    </div>

                    <div className='pl-4 pr-4'>
                      <div className="btn_forgot  p-3" style={{ justifyContent: "space-between" }}>
                        <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                          <span className='new_customer text-center' onClick={() => props.history.push("/forgot-userName")}>Forgot UN</span>

                        </div>
                        <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                          <span className='new_customer text-center' onClick={() => props.history.push("/forgot-password")}>Forgot PW</span>

                        </div>
                      </div></div>
                    <div className='pl-4 pr-4'>
                      {/* <div className="customer_vender mt-3 mb-3 text-center pt-2 pb-2 " >
                  <span className='new_customer text-center pl-2 pr-2'>New Wholeselers Sign-Up</span>
                
                </div> */}
                    </div>
                    <div className='mt-5 text-right'>
                      <button type="button" class="btn btn-success" onClick={LoginUser}>Next<i class="fa fa-arrow-right pl-2"></i></button>
                    </div>
                  </div>




                </Card>
              </Grid>


            </Grid>

          </div>
        </div>
      </section>
     
      <Loder loading={isloading} />
    </>
  )
}

export default HOC(AdminLogin)
