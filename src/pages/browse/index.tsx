import { MovieRaw } from "utils/map-movies";
import { MoviesComplete } from "utils/map-movies-similar";
import { TvShowRaw } from "utils/map-tv-shows";
import { TvShowsComplete } from "utils/map-tv-shows-similar";
import { Browser } from "templates/Browser";
import Head from "next/head";

import popularMoviesSimilar from "../../fetchedData/popular";
import topRatedMoviesSimilar from "../../fetchedData/topratedmovies";
import popularTvShowsSimilar from "../../fetchedData/populartvshows";
import topRatedTvShowsSimilar from "../../fetchedData/topratedtvshows";
import trendingTvShowsFiltered from "../../fetchedData/trending";

export type MoviesRawData = {
  page: number;
  results: MovieRaw[];
};

export type TvShowsRawData = {
  page: number;
  results: TvShowRaw[];
};

type BrowserProps = {
  popularMoviesSimilar: MoviesComplete[] | TvShowsComplete[];
  topRatedMoviesSimilar: MoviesComplete[] | TvShowsComplete[];
  popularTvShowsSimilar: MoviesComplete[] | TvShowsComplete[];
  topRatedTvShowsSimilar: MoviesComplete[] | TvShowsComplete[];
  trendingTvShowsFiltered: MoviesComplete[] | TvShowsComplete[];
};

export default function Browse() {
  return (
    <>
      <Head>
        <title>Início - Netflix</title>
      </Head>
      <Browser
        popularMoviesSimilar={popularMoviesSimilar}
        topRatedMoviesSimilar={topRatedMoviesSimilar}
        popularTvShowsSimilar={popularTvShowsSimilar}
        topRatedTvShowsSimilar={topRatedTvShowsSimilar}
        trendingTvShowsFiltered={trendingTvShowsFiltered}
      />
    </>
  );
}
