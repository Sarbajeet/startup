import React from 'react'
import Loader from 'react-loader-spinner'
import './Loading.css';

const Loading = () => {
    return (
        <div className='loading-container'>
            <Loader
                type="BallTriangle"
                color= '#34568B'
                height={150}
                width={150}
                timeout={3000}
            />
        </div>
    )
}

export default Loading
