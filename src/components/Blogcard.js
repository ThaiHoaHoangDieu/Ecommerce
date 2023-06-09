import React from 'react';
import { Link } from 'react-router-dom';

const Blogcard = () => {
  return (
    <div>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">26 APR 2023</p>
          <h5 className="title">A BEAUTIFUL SUNDAY MORNING RENAISSANCE</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            obcaecati.
          </p>
          <Link to="/blog/:id" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
