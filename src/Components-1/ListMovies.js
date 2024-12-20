import CardMovie from "./CardMovie"

function ListMovies({movies, searchedTitle, searchedRating}){
    const x = movies
    .filter((el,i,t)=> el.title.toUpperCase().includes(searchedTitle.toUpperCase()))
    .filter((el,i,t)=> el.rating >= searchedRating) 

    return(<div className="movies-wrapper">
    {x.length >0 ?  x.map((el) => (<CardMovie el={el} key={el.id}/>)) : <h1>Not found</h1>}
    </div>)
}
export default ListMovies