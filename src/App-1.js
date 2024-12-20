import { useState } from "react";
import NavBarMovies from "./Components-1/NavMovies";
import ListMovies from "./Components-1/ListMovies";
import AddMovies from "./Components-1/AddMovies";
import FilterMovies from "./Components-1/FilterMovies";

function App1(){
    const [movies,setMovies] = useState([
        {
          title: "Inception",
          description: "A thief with the extraordinary ability to enter people's dreams and extract their deepest secrets is given an almost impossible task. He must plant an idea into a target's subconscious, a process called 'inception.' As he assembles a skilled team of dream manipulators, they venture into a layered dream world where the line between reality and illusion blurs. With high stakes and his own haunting past chasing him, every move becomes a matter of life and death.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
          rating: 4.8,
          id: Math.random()
        },
        {
          title: "The Dark Knight",
          description: "In Gotham City, crime has taken over the streets, but hope rises as Batman continues his relentless fight against injustice. His greatest challenge emerges in the form of the Joker, a cunning and chaotic criminal mastermind who seeks to destroy the city and everything Batman stands for. As the Joker's plans spiral out of control, alliances are tested, and Batman must confront the moral dilemmas of his double life as Bruce Wayne and the Dark Knight.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          rating: 3,
          id: Math.random()
        },
        {
          title: "Interstellar",
          description: "Earth is on the brink of collapse, facing famine and climate disasters that threaten humanity's survival. A group of explorers led by Cooper, a former pilot turned farmer, is sent on a daring mission to travel through a newly discovered wormhole near Saturn. Their goal is to find a habitable planet to ensure the survival of the human race. As they navigate the vastness of space and confront the limits of human endurance, they face difficult choices, personal sacrifices, and the mysteries of time and love.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          rating: 4.7,
          id: Math.random()
        },
        {
          title: "The Matrix",
          description: "Thomas Anderson, a seemingly ordinary computer programmer by day and hacker known as 'Neo' by night, discovers that his entire life is a lie. The world he knows is a simulated reality controlled by machines, while humans are harvested for energy. With the help of the enigmatic Morpheus and the fierce Trinity, Neo learns about his destiny as 'The One' and embarks on a journey to free humanity from the oppressive grip of the Matrix. The fight for freedom tests his courage, skills, and understanding of reality.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
          rating: 4.6,
          id: Math.random()
        },
        {
          title: "Parasite",
          description: "In a deeply divided society, the wealthy Park family and the impoverished Kim family are brought together by a series of cunning deceptions. The Kim family infiltrates the Park household, posing as unrelated, highly qualified individuals. As their lives intertwine, tensions rise and the façade of harmony begins to crumble. What starts as a darkly comedic con spirals into a shocking exploration of greed, class disparity, and the human condition, culminating in a heart-stopping confrontation.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          rating: 4.5,
          id: Math.random()
        },
        {
          title : 'Bolice',
          description : "Après avoir été mis à l'écart, le chef du gouvernement tunisien décide de regrouper l'unité spéciale 'Bolice' suite à une menace nucléaire qui a secoué le monde entier. Les retrouvailles sont chaleureuses. Ils retrouvent rapidement leur synergie et se lancent aussitôt dans la mission. L'objectif est de retrouver le détonateur de la bombe avant qu'il ne soit trop tard, mais celui qui détient les codes est un ancien agent du KGB, pas facile à traquer. Nos agents se lancent alors dans un tourbillon d'aventures, d'un pays à un autre, suivant les traces du malfaiteur, de Tokyo au Caire en passant par Londres. 'Bolice', le film, nous entraîne dans un voyage plein de suspense et de rebondissements, avec pour mission de sauver la terre et d'éviter la fin des temps. Comme d'habitude, l'humour sera notre toile de fond, rendant ce voyage encore plus agréable.",
          posterURL : 'https://m.media-amazon.com/images/M/MV5BN2UyZjkzMzItNjZkNi00MjkzLWJlNWEtNzk5MTYyZDU4ZWQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          rating : 4,
          id: Math.random()
        }
      ])

      const [searchedTitle, setSearchedTitle] = useState("")
      const [searchedRating, setSearchedRating] = useState(0)
    return(
    <>
    <NavBarMovies />
    <div className="search-and-add">
    <FilterMovies 
    searchedTitle={searchedTitle} setSearchedTitle={setSearchedTitle}
    searchedRating={searchedRating} setSearchedRating={setSearchedRating}/>
    <AddMovies movies={movies} setMovies={setMovies}/>
    </div>
    
    <ListMovies movies={movies} searchedTitle={searchedTitle} searchedRating={searchedRating}/>
    </>)
}

export default App1