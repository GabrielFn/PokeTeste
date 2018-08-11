import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loader">
            <CircularProgress size={50} />
        </div>
    )
}

export default Loading;