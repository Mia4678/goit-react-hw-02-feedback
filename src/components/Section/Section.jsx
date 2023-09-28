import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styles';
import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionContainer>
        <h1>{title}</h1>
        {children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
