/* eslint-disable jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
const Pagination = ({ total, skip, limit, onPageChange }) => {
  const PAGES_TO_SHOW = 4;
  const totalPages = Math.ceil(total / limit);

  const currentPage = skip / limit;

  const pageCountArray = new Array(totalPages).fill(null);
  const isNoPrevPages = currentPage <= 0;
  const isNoNextPages = currentPage >= totalPages - 1;
  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();

    if (pageNumber < 0 || pageNumber > totalPages - 1) return;

    onPageChange({ skip: pageNumber * limit });
  };
  const ElipsisItem = () => (
    <li key="elipsis" className="elipsis">
      ...
    </li>
  );
  const ListItem = ({ counter, active, className }) => (
    <li key={counter} className={active ? `active ${className}` : className}>
      <a
        onClick={(event) => {
          handlePageChange(event, counter);
        }}
        href="#"
      >
        {counter + 1}
      </a>
    </li>
  );

  ListItem.propTypes = {
    counter: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
  };

  return (
    <ul className="pagination">
      <li
        key="item-first"
        className={`item-first${isNoPrevPages ? ' disabled' : ''}`}
      >
        <a
          onClick={(event) => {
            handlePageChange(event, 0);
          }}
          href="#"
        />
      </li>
      <li
        key="item-prev"
        className={`item-prev${isNoPrevPages ? ' disabled' : ''}`}
      >
        <a
          onClick={(event) => {
            handlePageChange(event, currentPage - 1);
          }}
          href="#"
        />
      </li>
      {totalPages <= PAGES_TO_SHOW
        ? pageCountArray.map((item, counter) => (
            /* eslint-disable react/jsx-indent, indent, operator-linebreak */
            <ListItem
              key={counter}
              counter={counter}
              active={currentPage === counter}
            />
          ))
        : pageCountArray.reduce(
            (acc, item, counter) => [
              ...acc,
              counter === currentPage - 1 ||
              counter === currentPage ||
              counter === currentPage + 1 ||
              (currentPage === 0 && counter === 2) ||
              (currentPage === totalPages - 3 && counter === totalPages - 5) ||
              (currentPage === totalPages - 2 && counter === totalPages - 4) ||
              (currentPage === totalPages - 2 && counter === totalPages - 5) ||
              (currentPage === totalPages - 1 && counter === totalPages - 3) ||
              (currentPage === totalPages - 1 && counter === totalPages - 4) ||
              (currentPage === totalPages - 1 && counter === totalPages - 5) ? (
                <ListItem
                  key={counter}
                  counter={counter}
                  active={currentPage === counter}
                />
              ) : null,
              counter + 1 === totalPages && currentPage + 2 < totalPages ? (
                <React.Fragment key={counter}>
                  {currentPage <= totalPages - 4 && <ElipsisItem />}
                  <ListItem
                    key={counter}
                    counter={counter}
                    active={currentPage === counter}
                  />
                </React.Fragment>
              ) : null,
            ],
            [],
          )}
      <li
        key="item-next"
        className={`item-next${isNoNextPages ? ' disabled' : ''}`}
      >
        <a
          onClick={(event) => {
            handlePageChange(event, currentPage + 1);
          }}
          href="#"
        />
      </li>
      <li
        key="item-last"
        className={`item-last${isNoNextPages ? ' disabled' : ''}`}
      >
        <a
          onClick={(event) => {
            handlePageChange(event, totalPages - 1);
          }}
          href="#"
        />
        {/* eslint-enable */}
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  skip: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
