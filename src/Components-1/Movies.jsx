import AddMovies from "./AddMovies";
import FilterMovies from "./FilterMovies";
import ListMovies from "./ListMovies";

function Movies({searchedTitle,setSearchedTitle,searchedRating,setSearchedRating,movies,setMovies}){
    return(
    <>
    <div className="search-and-add">
      <FilterMovies 
      searchedTitle={searchedTitle} setSearchedTitle={setSearchedTitle} searchedRating={searchedRating} setSearchedRating={setSearchedRating}/>
      <AddMovies movies={movies} setMovies={setMovies}/>
    </div>
    
    <ListMovies movies={movies} searchedTitle={searchedTitle} searchedRating={searchedRating}/>
    </>)
}

export default Movies