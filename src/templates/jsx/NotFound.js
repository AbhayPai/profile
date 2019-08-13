// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class H1 extends React.Component {
    render() {
        return (
            <div className='jumbotron jumbotron-fluid bg-transparent text-white m-0 p-0'>
                <div className='container-fluid'>
                    <h1 className='display-1'>{this.props.content}</h1>
                </div>
            </div>
        );
    }
}

H1.propTypes = {
    content: PropTypes.string
};

export default H1;
