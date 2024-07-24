import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../routes";
import Loader from "../Loader/Loader";

const App: FC = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
