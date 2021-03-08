import React from 'react';
import LojasAPI from '../../components/LojasAPI';

const Page = () => {
    return(
        <>
            <div className="container">
                <h1>HOME PAGE</h1>

                <h3>Listagem de lojas</h3>
                <LojasAPI/>
                
            </div>
        </>
    );
}

export default Page;