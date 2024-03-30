import React from "react";
import profileImg from "../assets/images/profileImg";

// This is a static page mocking an "About Us" section
export default function AboutPage() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImg} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            INTRODUCTION
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
            impedit suscipit sed magnam alias in, repellat expedita hic explicabo
            architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Velit voluptate exercitationem quaerat pariatur
            mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
            nostrum temporibus ad omnis nam rerum eligendi.
          </p>
        </div>
      </div>
    </section>
  );
}
