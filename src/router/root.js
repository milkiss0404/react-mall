import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom"; // require 대신 import로 수정
import todoRouter from "./todoRouter";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage")); // lazy 게으르다 -> 코드 스플리팅
const About = lazy(() => import("../pages/AboutPage")); // lazy 게으르다 -> 코드 스플리팅
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "todo",
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

export default root;
