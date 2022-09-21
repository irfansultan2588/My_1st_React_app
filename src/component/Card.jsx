import React from 'react'
import Todoimg from '../img/SS.png'
import Hading from './Hading'
import Posting from './Posting'
import calcu from '../img/SS2.png'
import weather from '../img/SS3.png'




const Card = () => {





    return (
        <>
            <h1 className='haeding23'> <Hading Hading='Project' /> </h1>
            <div className="main_card">
                <div className="card">
                    <div className="container_head">
                        <h1 className='top_haed'> <Hading Hading='My Todo App' /> </h1>
                    </div>

                    <img className='todo_img' src={Todoimg} alt="todoimg" />
                    <h1 className='descrip'> <Hading Hading='Description' /> </h1>
                    <p className='descriptext'>
                        <Posting Posting='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam officiaqui pariatur hic conProjact' />
                        <Posting Posting='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam officia n qui pariatur hic conProjact' />
                        <Posting Posting='tur adipisicing elit.
                         Numquam officia repellendus in qui pariatur hic con
                        ipisicing elit.  conProjact' />
                    </p>
                    <div className="btn_container">
                        <button className='btn2'><a href="https://github.com/irfansultan2588/ToDo_App_In_React" target="_blank">Github</a></button>
                        <button className='btn2'><a href="https://mytodoapp2588.netlify.app" target="_blank"> Netlify</a></button>
                    </div>
                </div>



                {/* card 2 */}


                <div className="card">
                    <div className="container_head">
                        <h1 className='top_haed'> <Hading Hading='React_Calculator_App' /> </h1>
                    </div>

                    <img className='todo_img' src={calcu} alt="calcuimg" />
                    <h1 className='descrip'> <Hading Hading='Description' /> </h1>
                    <p className='descriptext'>
                        <Posting Posting='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam officiaqui pariatur hic conProjact' />
                        <Posting Posting='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam officia n qui pariatur hic conProjact' />
                        <Posting Posting='tur adipisicing elit.
                         Numquam officia repellendus in qui pariatur hic con
                        ipisicing elit.  conProjact' />
                    </p>
                    <div className="btn_container">
                        <button className='btn2'><a href="https://github.com/irfansultan2588/React_Calculator_App" target="_blank">Github</a></button>
                        <button className='btn2'><a href="https://calculator-react-2588.netlify.app" target="_blank"> Netlify</a></button>
                    </div>
                </div>


                {/* card3 */}


                <div className="card">
                    <div className="container_head">
                        <h1 className='top_haed'> <Hading Hading='Weather_app_React' /> </h1>
                    </div>

                    <img className='todo_img' src={weather} alt="" />
                    <h1 className='descrip'> <Hading Hading='Description' /> </h1>
                    <p className='descriptext'>
                        <Posting Posting='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam officiaqui pariatur hic conProjact' />
                        <Posting Posting='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Numquam officia n qui pariatur hic conProjact' />
                        <Posting Posting='tur adipisicing elit.
                         Numquam officia repellendus in qui pariatur hic con
                        ipisicing elit.  conProjact' />
                    </p>
                    <div className="btn_container">
                        <button className='btn2'><a href="https://github.com/irfansultan2588/Weather_app_React" target="_blank">Github</a></button>
                        <button className='btn2'><a href="https://weatherappreact2588.netlify.app" target="_blank"> Netlify</a></button>
                    </div>
                </div>





            </div>

        </>
    )
}

export default Card