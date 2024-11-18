import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom"; // require 대신 import로 수정
import todoRouter from "./todoRouter";
import productsRouter from "./productsRouter";
import Spinner from "../image/spinner/Spinner@1x-1.0s-200px-200px (1).gif"
import memberRouter from "./memberRouter";


const Loading = <div
  className={`fixed top-0 left-0 z-[1055] flex h-full w-full items-center justify-center bg-black bg-opacity-20`}>
  <img src={Spinner} alt="로딩중" width="10%" />

</div>;
//const Main = lazy(() => import("../pages/MainPage")); // lazy 게으르다 -> 코드 스플리팅
const About = lazy(() => import("../pages/AboutPage")); // lazy 게으르다 -> 코드 스플리팅
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"));

const Main = lazy(() => new Promise((resolve) =>

  setTimeout(() => resolve(import('../pages/MainPage')), 1000)));


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
  {
    path:"products",
    element:(
    <Suspense fallback={Loading}>
      <ProductsIndex />
    </Suspense>
    ),
    children: productsRouter(),
  },
  {
    path: "member",
    children: memberRouter()
  }
]);

export default root;
