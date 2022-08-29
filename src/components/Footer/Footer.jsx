import PropTypes from 'prop-types';
import { PageFooter, Copyright, Link } from './Footer.styled';

export function Footer({ name, href = '#' }) {
  return (
    <PageFooter>
      <Copyright>
        &copy; 2022&nbsp;
        {name && (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            title={name + '`s github'}
          >
            {name}
          </Link>
        )}
      </Copyright>
    </PageFooter>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};
