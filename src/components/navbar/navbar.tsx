import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveItem,
  setActiveItem,
} from "../../redux/reducers/slices/navbar";
import style from "./navbar.module.css";

function Navbar() {
  const activeItem = useSelector(selectActiveItem);
  const dispatch = useDispatch();

  const handleItemClick = (item: string) => {
    dispatch(setActiveItem(item));
  };
  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <div className={style.brand}>
          <Link to="/">N Sherpa</Link>
        </div>
        <Flex className={style.navLinks} fontSize="20px">
          <Link
            to="/"
            className={activeItem === "Home" ? style.active : ""}
            onClick={() => handleItemClick("Home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={activeItem === "About" ? style.active : ""}
            onClick={() => handleItemClick("About")}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={activeItem === "Projects" ? style.active : ""}
            onClick={() => handleItemClick("Projects")}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={activeItem === "Contact" ? style.active : ""}
            onClick={() => handleItemClick("Contact")}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
