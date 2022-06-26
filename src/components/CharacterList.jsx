import React, { useEffect, useState } from 'react';
import Character from './Character';
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState('false');
  const [page, setPage] = useState(1);
  function NavPage(props) {
    
    return (
      <header className='d-flex justify-content-between align-items-center'>
        <p>Page: {props.page}</p>
        <div className="contenedor-botones"><button disabled={
          props.page === 1 ? true : false
        }  onClick={() => props.setPage(props.page - 1)} className='btn btn-primary btn-sm my-2 m-2'>Page { props.page - 1}</button>
        <button onClick={() => props.setPage(props.page + 1)} className='btn btn-primary btn-sm'>Page { props.page + 1}</button></div>
      </header>
    );
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
      console.log(data.results);
    }
    fetchData();
  }, [page]);


  return (
    <div className='container'>
      <NavPage  page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='row'>
          {characters.map((character) => {
            return (
              <div key={character.id} className='col-md-4'>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
          <NavPage  page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
