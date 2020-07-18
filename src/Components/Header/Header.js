import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

export default () => (
    <header className="col-12">
        <div className={styles.test}>
            <Link className="col" to="/">
                Home
            </Link>
            <Link className="col" to="/tv">
            tv
            </Link>
            <Link className="col" to="/search">
            search
            </Link>          
        </div>
    </header>
)
