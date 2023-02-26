import { IRoute, PATH } from "@constants/interface";
import React from "react";

export const publicRoutes: IRoute[] = [
  {
    path: PATH.NOW_PLAYING,
    component: React.lazy(() => import("@pages/NowPlaying")),
    isIndexPage: true,
  },
  {
    path: PATH.TOP_RATED,
    component: React.lazy(() => import("@pages/TopRated")),
  },
];
