import React from 'react';
import axios from 'axios';


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
  }
  render() {
    this.props.toggleTag
    return (
      <div>
        <input type='text' id='tag-search' value={this.state.query} onChange={this.handleChange} />

        <div className='tag-container active-tags'>
          {this.props.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        <div className='tag-container'>
          {this.state.searchTags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        
      </div>
    )
  }
}

export default TagSearch;
