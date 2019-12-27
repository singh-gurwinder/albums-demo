import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store/store";

import Header from "./components/Layouts/Header/Header";
import AlbumList from "./containers/AlbumList/AlbumList";
import AlbumThumbs from "./containers/AlbumThumbs/AlbumThumbs"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={AlbumList} />
          <Route exact path="/album/thumbs/:albumId" component={AlbumThumbs} />
          <Route exact path="/" component={AlbumList} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
