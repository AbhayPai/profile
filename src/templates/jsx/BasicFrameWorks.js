// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class BasicFrameWorks extends React.Component {
    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount(){
        document.title = 'Abhay Pai | Basic Frameworks';
    }

    render() {
        /*eslint max-len: 0*/
        return (
            <div className='jumbotron jumbotron-fluid bg-transparent text-white m-0 p-0'>
                <div className='container-fluid'>
                    <h1 className='display-1 animated fadeIn delay'>{this.props.content}</h1>
                    <div className='row animated fadeIn delay-1s'>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate Webpack JS</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-webpack-js'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/boilerplate-webpack-js/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate for Slim Guzzle Webpack Js Sass Image</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-slim-guzzle-webpack-js-sass-image'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/boilerplate-slim-guzzle-webpack-js-sass-image/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate for Slim Webpack Js Sass Image Bootsrap 4</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-slim-webpack-js-sass-image'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/boilerplate-slim-webpack-js-sass-image/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate Webpack JS and SASS</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-webpack-js-sass'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/boilerplate-webpack-js-sass/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate Webpack JS, SASS and Image</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-webpack-js-sass-image'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/boilerplate-webpack-js-sass-image/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate Webpack JS, SASS, Image and Bootstrap 4</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-webpack-js-sass-image-bootstrap4'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/boilerplate-webpack-js-sass-image-bootstrap4/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate Webpack JS, SASS, Image, Bootstrap 4 and Reactjs</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-webpack-js-sass-image-bootstrap4'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/boilerplate-webpack-js-sass-image-bootstrap4-reactjs/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Basic Building of ReactJs with Webapck</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/reactjs-basic-build'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/reactjs-basic-build/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Boilerplate for Slim</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/boilerplate-slim'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://github.com/AbhayPai/boilerplate-slim'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BasicFrameWorks.propTypes = {
    content: PropTypes.string
};

export default BasicFrameWorks;
