// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class Education extends React.Component {
    render() {
        /*eslint max-len: 0*/
        return (
            <div className='jumbotron jumbotron-fluid bg-transparent text-white m-0 p-0'>
                <div className='container-fluid'>
                    <h1 className='display-1'>{this.props.content}</h1>
                    <h3 className='display-4'>SVKM’s Usha Pravin Gandhi College of Management, Mumbai, India</h3>
                    <ul className='list-group d-block'>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Graduated and Acquired Bachelor of Science and Information Technology with 68.32%</li>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>2012 - 2014</li>
                    </ul>
                    <h3 className='display-4'>Pravin Rohidas Patil Polytechnic, Mumbai, India</h3>
                    <ul className='list-group d-block'>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Passed Diploma in Electronic and Telecommunication by acquiring 76.40%</li>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>2009 - 2012</li>
                    </ul>
                </div>
            </div>
        );
    }
}

Education.propTypes = {
    content: PropTypes.string
};

export default Education;
