// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class Skills extends React.Component {
    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount(){
        document.title = "Abhay Pai | Skills";
    }

    render() {
        return (
            <div className='jumbotron jumbotron-fluid bg-transparent text-white m-0 p-0'>
                <div className='container-fluid'>
                    <h1 className='display-1 animated fadeIn delay'>{this.props.content}</h1>
                    <div className='row animated fadeIn delay-1s'>
                        <div className='col-12 col-sm-12'>
                            <h3 className='display-4'>Front-end Development Skills</h3>
                            <ul className='list-group d-block'>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>HTML</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>CSS</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>SASS</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Javascript</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Node.js</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Webpack</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Yarn</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Babel.js</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>React.js</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>JSON</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>AJAX</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Jquery</li>
                            </ul>
                            <h3 className='display-4'>Back-end Development Skills</h3>
                            <ul className='list-group d-block'>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>PHP</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>MySql</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Redis</li>
                            </ul>
                            <h3 className='display-4'>Framework Skills</h3>
                            <ul className='list-group d-block'>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Drupal</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Wordpress</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>slimPhp</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Guzzle</li>
                            </ul>
                            <h3 className='display-4'>Software Development Tools</h3>
                            <ul className='list-group d-block'>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>PHPMyAdmin</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Vagrant</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Linux</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Adobe Photoshop</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Virtual Box</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Composers</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>FTP Client</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Git</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>XAMPP</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Nginx</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>ERD</li>
                            </ul>
                            <h3 className='display-4'>Web Applications Skills</h3>
                            <ul className='list-group d-block'>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>User Experience (UX)</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>User Interface Design (UI)</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Responsive Web Desgin</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Single Page Applications</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Theme Development</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>RESTful Web Services</li>
                            </ul>
                            <h3 className='display-4'>Other Skills</h3>
                            <ul className='list-group d-block'>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Leadership</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Team Work</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Agile Environment</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Communication</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Time Management</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Self-Motivation</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Problem Solving</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Decision Making</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Easily Adaptable</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Readiness and Eagerness to learn and understand things which are out of the box</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Windows</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Microsoft Word/PowerPoint/Excel</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Windows Server</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Site Layout</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Full-Stack Development</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Web Technologies</li>
                                <li className='list-group-item list-group-item-danger text-white d-inline-block mr-1 mb-1'>Object-Oriented Programming (OOP)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Skills.propTypes = {
    content: PropTypes.string
};

export default Skills;
