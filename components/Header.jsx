import { Link } from "react-router-dom";

export default function Header() {
    return (
      <header id="header">
        <nav>
          <Link to="/">
            <h1>NewsNewsNews</h1>
          </Link>
        </nav>
      </header>
    );
  };