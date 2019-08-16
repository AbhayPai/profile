// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class Project extends React.Component {
    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount(){
        document.title = 'Abhay Pai | Project';
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
                                <div className='card-header'>App Video Streaming</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/calendar'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/app-video-streaming/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Todo List</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/todo-list'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/todo-list/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>Basic Calculator</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/calculator'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/calculator/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>ReactJs Single Page Website</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/reactjs-spw'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/reactjs-spw/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>ReactJs XHR</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/reactjs-xhr'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/reactjs-xhr/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>ReactJs IO</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/reactjs-io'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/reactjs-io/'
                                        className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex m-3'>
                            <div className='card bg-danger text-center'>
                                <div className='card-header'>ReactJs Router Dom</div>
                                <div className='card-body'>
                                    <a href='https://github.com/AbhayPai/reactjs-router-dom'
                                        className='btn btn-primary' target='_blank'>Download</a>
                                </div>
                                <div className='card-footer'>
                                    <a href='https://abhaypai.github.io/reactjs-router-dom/#/'
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

Project.propTypes = {
    content: PropTypes.string
};

export default Project;
