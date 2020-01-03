import React, { Component } from 'react'
import axios from "axios";

import Thumb from '../../components/AlbumThumbs/Thumb/Thumb';
import AlbumImage from "../../components/AlbumThumbs/Image/Image";

export default class AlbumThumbs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbs: [],
            showThumbs: true,
            imageUrl: "",
            altImgText: ""
        }
        this.loadThumbs = this.loadThumbs.bind(this);
    }

    componentDidMount() {
        this.loadThumbs();
    }

    async loadThumbs() {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.albumId}`);
        this.setState({thumbs: res.data});
    }

    thumbClickHandler = (url, altText) => {
        this.setState({showThumbs: false, imageUrl: url, altImgText: altText});
    }

    imageClickHandler = () => {
        this.setState({showThumbs: true, imageUrl: "", altImgText: ""});
    }

    render() {
        let contents = null;
        if (this.state.showThumbs) {
            contents = this.state.thumbs.map(thumb => (
                <Thumb key={thumb.id}
                    url={thumb.thumbnailUrl}
                    altText={thumb.title}
                    clicked={() => this.thumbClickHandler(thumb.url, thumb.title)} />
            ));
        } else {
            contents = <AlbumImage url={this.state.imageUrl} altText={this.state.altImgText} clicked={this.imageClickHandler} />
        }
        return (
            <div className="container">
                <div className="row">
                    {contents}
                </div>
            </div>
        )
    }
}
