import React from "react";

export default function NavBar(props) {
return (
<div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand ms-3" href="/">
            Test App
        </a>
        <button className="navbar-toggler me-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Link
                    </a>
                </li>
            </ul>
        </div>
        <div className="navbar-right me-2">
            <button type="button" className={`btn border-0 shadow-none text-${props.mode==='light' ?'dark':'white'}`} onClick={props.toggleMode}><i className={`fa  fa-xl fa-solid fa-${props.mode==='light' ?'sun':'moon'}`}></i></button>
        </div>
    </nav>
</div>
);
}