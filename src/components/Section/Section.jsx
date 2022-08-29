import PropTypes from 'prop-types';
import { SectionCommon, SectionTitle } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionCommon>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionCommon>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
