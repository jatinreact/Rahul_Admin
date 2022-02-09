import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/HOC'
import "../../Home/Home.css"
import youtube from "../../../Images/youtube-logo.jpg"
import Sidebar from '../../../Sidebar/Sidebar'

const AdminUserPage = (props) => {
    const [mobilesidebar, setmobilesidebar] = useState(false);

    const sidebaropen = () => {

        setmobilesidebar(!mobilesidebar)
    }

    // const tdata = posts.map(post => {
    //     return [
    //         post.title, post.time, post.content
    //     ]
    // })

    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='Customer_list'>
                            <h3 className='mb-3'>Admin User Page</h3>
                            <Card className="home_table_card_color_ta p-3">
                                <div>
                                </div>

                                <Grid className='Component_main_grid'>
                                    <Grid item md={1} xs={12} sm={12}>
                                        <div className='pl-2 mt-3' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12} sm={12}>
                                        <div className='pl-3' style={{ color: "#FFF" }}>
                                            <h3 className='mt-2'>Admin User Page</h3>
                                        </div>
                                    </Grid>

                                </Grid>

                                <div className='p-3 '>
                                    <Grid className='Component_main_grid'>
                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={6} xs={12} sm={12}>
                                            <div class="form-group ">
                                                <label >*Name</label>
                                                <input type="text" class="form-control" placeholder="Enter Name" />

                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid className='Component_main_grid'>
                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={6} xs={12} sm={12}>
                                            <div class="form-group ">
                                                <label >Email address</label>
                                                <input type="text" class="form-control" placeholder="Enter email" />

                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid className='Component_main_grid'>
                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={6} xs={12} sm={12}>
                                            <div class="form-group ">
                                                <label >*Password</label>
                                                <input type="text" class="form-control" placeholder="Enter Password" />

                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className='p-3'>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={12} xs={12}>
                                                <div className='mb-2 pl-5' >
                                                    <div className=' pl-1'><span className='' >
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                    </span>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>

                                </div>






                                <Sidebar open={mobilesidebar} close={sidebaropen} />




                            </Card>
                            {/* <Table head={['name', 'phoneno', 'address']} data={tdata} /> */}
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(AdminUserPage)
