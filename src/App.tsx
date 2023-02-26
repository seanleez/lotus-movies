import { IRoute, PATH } from "@constants/interface";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Layout } from "./layout";
import { InvalidPage } from "./pages";
import { publicRoutes } from "./router";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          {publicRoutes.map((route: IRoute, index: number) => {
            const Page = route.component;
            return (
              <Route
                index={route.isIndexPage}
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path="/" element={<Navigate to={PATH.NOW_PLAYING} />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
