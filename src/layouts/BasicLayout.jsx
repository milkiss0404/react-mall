import React from "react";
import BasicMenu from "../components/menus/BasicMenu";
import SecondMenu from "../components/menus/SecondMenu";
import ThemeToggle from "../theme/ThemeToggle";
import { useTheme } from "../context/ThemeProvider";

const BasicLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <>
      <BasicMenu></BasicMenu>

      <div
        className="bg-white w-full flex flex-col space-y-4 md:flex-row md:space-x-4
        md:space-y-0"
      >
        <main className="bg-white md:w-2/3 lg:w-3/4 px-5 py-40">
        <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
        DarkMode
      </ThemeToggle>
          {children}
        </main>
        <aside className="bg-white-300 md:w-1/3 lg:w-1/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl"> Sidebar </h1>
        </aside>
      </div>
    </>
  );
};

export default BasicLayout;
