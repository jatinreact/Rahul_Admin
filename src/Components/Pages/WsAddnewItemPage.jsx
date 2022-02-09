import React from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/HOC'
import "../Home/Home.css"
import BarcodeReader from 'react-barcode-reader'
import bar from "../../Images/barcode.jpg"

const WsAddnewItemPage = (props) => {
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_colorrr p-3">
                                <div className='wdwq'>

                                </div>
                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={6} xs={12}>
                                            <div className=''>
                                                <h4>WS Vendors/Add New Item</h4>
                                            </div>

                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={4} xs={12}>
                                                    <img style={{ height: "50px", width: "70px" }} src={bar} alt='barcode' />
                                                </Grid>
                                                <Grid item md={8} xs={12}>
                                                    <div className='d-flex'>
                                                        <div className="profile_input text-center  " >
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                name="image-upload"
                                                                id="input"

                                                            />
                                                            <div className="">
                                                                <label className="resumeview_image_upload" htmlFor="input">
                                                                    <i class="fa fa-camera mr-1"></i>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div className='mt-4'>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Upload Photo</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    {/* <div className='photo_table'><span className='table_span_home'>PHOTO</span></div> */}
                                                    <div><input type="text" disabled class="form-control" aria-describedby="emailHelp" placeholder="Photo" /></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Item#</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control hh" aria-describedby="emailHelp" placeholder="Item" /></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Brand</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Brand" /></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Category</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Category" /></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Discription</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Discription" /></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Price</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control mr-2" aria-describedby="emailHelp" placeholder="$Price" /></div>
                                                </Grid>
                                                <Grid item md={2} xs={12}>
                                                    <div className='ml-2'><input type="text" class="form-control ml-2" aria-describedby="emailHelp" placeholder="Qut." /></div>
                                                </Grid>
                                                <Grid item md={2} xs={12}>
                                                    <div className='ml-2'><input type="text" class="form-control ml-2   " aria-describedby="emailHelp" placeholder="Msrmt" /></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Distributer</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><select class="form-control hh">
                                                        <option>select</option>
                                                        <option>Dist. A</option>
                                                        <option>Dist. B</option>
                                                        <option>Dist. C</option>
                                                    </select></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Active</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><select class="form-control hh">
                                                        <option>select</option>
                                                        <option>Active</option>
                                                        <option>Discontinue</option>
                                                        <option>Coming on</option>
                                                    </select></div>
                                                </Grid>
                                            </Grid>
                                        </div>

                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Discount</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Discount%" /></div>
                                                </Grid>
                                            </Grid>
                                        </div>

                                    </div>




                                </section>
                                <div className='float-right' >
                                <button type="button" class="saveandaddnewitem mr-2" onClick={()=> props.history.push("#")}><span className='border_bottom mr-2'>Save & Add New Item</span></button>
                                <button type="button" class="saveandaddnewitem" onClick={()=> props.history.push("/venderItemList")}><span className='border_bottom'>Save</span></button>
                                </div>



                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(WsAddnewItemPage)
