import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="container">
      <nav className="text-black shadow-md py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
