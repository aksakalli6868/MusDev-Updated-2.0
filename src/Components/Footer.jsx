import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="absolute bottom-0 bg-[#0a192f] text-gray-100 w-full h-screen">
      <div>
        <ul>
          <li>
            <Link to="">EMAIL</Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
