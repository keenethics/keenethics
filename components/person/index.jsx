import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  onClick, name, position, imgSrc, wrapperClassnames,
}) => {
  const LinkTo = ({ children }) => (
    <a
      className="text-decoration-none"
      onClick={onClick}
      href="javascript:void(0)"
    >
      {children}
    </a>
  );

  return (
    <div className={`contact-person ${wrapperClassnames}`}>
      {onClick ? (
        <LinkTo>
          <img src={imgSrc} alt="Contact person" />
        </LinkTo>
      ) : (
        <img src={imgSrc} alt="Contact person" />
      )}
      <div>
        {onClick ? (
          <LinkTo>
            <span className="name">{name}</span>
            <span className="position">{position}</span>
          </LinkTo>
        ) : (
          <React.Fragment>
            <span className="name">{name}</span>
            <span className="position">{position}</span>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

Person.propTypes = {
  onClick: PropTypes.oneOfType([null, undefined, PropTypes.func]).isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  wrapperClassnames: PropTypes.string,
};

Person.defaultProps = {
  wrapperClassnames: '',
};

export default Person;
