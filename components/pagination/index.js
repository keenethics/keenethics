import React, { useState } from "react";
import PropTypes from "prop-types";

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
        onClick={event => {
          handlePageChange(event, counter);
        }}
        href="#"
      >
        {counter + 1}
      </a>
    </li>
  );

  return (
    <ul className="pagination">
      <li
        key="item-first"
        className={`item-first${isNoPrevPages ? " disabled" : ""}`}
      >
        <a
          onClick={event => {
            handlePageChange(event, 0);
          }}
          href="#"
        />
      </li>
      <li
        key="item-prev"
        className={`item-prev${isNoPrevPages ? " disabled" : ""}`}
      >
        <a
          onClick={event => {
            handlePageChange(event, currentPage - 1);
          }}
          href="#"
        />
      </li>
      {totalPages <= PAGES_TO_SHOW
        ? pageCountArray.map((item, counter) => (
            <ListItem
              key={counter}
              counter={counter}
              active={currentPage === counter}
            />
          ))
        : pageCountArray.reduce((acc, item, counter) => {
            return [
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
              ) : null
            ];
          }, [])}
      <li
        key="item-next"
        className={`item-next${isNoNextPages ? " disabled" : ""}`}
      >
        <a
          onClick={event => {
            handlePageChange(event, currentPage + 1);
          }}
          href="#"
        />
      </li>
      <li
        key="item-last"
        className={`item-last${isNoNextPages ? " disabled" : ""}`}
      >
        <a
          onClick={event => {
            handlePageChange(event, totalPages - 1);
          }}
          href="#"
        />
      </li>
    </ul>
  );
};

export default Pagination;
