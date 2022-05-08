import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">TM</a>           
                    <div className="navbar-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Task Manager</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Task List</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>    
        );
    }
}