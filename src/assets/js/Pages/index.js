/*
 *  Require Sass file for the compilation
 */
require('SassPath/pages/index.scss');

/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import ReactDOM from 'react-dom';

/*
 *  All Usable React Reusable Components in this File
 */
import RouterManager from 'ComponentsPath/RouterManager';

/*
 *  Index
 */
class Index {
    /*
     *  @constructor
     *  all definition of variable should be done inside this
     */
    constructor () {
        this.name = 'Abhay';
    }

    /*
     *  @init
     *  all trigger of main function should be done inside this
     */
    init () {
        this.render();
    }

    /*
     *  @render
     *  all render logic should be done inside this
     */
    render () {
        if (document.getElementById('app')) {
            ReactDOM.render(
                <RouterManager name={this.name} />,
                document.getElementById('app')
            );
        }
    }
}

new Index().init();
