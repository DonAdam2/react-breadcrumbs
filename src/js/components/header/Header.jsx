import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="main-menu">
    <ul>
      <li>
        <NavLink to="/test1">
          <span>Test 1</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/test2" end>
          <span>Test 2</span>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/test2/level1" end>
              <span>Level 1</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/test2/level2" end>
              <span>Level 2</span>
            </NavLink>
            <ul>
              <li>
                <NavLink to="/test2/level2/level3">
                  <span>Level 3</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/test2/level2/level4">
                  <span>Level 4</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/test3">
          <span>Test 3</span>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
