// Create a navbar function that will map through each link (or react webpage) similar to a for each function //

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}