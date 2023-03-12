import { useEffect, useState } from 'react';
import { apis } from '../../API/API.jsx';
import { Card } from '../../components/Card/card.component.jsx';
import { StledPopularList, StyledAnimatsa } from './popular.styles.jsx';
import Animatsa from '../../assets/images/animatsa.svg';
import { StyledPaginition } from '../Home/home.styles.jsx';
import { Paginations } from '../../components/Paginations/paginations.component.jsx';

export const Popular = () => {

  const [film , setFilm] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getPopularMovie = async (pages) => {
    const res = await apis.getPopularMovies(pages);
    setTotalPages(res.data.total_pages);
    setFilm(res.data.results)   
  }  
  useEffect(() => {
    getPopularMovie(pages)
  },[pages]);

  return (
    <div>
      {
        film?.length ? (
        <StledPopularList>
          {
         film.map((el) => (
            <Card key={el.id} el={el}/>
         ))}
        </StledPopularList> )
         : (<StyledAnimatsa src={Animatsa} alt='imd-animsa' width={200} height={200}/>)
      }

      <StyledPaginition>
              <Paginations
                setPages={setPages}
                pages={pages}
                totalPages={totalPages}
              />
      </StyledPaginition>
    </div>
  )
}
