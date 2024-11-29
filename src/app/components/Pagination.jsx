import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onChangePage, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
            <a
              href="#"
              className='page-link'
              onClick={() => onChangePage(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes={
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination;
