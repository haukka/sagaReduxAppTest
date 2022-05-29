import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './action/action';

class App extends React.Component<any, any>{

  render () {
    return (
      <div>
        <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                 // eslint-disable-next-line 
                : <p><img src={this.props.url} alt="image" /></p>}
      </div>
    )
  }
}


export const StoreApp = connect((state: any) => {
  return state;
})(App);
