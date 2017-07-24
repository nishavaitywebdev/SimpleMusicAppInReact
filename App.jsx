import React from 'react';

class App extends React.Component {
   render() {
   var myStyle = {
     backgroundColor: '#000000'
   }
      return (
      <div style={myStyle}>
         <HeadNavBar/>
         <ListOfCategories/>
         <BrowseCategoriesList/>
      </div>
      );
   }
}

class HeadNavBar extends React.Component {
  render(){
    var myStyle = {
      backgroundColor: '#000000'
    }
    var textStyle = {
      marginLeft: 50,
      marginRight: 50,
      fontSize: 30
    }
    var greenTextStyle = {
      color: '#ADFF2F'
    }
    return(
      <nav className="navbar navbar-default navbar-fixed-top" style={myStyle}>
          <div className="container-fluid" style = {textStyle}>
                  <div className="row" style = {greenTextStyle}>
                          <a href="#">
                                  Simple Music App
                          </a>
                  </div>
          </div>
      </nav>
    );
  }
}

class ListOfCategories extends React.Component {
render() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
     <ul>
      {listItems}
     </ul>
  );
  }
}

class BrowseCategoriesList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {categories: []};
  }
  componentDidMount() {
    this.CategoriesList();
  }
  
  CategoriesList() {
    const Spotify = require('spotify-web-api-node');
    const spotifyApi = new Spotify({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.CALLBACK_URL
    });
    return spotifyApi.getJSON('https://api.spotify.com/v1/browse/categories')
      .then((data) => {
        this.setState({ categories: data.results });
      });
  }
  render (){
    const categories = this.state.categories.map((item, i) => {
      return <div>
        <h1>{item}</h1>
      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">{ categories }</div>
    </div>
  }
}

export default App;
