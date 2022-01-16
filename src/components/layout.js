import "normalize.css";
import React, { Fragment } from 'react';
import "../assets/css/main.css";
import Footer from './footer';
import Navbar from './navbar';
// import * as styles from "./layout.module.css"


const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;
