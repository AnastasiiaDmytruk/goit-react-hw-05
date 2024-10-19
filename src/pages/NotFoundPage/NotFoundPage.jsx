import { NavLink } from "react-router-dom";

import { IoIosArrowDropleft } from "react-icons/io";
const NotFoundPage = () => {
  return (
    <div>
      <NavLink to="/">
        <IoIosArrowDropleft />
        Go Back
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
