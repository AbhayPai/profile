// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class PageNotFound extends React.Component {
    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount(){
        document.title = "Abhay Pai | Page Not Found";
    }

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

PageNotFound.propTypes = {
    content: PropTypes.string
};

export default PageNotFound;
