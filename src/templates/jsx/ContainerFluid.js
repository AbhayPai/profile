// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class ContainerFluid extends React.Component {
    render() {
        return (
            <div id='content' className='container-fluid'>
                {this.props.children}
            </div>
        );
    }
}

ContainerFluid.propTypes = {
    children: PropTypes.node
};

export default ContainerFluid;
