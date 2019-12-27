import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import User from "../../../components/User/User"

const landing = {
    position: "relative",
    marginTop: "25px",
    marginBottom: "25px",
    cursor: "pointer"
}

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: ""
            }
        }
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    async loadUser() {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.userId}`);
        this.setState({user:res.data});
    }

    render() {
        return (
            <div className="card text-center" style={landing} onClick={this.props.clicked}>
                <div className="card-body" title={this.props.title}>
                    <h5 className="card-title">Album: {this.props.albumTitle}</h5>
                    <User user={this.state.user} />
                </div>
            </div>
        );
    }
}

Album.propTypes = {
    userId: PropTypes.number,
    clicked: PropTypes.func,
    title: PropTypes.string,
    albumTitle: PropTypes.string
}

export default Album;