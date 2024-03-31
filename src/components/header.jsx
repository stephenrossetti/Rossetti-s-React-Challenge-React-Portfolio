import React from "react";
import Nav from "../components/navbar";

export default function Header() {

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Stephen Rossetti's Portfolio</h1>
          </div>
          <div>
            <Nav>
            </Nav>
          </div>
        </header>
      </section>
    </div>
  );
}