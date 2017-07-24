class BrowseCategoriesList extends React.Component{
  const Spotify = require('spotify-web-api-node');
  const spotifyApi = new Spotify({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.CALLBACK_URL
  });
  CategoriesList() {
    return $.getJSON('https://api.spotify.com/v1/browse/categories')
      .then((data) => {

      });
  }
}
