import React from 'react';
import BannerImage from '../assets/Tracking.webp';
import BannerImage1 from '../assets/Analysis.jpg';
import BannerImage2 from '../assets/Reports1.jpg';
const Features = () => {
  const features = [
    {
      title: 'Efficient Inventory Tracking',
      desc: 'Track your inventory seamlessly with our advanced system.',
      img: '/resources/img/inventry.png',
    },
    {
      title: 'Real-Time Analytics',
      desc: 'Analyze your stock data and make informed decisions with real-time analytics.',
      img: '/resources/img/realtim.png',
    },
    {
      title: 'Automated Reports',
      desc: 'Generate automated reports for better insights and decision-making.',
      img: '/resources/img/autorepo.png',
    },
  ];

  return (
    <>
      <section className="key-features" id="features">
        <h2>Key Features</h2>
        <div className="feature-boxes">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <img className="feature-img" src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="zigzag-section" id="about">
        <div className="zigzag-container">
          <div className="zigzag-item">
         <img
        className="user-pic"
        alt="Inventory Tracking"
        src={BannerImage}
        />

            <div>
              <h3>Efficient Inventory Tracking</h3>
              <p>
                Efficiently track and manage your inventory to ensure you never run out of stock.
              </p>
            </div>
          </div>

          <div className="zigzag-item1 zigzag-item-right">
            <img
              className="user-pic"
              alt="Vendor Integration"
              src={BannerImage1}
              />
            <div>
              <h3>Vendor Integration</h3>
              <p>Efficiently manage and communicate with your vendors.</p>
            </div>
          </div>

          <div className="zigzag-item">
            <img
              className="user-pic"
              alt="Real-Time Analytics"
              src={BannerImage2}
              />
            <div>
              <h3>Real-Time Analytics</h3>
              <p>
                Analyze your stock data and make informed decisions with real-time analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
