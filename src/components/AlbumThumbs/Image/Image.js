import React from 'react';
import PropTypes from "prop-types";

const image = props => (
    <div className="container">
        <div className="row">
            <div className="col text-center m-2">
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={props.clicked}
                    title="Click to return to Thumbs" >
                    Back to Tumbs
                </button>
            </div>
        </div>
        <img src={props.url} alt={props.altText}
            onClick={props.clicked}
            style={{ cursor: "pointer" }}
            title="Click to return to Thumbs" />
    </div>

)

image.propTypes = {
    clicked: PropTypes.func,
    altText: PropTypes.string
}

export default image;