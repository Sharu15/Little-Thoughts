import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItem">
          <div className="sidebarItemTitle">ABOUT ME</div>
          <div className="ab">
          <img
            className="sidebarImg"
          />
          <p className="sidebarAbout">
            Vivamus blandit vehicula odio id elementum. Mauris lobortis risus
            vel ligula facilisis luctus. Quisque interdum ultrices suscipit.
            Pellentesque sit amet urna ullamcorper, sollicitudin ipsum eu,
            ultricies purus.
          </p>
          </div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">CATEGORIES</div>
          <ul className="sidebarCategoryList">
            {categories.map((cat) => (
              <Link
                to={`/?category=${cat.name}`}
                className="link sidebarCategoryListItem"
                key={cat._id}
              >
                <li>{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">FOLLOW US</div>
          <div className="sidebarIcons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram-square sidebarIcon"></i>
            </a>
            <a
              href="https://m.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook-square sidebarIcon"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin sidebarIcon"></i>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square sidebarIcon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
