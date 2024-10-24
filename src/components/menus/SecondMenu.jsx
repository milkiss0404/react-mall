import React from 'react'
import { Link } from 'react-router-dom';

const SecondMenu = () => {
    return (
        <div className="bg-gray-300 p-4">
            <ul className="flex">
                <li className="pr-6">
                    <Link to={"/submenu1"}>Submenu 1</Link>
                </li>
                <li className="pr-6">
                    <Link to={"/submenu2"}>Submenu 2</Link>
                </li>
                <li className="pr-6">
                    <Link to={"/submenu3"}>Submenu 3</Link>
                </li>
            </ul>
        </div>
    );
};


export default SecondMenu
