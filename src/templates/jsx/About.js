// Libraries
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            isLoaded: false,
        };
    }

    /*
     *  @componentDidMount()
     *  React Lifecyle Function
     */
    componentDidMount() {
        document.title = "Abhay Pai | About";

        fetch('https://paiabhay.000webhostapp.com/api/about').then((response) => {
            if (response.status !== 200) {
                return;
            }

            return response.json();
        }).then((data) => {
            this.setState({
                data: data,
                isLoaded: true,
            });
        }).catch((error)=> {
            this.setState({
                error,
                isLoaded: true,
            });
        });
    }

    /*
     *  @render()
     *  React Lifecyle Function
     */
    render() {
        const { error, isLoaded, data } = this.state;

        if (error) {
            return <div className='display-1 text-white'>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className='display-1 text-white'>Loading...</div>;
        } else {
            let dataMarkup = {
                __html: data.content
            };

            return (
                <div dangerouslySetInnerHTML={dataMarkup} />
            );
        }
    }
}

export default About;
