// Home page of website. Just includes a background image and welcome //

import React from "react";
import backgroundImg from "../assets/images/mountains.jpg";

// This is a static page mocking an "Home" section //
export default function HomePage() {
  return (
    <section className="my-5 intro" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex-row">
        <h1 className="section-title">Welcome!</h1>
      </div>
    </section>
  );
}