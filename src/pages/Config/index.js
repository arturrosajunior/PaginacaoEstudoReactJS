import React from 'react';
import {Link} from 'react-router-dom';

const Page = () => {
    return(
        <>
            <div className="container">
                <h1>CONFIG PAGE</h1>
                <Link to="/">HOME</Link>
            </div>
        </>
    );
}

export default Page;