import React from 'react';
import PropTypes from "prop-types";

const thumb = props => (
    <div className="m-2">
        <img src={props.url}
            alt={props.altText}
            onClick={props.clicked}
            title={props.altText} />
    </div>
)

thumb.propTypes = {
    clicked: PropTypes.func,
    altText: PropTypes.string,
    url: PropTypes.string
}

export default thumb;