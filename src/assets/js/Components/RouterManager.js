// Libraries
import React from 'react';
import { HashRouter as Router, Route, NavLink, hashHistory, Switch } from 'react-router-dom';

// Configuration
import Routes from 'ConfigurationPath/Routes';

// JSX
import ContainerFluidJSX from 'TemplatesPath/jsx/ContainerFluid';

/*
 *  RouterManager
 */
class RouterManager extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <nav className='navbar navbar-expand-md bg-primary navbar-dark'>
                    <NavLink className='navbar-brand' title='Abhay Pai' className='nav-link' to='/about'>
                        <img src='./images/ap-logo.jpg' alt='Abhay Pai' className='img-fluid' />
                    </NavLink>

                    <button className='navbar-toggler border' type='button'
                        data-toggle='collapse' data-target='#mainmenu'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <div className='collapse navbar-collapse' id='mainmenu'>
                        <ul className='navbar-nav ml-auto'>
                            {
                                new Routes().map((route, index) => (
                                    <li className='nav-item' key={index}>
                                        <NavLink exact={route.exact}
                                            className='nav-link'
                                            to={route.path}>
                                            {route.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>

                <ContainerFluidJSX>
                    <Switch>
                        {
                            new Routes().map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.pathComponent}
                                />
                            ))
                        }
                    </Switch>
                </ContainerFluidJSX>
            </Router>
        );
    }
}

export default RouterManager;
