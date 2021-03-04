import React, { Component } from 'react';

class ListMaker extends Component{
    constructor(){
        super();
        this.state = {
            CruDogs: ['Gizmo', 'Alpha', 'Shiloh', 'Beans', 'Mogli', 'Kuna', 'Jade']
          };

    }

    render() {
        let CruDogsToDisplay = this.state.CruDogs.map((elem, ind) => {
          return <h2 key={ind}>{elem}</h2>;
        });
    
        return <div className="App">{CruDogsToDisplay}</div>;
      }
    }

export default ListMaker;