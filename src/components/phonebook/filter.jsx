import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  getFilterValue = evt => {
    const value = evt.target.value;
    this.props.onChange(value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input onChange={this.getFilterValue} type="text" />
      </label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
