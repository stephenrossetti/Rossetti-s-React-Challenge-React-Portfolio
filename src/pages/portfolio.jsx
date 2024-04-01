import React from "react";

// This is a static page mocking an "About Us" section
export default function AboutPage() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <p style={{ fontWeight: 'bold' }}>
            Professional
          </p>
          <p>
            I am a Certified Public Accountant (CPA) and I graduated from the University of Massachusetts, Amherst - Isenberg
            School of Management with a Bachelor of Business Administration (BBA) focused in Accounting. After graduation, I
            worked at Ernst & Young from September 2016 to October 2017 as an assurance auditor for software, manufacturing,
            pharmaceutical, and biomedical clients throughout the Northeast. In October 2017, I moved to Minnesota and received my official
            CPA license in January 2018. I then began working at Regis Corporation as a Senior SEC Accountant from January 2018 to May 2019.
            In May 2019, I began working at Target Corporation as an SEC Accountant and subsequently as a Senior Equity Accountant and 
            Senior Vendor Income Accountant. I am currently still working at Target Corporation as a Vendor Income Accounting Manager.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Personal
          </p>
          <p>
            I am married to my lovely wife, Christina, who works as an exotics veterinarian. We have three pets named Layla (bird),
            Josie (dog), and Axel (cat). Some of my hobbies include hiking, football, video games, and learning to code! Speaking of hiking,
            I recently completed the Appalachian Trail, which is a  2,200 mile, 120 day trek from George to Maine.
          </p>
        </div>
      </div>
    </section>
  );
}