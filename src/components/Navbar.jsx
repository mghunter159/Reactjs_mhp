import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.css";
export default function () {
    
    return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">NavBar</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink exact to ='/'>Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to ='/About'>About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to ='/Contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
    );
}