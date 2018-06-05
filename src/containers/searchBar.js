import React, { Component } from "react";

class SearchBar extends Component {
  
  constructor(props) {
    super(props){
      this.state = {
        FilterDate: ""
      }
    }
  }

  handleFilterDateInput(date) {
    this.setState({
      FilterDate: date
    })
  }
}

export default SearchBar;
