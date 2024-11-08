import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext"

export default function Header() {

  const {user} = useContext(UserContext);

    return (
      <header id="header">
        <nav>
          <Link to="/">
            <h1>NewsNewsNews</h1>
          </Link>
        </nav>
        <h4>Hey {`${user}`}</h4>
      </header>
    );
  };