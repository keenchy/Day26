import React, { Component } from "react";
import axios from "axios";


class GetRequestSetHeaders extends Component {
    constructor(props) {
        super(props);
        this.state = { totalReactpackages: null }
    }

    componentDidMount() {
        const headers = {
            'Content-Type': 'application/json'
        };
        axios.get('https://api.npms.io/v2/search?q=react', { headers })
            .then(response => this.setState({ totalReactpackages: response.data.total }));
    }

    render() {
        const { totalReactpackages } = this.state;
        return ( <
            div className = "card text-center m-3" >

            <
            h5 className = "card-header" > GET request with Set Headers < /h5>

            <
            div className = "card-body" > Total packages: { totalReactpackages } < /div>

            <
            /div >
        );
    }
}

export default GetRequestSetHeaders;