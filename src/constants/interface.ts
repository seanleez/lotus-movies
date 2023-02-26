export interface IRoute {
  path: string;
  component: React.FC;
  isIndexPage?: boolean;
}

export interface INavigationItem {
  path: string;
  label: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IModeConfig {
  label: string;
  icon: string;
}

export enum CARDS_DISPLAY_MODE {
  GIRD_MODE = "Grid Mode",
  LIST_MODE = "List Mode",
}

export enum PATH {
  NOW_PLAYING = "/now-playing",
  TOP_RATED = "/top-rated",
  INVALID_PAGE = "/404",
}
