import Menu from '../layouts/Menu';
import Mobilemenu from '../layouts/Mobilemenu';
import HeaderComponent from '../../helper/Navigationhelper';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import React, { Fragment } from 'react';

class Headertwo extends HeaderComponent {
    render() {
        return (
            <Fragment>
                <aside className={classNames("main-aside", { "open": this.state.navtoggle })}>
                    <div className="aside-title">
                        <div className="aside-controls aside-trigger">
                            <h4>Menu</h4>
                            <div className="close-btn close-dark" onClick={this.navtoggleClass} >
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.navtoggleClass} />
                <header className="main-header header-3">
                    <nav className="navbar">
                        <div className="container">
                            <Menu />
                            <div className="header-controls">
                                <ul className="header-controls-inner d-none d-lg-flex">
                                    <li>
                                        <Link to="/login" className="btn-custom primary">Login <i className="fas fa-user" /> </Link>
                                    </li>
                                </ul>
                                <div className="aside-toggler aside-trigger" onClick={this.navtoggleClass}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </Fragment>
        );
    }
}

export default Headertwo;
