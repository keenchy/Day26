import React, { Component } from 'react';
import axios from 'axios';

class PostRequestErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { articleId: null, errorMessage: null }
    }

    componentDidMount() {

        const article = { title: 'React POST Request Example' };
        axios.post('https://regres.in/invalid-url')
            .then((response) => this.setState({ articleId: response.data.id }))
            .catch((error) => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    render() {
        const { errorMessage } = this.state;
        return ( <
            div className = 'card text-center m-3' >
            <
            h5 className = 'card-header' > POST Request with Error Handling < /h5>  <
            div className = 'card-body' > Error message: { errorMessage } < /div>  <
            /div>
        );
    }
}

export default PostRequestErrorHandling;