import React from 'react';
import axios from 'axios';

function handleClick(e) {
  e.preventDefault();
  console.log(e.target.value);
  this.props.toggleTag(e.target.value);
}

function handleChange(e) {
  this.setState({ query: e.target.value });

  if (e.target.value) {
    axios.get(`/tags/${e.target.value}`)
      .then((res) => {
        this.setState({ searchTags: res.data });
      });
  }
};

class TagSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', searchTags: [] };

    this.handleChange = handleChange.bind(this);
    this.handleClick = handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <input type='text' id='tag-search' value={this.state.query} onChange={this.handleChange} />

        <div className='tag-container active-tags'>
          {this.props.tags.map((tag) => (
            <button key={tag} onClick={this.handleClick} value={tag}>{tag}</button>
          ))}
        </div>
        <div className='tag-container'>
          {this.state.searchTags.map((tag) => (
            <button key={tag} onClick={this.handleClick} value={tag}>{tag}</button>
          ))}
        </div>
        
      </div>
    )
  }
}

export default TagSearch;
