import React from "react";
import PropTypes from "prop-types";

const user = props => {
    return (
        <p className="card-text">User: {props.user.name}.</p>
    );
}

user.propTypes = {
    user: PropTypes.object
}

export default user;