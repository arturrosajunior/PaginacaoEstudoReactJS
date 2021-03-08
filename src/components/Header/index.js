import React from 'react';
import {Link} from 'react-router-dom';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <>
        <header className="mb-5">
            <div className="bg-dark collapse" id="navbarHeader" >
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                     <h4 className="text-white">Sobre</h4>
                     <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contact</h4>
                    <ul className="list-unstyled">
                        <li><Link to="/" className="text-white">Voltar para Home</Link></li>
                        <li><Link to="/config" className="text-white">Configurações</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                <p className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                    <strong>Logo</strong>
                </p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
        </header>
        </>
    );
}
