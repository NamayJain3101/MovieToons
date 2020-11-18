import React from 'react';
import loadingGif from '../Assets/loading.gif'

const Loading = ({ title }) => {
    return (
        <div className="loading">
            <h4>Loading {title}...</h4>
            <img src={loadingGif} alt="Loading" width="250px" />
        </div>
    )
}

export default Loading
