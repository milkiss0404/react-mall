import { Link } from "react-router-dom";
import SecondMenu from "./SecondMenu";
import { useState } from "react";
import ThirdMenu from "./ThirdMenu";
import { useSelector } from "react-redux";

const BasicMenu = () => {

  const loginState = useSelector(state=> state.loginSlice)



  const [menuOpen, setMenuOpen] = useState({
    button1: false,
    button2: false,
  });

  const handleMouseOver = (button) => {
    setMenuOpen((prev) => ({ ...prev, [button]: true }));
  };

  const handleMouseOut = (button) => {
    setMenuOpen((prev) => ({ ...prev, [button]: false }));
  };


  return (
    <>
      <nav id="navbar" className={`flex bg-black justify-between`}>
        <div className="w-4/5">
          <ul className="flex p-5 text-white font-bold">
            <li
              className={`pr-6 text-2xl`}
              onMouseEnter={() => handleMouseOver("button1")}
              onMouseOut={() => handleMouseOut("button1")}
            >
              <Link to={"/"}>Main</Link>
            </li>

            <li
              className={`pr-6 text-2xl`}
              onMouseEnter={() => handleMouseOver("button2")}
              onMouseOut={() => handleMouseOut("button2")}
            >
              <Link to={"/about"}>about</Link>
            </li>

            {loginState.email?
            <>
            <li
              className={`pr-6 text-2xl`}
              onMouseEnter={() => handleMouseOver("button2")}
              onMouseOut={() => handleMouseOut("button2")}>
              <Link to={"/todo"}>todo</Link>
            </li>

            <li
              className={`pr-6 text-2xl`}
              onMouseEnter={() => handleMouseOver("button2")}
              onMouseOut={() => handleMouseOut("button2")}
            >
              <Link to={"/products"}>products</Link>
                </li>
              </>:
              <></>

            }
          
         
          </ul>
        </div>
        {!loginState.email ?
          <div className="w-1/10">
            <Link to={"/member/login"} className="text-2xl text-white font-bold flex p-5">login</Link>
          </div>
          :
          <div className="w-1/10">
            <Link to={"/member/logout"} className="text-2xl text-white font-bold flex p-5">logout</Link>
          </div>
        }
      </nav>

      {/* 애니메이션이 적용된 SecondMenu */}
      <div
        className={`transition-all duration-500 ease-in-out ${menuOpen.button1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <SecondMenu menuOpen={menuOpen.button1} />
      </div>

      {/* 애니메이션이 적용된 ThirdMenu */}
      <div
        className={`transition-all duration-500 ease-in-out ${menuOpen.button2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <ThirdMenu menuOpen={menuOpen.button2} />
      </div>
    </>
  );
};

export default BasicMenu;
