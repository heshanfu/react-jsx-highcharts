import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Series } from 'react-jsx-highcharts';

class FlagSeries extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render () {
    return (
      <Series {...this.props} type="flags" />
    );
  }
}

export default FlagSeries;
