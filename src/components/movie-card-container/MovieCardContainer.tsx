import { Loading, ScrollToTopButton } from "@components/common";
import { IMovie, CARDS_DISPLAY_MODE, PATH } from "@constants/interface";
import { useModeContext } from "@context/ModeContext";
import { useQuery } from "@hooks/useQuery";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import styles from "./MovieCardContainer.module.scss";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import CardModeList from "./CardModeList";
import CardModeGrid from "./CardModeGrid";

const QUERY_URLS = {
  [PATH.NOW_PLAYING]: "/now_playing",
  [PATH.TOP_RATED]: "/top_rated",
};

const MovieCardContainer: React.FC = () => {
  const { pathname } = useLocation();
  const url = useRef<string>(
    `/movie${QUERY_URLS[pathname as keyof typeof QUERY_URLS]}`,
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isLoading, error, handleFetchData } = useQuery(url.current);
  const { mode } = useModeContext();
  console.log(data);
  function handleSearch(value: string) {
    setSearchValue(value);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}.</div>;
  }

  if (!data) {
    return <div className={styles.error}>No data found.</div>;
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <PullToRefresh onRefresh={handleFetchData}>
        <div
          className={clsx(
            styles.container,
            mode === CARDS_DISPLAY_MODE.LIST_MODE && styles.listMode,
          )}
        >
          <ScrollToTopButton />
          {(data as any).results
            .filter((movie: IMovie) =>
              movie.title
                .toLowerCase()
                .includes(searchValue.toLocaleLowerCase()),
            )
            .map((movie: IMovie, i: number) => {
              return mode === CARDS_DISPLAY_MODE.LIST_MODE ? (
                <CardModeList key={i} movie={movie} />
              ) : (
                <CardModeGrid key={i} movie={movie} />
              );
            })}
        </div>
      </PullToRefresh>
    </>
  );
};

export default MovieCardContainer;
