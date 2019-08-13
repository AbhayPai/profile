// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class WorkExperience extends React.Component {
    render() {
        /*eslint max-len: 0*/
        return (
            <div className='jumbotron jumbotron-fluid bg-transparent text-white m-0 p-0'>
                <div className='container-fluid'>
                    <h1 className='display-1'>{this.props.content}</h1>
                    <h3 className='display-4'>Srijan Technologies [Sr. Frontend Developer L2]</h3>
                    <ul className='list-group d-block'>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>2017 – Present</li>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>
                        Working onsite location of service company, which includes
                        development efforts on day to day basis. Where we follow Agile
                        Methodologies using ticketing system and divide the task accordingly
                        within the team to give the best results to the business.</li>
                    </ul>
                    <h3 className='display-4'>Microquery Limited [Lead Developer]</h3>
                    <ul className='list-group d-block'>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>2014 – 2017</li>
                        <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>
                        My first company in my lifetime, where I learnt a lot of things in
                        professional level. Here I started as an Intern, and as the years passed
                        by I gave my best to achieve the position till Lead Developer. We used
                        Waterfall approach here for the web development.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

WorkExperience.propTypes = {
    content: PropTypes.string
};

export default WorkExperience;
