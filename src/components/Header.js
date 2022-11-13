import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="container flex-center flex-col text-center pt-1">
      <h1 className="text-yellow-700 mb-2">
        by<span className="text-gray-700">bit</span>LiquidCalc
      </h1>
      <div className="mb-2 flex-center flex-wrap">
        <h4 className="text-light">trust but verify</h4>
        <h4 className="text-red-500 whitespace-pre"> (do not trust)</h4>
        <p className="text-sm">
          this is the alpha version, there should be{" "}
          <span className="text-red-500">a lot of bugs</span>
        </p>
      </div>
      <nav className="max-w-[255px] w-full">
        <ul className="flex-center gap-x-2">
          {pathname !== "/" && (
            <li className="w-full">
              <NavLink className="btn btn-primary" to="/">
                Calc
              </NavLink>
            </li>
          )}
          {pathname !== "/manual" && (
            <li className="w-full">
              <NavLink className="btn btn-primary" to="/manual">
                Manual
              </NavLink>
            </li>
          )}
          {pathname !== "/rules" && (
            <li className="w-full">
              <NavLink className="btn btn-primary" to="rules">
                Rules
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
