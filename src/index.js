import React from 'react';
import ReactDOM from "react-dom";
import './style.css'


function Hi() {
  return (
    <>
      <div className='maindiv'>
        <h1 className='golden'> My Cv App</h1>
      </div>
      <div className='main2'>
        <div>
          <h1 className='haeding'>Muhammad Irfan</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className='main_detail'>
          <div><b>Marital Status</b></div>
          <div> <p>Single</p></div>
        </div>

        <div className='main_detail'>
          <div><b>Date Of Birth</b></div>
          <div> <p>9.June.1999</p></div>
        </div>

        <div className='main_detail'>
          <div><b>Nationality</b></div>
          <div> <p>Pakistan</p></div>
        </div>

        <div className='main_detail'>
          <div><b>Contatact Address</b></div>
          <div> <p>Korangi No.1 Karachi</p></div>
        </div>

        <div className='main_detail'>
          <div><b>Mobile No</b></div>
          <div> <p>03142588174</p></div>
        </div>

        <div className='main_detail'>
          <div><b>Email</b></div>
          <div> <p>irfansultan201@gmail.com</p></div>
        </div>
        <br></br>
        <br></br>
        <div className='haeding'><h1>Education Background</h1></div>
        <br></br> <br></br>

        <div className='main_detail'>
          <div> <b>Matric</b></div>
          <div> <p className='paragrap'>2016 Al Basit School </p></div>

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


        </div>

      </div>






    </>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));



