import React from 'react';
import PropTypes from 'prop-types';

const LinkTo = ({ children, onClick }) => (
  <a
    className="text-decoration-none"
    onClick={(e) => {
      e.preventDefault();

      onClick(e);
    }}
    href="#"
  >
    {children}
  </a>
);

const Person = ({
  onClick, name, position, imgSrc, wrapperClassnames,
}) => (
  <div className={`contact-person ${wrapperClassnames}`}>
    {onClick ? (
      <LinkTo onClick={onClick}>
        <img src={imgSrc} alt="Contact person" />
      </LinkTo>
    ) : (
      <img src={imgSrc} alt="Contact person" />
    )}
    <div>
      {onClick ? (
        <LinkTo onClick={onClick}>
          <span className="name">{name}</span>
          <span className="position">{position}</span>
        </LinkTo>
      ) : (
        <>
          <span className="name">{name}</span>
          <span className="position">{position}</span>
        </>
      )}
    </div>
  </div>
);

Person.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  wrapperClassnames: PropTypes.string,
};
Person.defaultProps = {
  wrapperClassnames: '',
  onClick: null,
};

LinkTo.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Person;
