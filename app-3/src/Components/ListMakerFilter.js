import React, { Component } from 'react';

class ListMakerFilter extends Component{
    constructor(){
        super();
        this.state = {
          filterString: '',
            CruDogs: ['Gizmo', 'Alpha', 'Shiloh', 'Beans', 'Mogli', 'Kuna', 'Jade']
          };

    }

    // this.setstate.CruDogs.filter = this.setstate.CruDogs.filter(filterString)
    handleChange(filter) {
      this.setState({ filterString: filter });
    }

    render() {
        let CruDogsToDisplay = this.state.CruDogs
        .filter((elem, ind) => {
          return elem.includes(this.state.filterString);
        })
        .map((elem, ind) => {
          return <h2 key={ind}>{elem}</h2>;
        });
    
        return (
         <div className="App">
            <input onChange={(e) => this.handleChange(e.target.value)}
            type='text' />
          {CruDogsToDisplay}</div>
        );
      }
    }

export default ListMakerFilter;