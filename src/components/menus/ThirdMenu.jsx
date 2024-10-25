import React from 'react'
import { Link } from 'react-router-dom';

export default function ThirdMenu({ menuOpen }) {
    return (
        <div className="bg-white p-4">
            <ul className="flex">
                <li className="pr-6">
                    <Link to={"/submenu1"}>ThirdMenu</Link>
                </li>
                <li className="pr-6">
                    <Link to={"/submenu2"}>ThirdMenu</Link>
                </li>
                <li className="pr-6">
                    <Link to={"/submenu3"}>ThirdMenu</Link>
                </li>
            </ul>
        </div>
    );
}
