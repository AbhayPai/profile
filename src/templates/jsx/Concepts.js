// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class Concepts extends React.Component {
    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount(){
        document.title = 'Abhay Pai | Concepts';
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
                                <div className='card-header'>Iframe Communication</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/iframe-communication-1'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/iframe-communication-1/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Html Page Cache</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/htmlpagecache'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/htmlpagecache/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Javascript Pubsub</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/pubsub'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/pubsub/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Crosstab Communication</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/crosstab'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/crosstab/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Web Worker</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/webworker'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/webworker/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Web Socket</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/websocket'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/websocket/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Service Worker</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/service-worker'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/service-worker/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Web Scraping</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/webscraping'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://github.com/AbhayPai/webscraping'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Composer</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/composer-psr-4'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://github.com/AbhayPai/composer-psr-4'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Geolocation API</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/geolocation'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/geolocation/'
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

Concepts.propTypes = {
    content: PropTypes.string
};

export default Concepts;
