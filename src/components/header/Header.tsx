import { memo } from "react";
import { NavLink } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";

const Header = () => {
  return (
    <header className="h-20 bg-blue-500 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <NavLink to={"/"}>
            <PiStudentFill className="text-5xl text-text-primary" />
          </NavLink>
        </div>
        <ul className="flex gap-10 font-medium text-[20px] text-text-primary font-[Inter]">
          <li>
            <NavLink to={"/"}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/students"}>
              <span>Students</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
