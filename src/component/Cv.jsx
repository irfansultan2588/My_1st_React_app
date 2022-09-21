import React from 'react'
import Hading from './Hading';
import Posting from './Posting';
import CommonImage from './CommonImg';
import image from '../img/my_pic.jpg'

const Cv = () => {
    return (




        <div className='main_all'>

            <div className='main2'>

                <div className='imgdiv'>
                    <CommonImage CommonImg={image} />
                </div>

                <br></br>
                <br></br>
                <div className='left_side'>
                    <h2 className='haeding'>
                        <Hading Hading='CONTACT' />

                    </h2>
                    <br></br>
                    <br></br>
                    <br></br>


                    {/* //////< MdLocationOn /> //// <BsFillTelephoneFill /> //////<MdEmail /> */}

                    <div>

                        <Posting Posting='House No#41 street NO 1' />
                        <Posting Posting='Korangi 1 Karachi Pakistan' />
                        <br></br>
                        <div> <p><Posting Posting='03142588174' /></p></div>
                        <br></br>
                        <div> <p><Posting Posting='irfansultan201@gmail.com' /></p></div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div className='left_side'>
                    <h2 className='haeding'>
                        <Hading Hading='EDUCATION' />
                    </h2>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div>

                        <Posting Posting='Matric In Computer Science' />
                        <Posting Posting='Jan 2004 - Dec 2016' />
                        <Posting Posting='Al Basit School Korangi NO 1 ' />
                    </div>

                    <div>
                        <p>Enter In Computer Science<br></br>
                            Jan 2017 - Dec 2019  <br></br>NCR-CET College </p>
                        <br></br>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div className='left_side'>
                    <h2 className='haeding'>

                        <Hading Hading='PEFRENCES' />
                    </h2>


                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <Posting Posting='MR MOHSIN GHANI' />
                        <p><br></br>
                            <Posting Posting='Ceo And Founder Of Inciter Tach' />  </p>
                        <br></br>
                    </div>

                    <div>
                        <p>
                            <Posting Posting='Mobile:  +923147878654' />  </p>
                        <br></br>
                    </div>
                </div>

            </div>


            <div className='main-right'>

                <div className='right2'>

                    <div className='haeding2'>
                        <h2>
                            <Hading Hading='MUHAMMAD IRFAN' />
                        </h2>


                        <div className='line'></div>
                        <h2>CREATIVE DIRECTOR</h2>
                    </div>
                </div>

                <br></br><br></br>
                <br></br>
                <div className='profile'>

                    <h2 className='haeding3'>

                        <Hading Hading='Profile' />
                    </h2>
                    <br></br>
                    <br></br>
                    <p>
                        <Posting Posting=' Is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has  been the industry s
                standard dummy text ever since the  when an unknown printer took a galley of type and scrambled
              is simply dummy text of the printing   and is simply dummy text of the printing and
              is simply dummy text of the printing and
              is simply dummy text of the  printing and is simply dummy text of the printing andtypesetting  Lorem Ipsum has been the industry
                standard dummy text ever since' />

                    </p>
                </div>

                <div className='profile'>
                    <br></br> <br></br>
                    <h2 className='haeding3'>
                        <Hading Hading='WORK EXPREIENCE' />
                    </h2>
                    <br></br><br></br>

                    <div className='main-det'>
                        <div>
                            <strong>CEO Manager</strong>
                            <br></br>
                            <p className='color'> <Posting Posting='LEO Company.Karachi Pakistan' /> </p>
                        </div>
                        <div>
                            <p className='color'> <Posting Posting='JAN 2016.DEC 2020' /> </p>
                        </div>
                    </div>


                    <div>

                        <br></br>

                        <p> <Posting Posting='Lorem is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industrys standard dummy
                 text ever since the 1500s when an unknown printer took a galley of type and scrambled when an unknown printer took a galley' />
                        </p>
                    </div>


                    <br></br> <br></br>

                    <div className='main-det'>
                        <div>
                            <strong>IT Manager</strong>
                            <br></br>
                            <p className='color'><Posting Posting='LEO Company.Karachi Pakistan' /></p>
                        </div>
                        <div>
                            <p className='color'><Posting Posting='JAN 2016.DEC 2018 ' /></p>
                        </div>
                    </div>


                    <div>

                        <br></br>
                        <p>
                            <Posting Posting='Lorem is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industrys standard dummy
                 text ever since the 1500s when an unknown printer took a galley of type and scrambled when an unknown printer took a galley' />

                        </p>
                    </div>


                    <br></br><br></br>

                    <div className='main-det'>
                        <div>
                            <strong>HR Manager</strong>
                            <br></br>
                            <p className='color'><Posting Posting='LEO Company.Karachi Pakistan' /></p>
                        </div>
                        <div>
                            <p className='color'><Posting Posting='JAN 2016.DEC 2014 ' /></p>
                        </div>
                    </div>


                    <div>

                        <br></br>
                        <p>
                            <Posting Posting='Lorem is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industrys standard dummy
                 text ever since the 1500s when an unknown printer took a galley of type and scrambled when an unknown printer took a galley' />              </p>
                    </div>


                </div>
                <div className='profile'>

                    <div>
                        <br></br> <br></br>
                        <h2 className='haeding3'>
                            <Hading Hading='SKILLS' />
                        </h2>

                        <br></br><br></br>
                    </div>




                    <div className='main-det'>
                        <div>

                            <p><Posting Posting='Strategic Fomrntation' /></p>
                            <br></br>
                            <p><Posting Posting='Attention To Detail' /></p>
                        </div>
                        <div className='lastdiv'>
                            <p> <Posting Posting='Executive Presentation' /> </p>
                            <br></br>
                            <p><Posting Posting='Collaboration' /></p>
                        </div>
                    </div>




                </div>



            </div>
            <hr />
        </div>













    )
}

export default Cv