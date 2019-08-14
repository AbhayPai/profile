// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class About extends React.Component {
    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount(){
        document.title = "Abhay Pai | About";
    }

    render() {
        /*eslint max-len: 0*/
        return (
            <div>
                <div className='jumbotron jumbotron-fluid bg-transparent text-white m-0 p-0'>
                    <div className='container-fluid'>
                        <h1 className='display-1'>{this.props.content}</h1>
                        <p>I am simple, humble, energetic and
                        the down to earth and brown colored
                        gentleman; who doesn’t like to drink
                        alcohol and smoke cigarettes. Since I
                        like to travel and doesn’t like to sit in a
                        place for a long time; I am open to
                        relocate for any work location in the
                        world or universe. I can say I have
                        good adaptability nature and try to
                        adjust everywhere. </p>
                        <h3 className='display-4'>DOB</h3>
                        <ul className='list-group d-block'>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>08th, October, 1993 (IN)</li>
                        </ul>
                        <h3 className='display-4'>Contact</h3>
                        <ul className='list-group d-block'>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>09004383815 (IN)</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>09959151034 (PHL)</li>
                        </ul>
                        <h3 className='display-4'>Connect me on</h3>
                        <ul className='list-group d-block'>
                            <li className='list-group-item list-group-item-danger d-inline-block mr-1 mb-1'>
                                <a href='https://abhaypai.github.io/profile/' title='Linkedin' target='_blank'>Linkedin</a>
                            </li>
                            <li className='list-group-item list-group-item-danger d-inline-block mr-1 mb-1'>
                                <a href='http://www.facebook.com/abhay.pai' title='Facebook' target='_blank'>Facebook</a>
                            </li>
                            <li className='list-group-item list-group-item-danger d-inline-block mr-1 mb-1'>
                                <a href='pai.abhay8@gmail.com' title='pai.abhay8@gmail.com' target='_blank'>pai.abhay8@gmail.com</a>
                            </li>
                        </ul>
                        <h3 className='display-4'>Hobbies</h3>
                        <ul className='list-group d-block'>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Hiking</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Paintball</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Marathon</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Swimming</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Calisthenics</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Wall Climbing</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Board Game (Catan)</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Mobile Game (Flow Free)</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Kizomba and Bachata Dance</li>
                        </ul>
                        <h3 className='display-4'>LANGUAGES</h3>
                        <ul className='list-group d-block'>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Hindi</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>English</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Marathi</li>
                            <li className='list-group-item text-white list-group-item-danger d-inline-block mr-1 mb-1'>Konkani</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

About.propTypes = {
    content: PropTypes.string
};

export default About;
