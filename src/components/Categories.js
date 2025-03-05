import React from 'react';

function Categories() {
  const categories = [
    'Development & IT',
    'Design & Branding',
    'Sales & Marketing',
    'Customer Services',
    'Accounting & Finance',
    'Human Resources',
    'Production & Operation',
    'Engineering/Architects',
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2>Popular Jobs Categories</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Suspendisse tincidunt.</p>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category} className="category-item">
              <div className="icon-placeholder"></div>
              <p>{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;