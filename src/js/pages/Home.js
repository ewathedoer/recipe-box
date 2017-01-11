import React from 'react';
import HomeCard from '../components/HomeCard';
import Header from '../components/Header';
import AddButton from '../components/AddButton';

export default class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        
        <div className="container">
          <div className="row">
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
            <div className="col s6 m3 l3">
              <HomeCard />
            </div>
          </div>
          <AddButton />
        </div>
      
      </div>
    );
  }
}
