import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          The
        </span>
        Unbeatables
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button
        className="w-12 h-10 lg:hidden hover:bg-black/10 flex justify-center items-center"
        color="grey"
      >
        <AiOutlineSearch size={20} />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="grey" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button
            className="duration-200 ease-in-out"
            gradientDuoTone="purpleToBlue"
            outline
          >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link active={path === "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link to="/about">
          <Navbar.Link active={path === "/about"} as={"div"}>
            About
          </Navbar.Link>
        </Link>

        <Link to="/projects">
          <Navbar.Link active={path === "/projects"} as={"div"}>
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
