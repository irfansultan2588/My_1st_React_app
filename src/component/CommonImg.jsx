import React from 'react'

export default function CommonImg(props) {
    console.log("props", props)
    return (
        <div>

            <img className='img-div' src={props.CommonImg} />


        </div>

    )
}

