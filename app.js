import React from 'react';
import ReactDOM from 'react-dom';
import $http from 'jquery';
import BackgroundSineWave from './BackgroundSineWave';

export class FilterableHotelsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hotels: undefined,};
  }

  componentWillMount() {
    console.log("In componentWillMount");
    this.hotelsList();
  }

  hotelsList() {

    fetch('https://developers.zomato.com/api/v2.1/categories', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': 'c7d62258dad4da905c3eb8b87725b0ce',
          },
        })
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            response.json().then(data => ({
                data: data,
                status: response.status
              })
            ).then(res => {
              console.log(res.data.categories);
              this.setState({hotels: res.data.categories});
            });
          } else {
            const error = new Error(response.statusText);
            error.response = response;
            LoginActions.loginError();
            throw error;
          }
        })
        .catch(error => { console.log('request failed', error); });
  }

  render(){
    const myStyle={
      width: '100%',
      height: '800px',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#00acec',
    }
    return (
      <div style={myStyle}>
        <SearchBar />
        <HotelsList />
        <BackgroundSineWave />
      </div>
    );
  }
}

export class SearchBar extends React.Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

export class HotelsList extends React.Component {
  render(){
    var rows = [];
    var lastCategory = null;
    // if(this.state.hotels.length === 0){
    //  return (<p>Not yet rendered</p>); //return false or a <Loader/> when you don't have anything in your message[]
    // }
    /*console.log(this.state.hotels.length);
    this.state.hotels.forEach(
      function (hotel) {
        if (hotel.category !== lastCategory) {
          rows.push(<HotelCategoryRow category={hotel.category} key={hotel.category}/>);
        }
        rows.push(<HotelRow hotel = {hotel} key = {hotel.name} />);
        lastCategory = hotel.category;
      }
    );*/
    return (
      <ul>
        {rows}
      </ul>
    );
  }
}

export class HotelRow extends React.Component {
  render() {
    return (
        <li>{this.props.hotel.name}</li>
    );
  }
}

export class HotelCategoryRow extends React.Component {
  render() {
    return (
        <div>
          {this.props.category}
        </div>
    );
  }
}
