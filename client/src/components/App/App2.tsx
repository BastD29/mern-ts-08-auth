import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../routes/index2";

const App: FC = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
