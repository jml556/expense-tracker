/* eslint-disable import/no-anonymous-default-export */
import React, { useReducer } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

const initialState = {
  Home: true,
  Expenses: false,
  "Submit Expense": false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return { Home: false, Expenses: false, "Submit Expense": false };
    case "Home":
      return {
        ...state,
        Home: true,
      };
    case "Expenses":
      return {
        ...state,
        Expenses: true,
      };
    case "Submit Expense":
      return {
        ...state,
        "Submit Expense": true,
      };
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setAnchorActive = (text) => {
    dispatch({ type: "RESET" });
    dispatch({ type: text });
  };

  return (
    <div className="max-w-[1200px] m-auto">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Expensify
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={state.Home}>
            <Link to="/" onClick={(e) => setAnchorActive(e.target.innerText)}>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={state.Expenses}>
            <Link
              to="/expenses"
              onClick={(e) => setAnchorActive(e.target.innerText)}
            >
              Expenses
            </Link>
          </Navbar.Link>
          <Navbar.Link active={state["Submit Expense"]}>
            <Link
              to="/submit"
              onClick={(e) => setAnchorActive(e.target.innerText)}
            >
              Submit Expense
            </Link>
          </Navbar.Link>
          <Navbar.Link>About</Navbar.Link>
          <Navbar.Link>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
