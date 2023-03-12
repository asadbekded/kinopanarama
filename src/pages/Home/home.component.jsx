import { useEffect, useState } from "react";
import { apis } from "../../API/API.jsx";
import { Card } from "../../components/Card/card.component.jsx";
import Animatsa from "../../assets/images/animatsa.svg";
import {
  StledPopularList,
  StyledAnimatsa,
  StyledPaginition,
} from "./home.styles.jsx";
import { Paginations } from "../../components/Paginations/paginations.component.jsx";


export const Home = () => {
  const [films, setFilms] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getTopMovie = async (pages) => {
    const res = await apis.getTopMovies(pages);
    setTotalPages(res.data.total_pages);
    setFilms(res.data.results);
  };

  useEffect(() => {
    getTopMovie(pages);
  }, [pages]);

  return (
    <div>
      {films?.length ? (
        <StledPopularList>
          {films.map((el) => (
            <Card key={el.id} el={el} />
          ))}
        </StledPopularList>
      ) : (
        <StyledAnimatsa
          src={Animatsa}
          alt="imd-animsa"
          width={200}
          height={200}
        />
      )}

      <StyledPaginition>
        <Paginations
          setPages={setPages}
          pages={pages}
          totalPages={totalPages}
        />
      </StyledPaginition>
    </div>
  );
};
