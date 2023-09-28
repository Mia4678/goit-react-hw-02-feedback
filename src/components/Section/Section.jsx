import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styles';

export const Section = {
  render() {
    const { title, children } = this.props;

    return (
      <SectionContainer>
        <h1>{title}</h1>
        {children}
      </SectionContainer>
    );
  },
};

Section.propTypes = {
  title: PropTypes.string,
};
