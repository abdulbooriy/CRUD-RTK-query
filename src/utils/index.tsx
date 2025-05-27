import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Students = lazy(() => import("../pages/students/Students"));

const MainRouters = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/students",
          element: <Students />,
        },
      ])}
    </>
  );
};

export default memo(MainRouters);
