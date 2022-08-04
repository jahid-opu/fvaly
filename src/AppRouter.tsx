import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Help = React.lazy(() => import("./pages/Help/Help"));

interface Props {
  children?: React.ReactNode;
}

const AppRouter: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
