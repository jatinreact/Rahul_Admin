import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/HOC'
import "../Home/Home.css"

import VendorSidebar from "../../Sidebar/VenderSidebar"

const VenderDistributerList = (props) => {
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
                            <h3 className='mb-3'>WS Vendor's Distributer List</h3>
                            <Card className="home_table_final_inv p-3">
                                <div>
                                </div>

                                <Grid className='Component_main_grid mb-3'>
                                    <Grid item md={2} xs={12} sm={12}>
                                        <div className='pl-2 mt-3' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} xs={12} sm={12}>
                                        <div className='pl-3' style={{ color: "#FFF" }}>
                                            <h3 className='mt-2'>WS Vendor's Distributer List</h3>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_dist_vend'><span className='table_span_home border_bottom' onClick={()=> props.history.push("/VenderDistributerList")} style={{cursor:"pointer"}}>Add New Distributer</span></div></div></Grid>

                                </Grid>
                                <Grid className='Component_main_grid'>

                                    <Grid item md={10} xs={12} sm={12}>

                                    </Grid>
                                </Grid>

                                <div className=''>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer A</span></div></div></Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area</span></div></div></Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>
                                <div className=''>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer A</span></div></div></Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area</span></div></div></Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>
                                <div className=''>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer A</span></div></div></Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area</span></div></div></Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>
                                <div className=''>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer A</span></div></div></Grid>
                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area</span></div></div></Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>





                                <VendorSidebar open={mobilesidebar} close={sidebaropen} />




                            </Card>
                            {/* <Table head={['name', 'phoneno', 'address']} data={tdata} /> */}
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(VenderDistributerList)
