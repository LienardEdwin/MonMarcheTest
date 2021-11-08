const API_TOKEN = "800cef22d5aabe191dc29f79822169da";

export function getFilmsFromApiWithSearchedText (text: string) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getFilmsByPopularity(){
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_TOKEN
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getFilmById(id: string){
  const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
