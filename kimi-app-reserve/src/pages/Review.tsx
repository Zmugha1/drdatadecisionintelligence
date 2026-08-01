import { useEffect } from 'react';

const REVIEW_URL = 'https://g.page/r/CbP1aE_jX1EZEAE/review';

const Review = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream px-4 py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-md flex-col items-center">
        <h1 className="mb-5 text-center font-display text-2xl font-bold text-navy sm:text-3xl">
          Enjoyed working with Dr. Data?
        </h1>

        <p className="mb-8 text-center text-base leading-relaxed text-navy/80 sm:text-lg">
          A quick Google review means a lot, and it helps other small businesses find a private AI
          partner they can trust. Thank you.
        </p>

        <a
          href={REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 flex min-h-[3.25rem] w-full items-center justify-center rounded-xl bg-coral px-6 py-4 font-display text-lg font-semibold text-white transition-colors hover:bg-coral/90"
        >
          Leave a Google Review
        </a>

        <p className="mb-4 text-center font-display text-sm font-semibold text-navy sm:text-base">
          Or scan to review
        </p>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <img
            src="/DrDataReviews.png"
            alt="Scan to leave a Google review for Dr. Data Decision Intelligence"
            className="mx-auto w-[65%] min-w-[200px] max-w-[260px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
