import { useState } from 'react';
import reviews from '../assets/reviews';
import './Reviews.css';

const cardsPerPage = 3;

export default function Reviews() {
  const [activePage, setActivePage] = useState(0);
  const pageCount = Math.ceil(reviews.length / cardsPerPage);
  const visibleReviews = reviews.slice(activePage * cardsPerPage, activePage * cardsPerPage + cardsPerPage);

  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <h1 className="fw-bold bebas-neue-regular text-decoration-underline mb-5"><span style={{color:"grey"}} className=" text-decoration-underline">Happy </span>Clients </h1>
      <div className="reviews-grid ">
        {visibleReviews.map(({ id, review, rate, customer }) => (
          <article className="review-card" key={id}>
            <p className="review-text">{review}</p>
            <div className="review-stars text-warning d-flex gap-1" aria-label={`${rate} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, index) => (
                <i className={`bi ${index < rate ? 'bi-star-fill' : 'bi-star'}`} key={index} aria-hidden="true" />
              ))}
            </div>
            <p className="review-customer">{customer}</p>
          </article>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="review-pagination" aria-label="Review pages">
          {Array.from({ length: pageCount }, (_, page) => (
            <button
              aria-label={`Show review page ${page + 1}`}
              aria-pressed={page === activePage}
              className={`review-dot ${page === activePage ? 'active' : ''}`}
              key={page}
              onClick={() => setActivePage(page)}
              type="button"
            />
          ))}
        </div>
      )}
    </section>
  );
}
