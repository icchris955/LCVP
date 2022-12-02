import React from "react";
import { useAuthState } from "../../context/auth-context";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {
  const { user } = useAuthState();
  console.log(user);
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className=" block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-10 h-10 text-sm text-white inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <div
          className={
            "text-md font-semibold py-2 px-6 block w-full whitespace-nowrap bg-transparent shadow-xl"
          }
        >
          {user}
        </div>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
          }
          onClick={(e) => {
            e.preventDefault();
            closeDropdownPopover();
          }}
        >
          Profile
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
          }
          onClick={(e) => {
            e.preventDefault();
            closeDropdownPopover();
          }}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
