import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Album from "./Album/Album";
import * as actions from "../../actions/index";

class AlbumList extends Component {

    clickHandker = (id) => {
        this.props.history.push(`album/thumbs/${id}`)
    }

    componentDidMount() {
        this.props.onFetchAlbums();
    }

    render() {
        let albums = this.props.albums.map(album => (
            <Album key={album.id}
                albumTitle={album.title}
                userId={album.userId}
                title={`Album Id: ${album.id}`}
                clicked={() => this.clickHandker(album.id)} />
        ));
        return (
            <div className="container">
                {albums}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        albums: state.album.albums
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAlbums: () => dispatch(actions.getAlbums())
    }
}

AlbumList.propTypes = {
    albums: PropTypes.array,
    onFetchAlbums: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps) (AlbumList);
