import React from "react";
import "./header.css";
import { SearchInput } from "../SearchInput/SearchInput";

export const Header = () => {
  return (
    <>
      <div className="navbar flex justify-between">
        <div className="logo flex align-middle">
          <img
            src="https://img.freepik.com/free-vector/home-icon-pin-deal-isolated-white_1284-48167.jpg?size=626&ext=jpg&ga=GA1.1.798314245.1679559570&semt=ais"
            alt="logo"
          />
          <p className="mt-5 font-bold text-2xl">Smart Store</p>
        </div>

        <div className="search mt-5">
          <SearchInput />
        </div>
      </div>
    </>
  );
};
