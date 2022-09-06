import React from 'react';
import ReactDOM from "react-dom";
import my_pic from './img/my_pic.jpg';
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import './style.css'


function Hi() {
  return (
    <>

      <div className='main_all'>

        <div className='main2'>
          <div className='imgdiv'>
            <img className='img-div' src={my_pic} />
          </div>


          <br></br>
          <br></br>
          <div className='left_side'>
            <h2 className='haeding'>CONTACT</h2>
            <br></br>
            <br></br>
            <br></br>

            <div>

              <p>< MdLocationOn />House No#41 street NO 1 <br></br>
                Korangi 1 Karachi Pakistan </p>
              <br></br>
              <div> <p><BsFillTelephoneFill />+923142345678</p></div>
              <br></br>
              <div> <p><MdEmail />irfansultan201@gmail.com</p></div>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <div className='left_side'>
            <h2 className='haeding'>EDUCATION</h2>
            <br></br>
            <br></br>
            <br></br>

            <div>
              <p>Matric In Computer Science<br></br>
                Jan 2004 - Dec 2016  <br></br> Al Basit  School Korangi No 1 </p>
              <br></br>
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
            <h2 className='haeding'>PEFRENCES</h2>
            <br></br>
            <br></br>
            <br></br>

            <div>
              <p>MR MOHSIN GHANI<br></br>
                Ceo And Founder Of Inciter Tach </p>
              <br></br>
            </div>

            <div>
              <p>Email:somename@mail.com<br></br>
                Mobile:  +923147878654 </p>
              <br></br>
            </div>
          </div>

        </div>


        <div className='main-right'>

          <div className='right2'>

            <div className='haeding2'>
              <h1 className=''>MUHAMMAD IRFAN</h1>
              <div className='line'></div>
              <h2>CREATIVE DIRECTOR</h2>
            </div>
          </div>

          <br></br><br></br>
          <br></br>
          <div className='profile'>

            <h2 className='haeding3'>PROFILE</h2>
            <br></br>
            <br></br>
            <p>
              Is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has  been the industry's
              standard dummy text ever since the 1500s,  <br></br>when an unknown printer took a galley of type and scrambled
              is simply dummy text of the printing   and is simply dummy text of the printing <br></br>and
              is simply dummy text of the printing and
              is simply dummy text of the  printing and is simply dummy text of the printing andtypesetting <br></br>  Lorem Ipsum has been the industry's
              standard dummy text ever since
            </p>
          </div>

          <div className='profile'>
            <br></br> <br></br>
            <h2 className='haeding3'>WORK EXPREIENCE</h2>
            <br></br><br></br>

            <div className='main-det'>
              <div>
                <strong>Senior Manager</strong>
                <br></br>
                <p className='color'>LEO Company.Karachi Pakistan</p>
              </div>
              <div>
                <p className='color'>JAN 2016.DEC 2019 </p>
              </div>
            </div>


            <div>

              <br></br>
              <p>
                Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  <br></br>text ever since the 1500s, when an unknown printer took a galley of type and scrambled when an unknown printer took a galley.
              </p>
            </div>


            <br></br> <br></br>

            <div className='main-det'>
              <div>
                <strong>Senior Manager</strong>
                <br></br>
                <p className='color'>LEO Company.Karachi Pakistan</p>
              </div>
              <div>
                <p className='color'>JAN 2016.DEC 2019 </p>
              </div>
            </div>


            <div>

              <br></br>
              <p>
                Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  <br></br>text ever since the 1500s, when an unknown printer took a galley of type and scrambled when an unknown printer took a galley.
              </p>
            </div>


            <br></br><br></br>

            <div className='main-det'>
              <div>
                <strong>Senior Manager</strong>
                <br></br>
                <p className='color'>LEO Company.Karachi Pakistan</p>
              </div>
              <div>
                <p className='color'>JAN 2016.DEC 2019 </p>
              </div>
            </div>


            <div>

              <br></br>
              <p>
                Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  <br></br>text ever since the 1500s, when an unknown printer took a galley of type and scrambled when an unknown printer took a galley.
              </p>
            </div>


          </div>
          <div className='profile'>

            <div>
              <br></br> <br></br>
              <h2 className='haeding3'>SKILLS</h2>
              <br></br><br></br>
            </div>




            <div className='main-det'>
              <div>
                <p>Strategic Fomrntation</p>
                <br></br>
                <p>Attention To Detail</p>
              </div>
              <div className='lastdiv'>
                <p> Executive Presentation </p>
                <br></br>
                <p>Collaboration</p>
              </div>
            </div>




          </div>














        </div>



      </div>



      {/* <div className='main_detail'>
          <div><b>Marital Status</b></div>
          <div> <p>Single</p></div>
        </div> */}

      {/* <div className='main_detail'>
          <div><b>Date Of Birth</b></div>
          <div> <p>9.June.1999</p></div>
        </div> */}

      {/* <div className='main_detail'>
          <div><b>Nationality</b></div>
          <div> <p>Pakistan</p></div>
        </div>

       
       
        <br></br>
        <br></br>
        <div className='haeding'><h1>Education Background</h1></div>
        <br></br> <br></br>

        <div className='main_detail'>
          <div> <b>Matric</b></div>
          <div> <p className='paragrap'></p></div>

        </div>
        <div className='main_detail'>
          <div> <b>Enter</b></div>
          <div> <p>2018 NCR-CET College</p></div>
        </div>
        <br></br>
        <br></br>

        <div className='haeding'><h1>Experience</h1></div>
        <br></br> <br></br>
        <div>
          <div> <p>1 Year Ladies Suit It Khaadi Company</p></div>
          <p>1 Year Tacno Mobile Company</p>
        </div>
        <br></br>
        <br></br>

        <div className='haeding'><h1>Skills</h1></div>
        <br></br> <br></br>
        <div>

          <div> <p>Mobile Quality Assurance</p></div>

          <p>Stitching Ladies Suit</p>

          <div> <p>HTML</p></div>

          <div> <p>CSS</p></div>

          <div> <p>BootStrap</p></div>

          <div> <p>JavaScript</p></div>

          <div> <p>Node JS</p></div>


          <br></br><br></br>
          <div className='haeding'><h1>INTERESTS</h1></div>
          <br></br><br></br><br></br>
          <div> <p>Cricket</p></div>
          <div> <p>Music</p></div>
          <div> <p>Movies</p></div>
          <div> <p>Development</p></div>
          <br></br>


        </div> */}











    </>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));



