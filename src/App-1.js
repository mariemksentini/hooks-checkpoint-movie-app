import { useState } from "react";
import NavBarMovies from "./Components-1/NavMovies";

import { Route, Routes } from "react-router-dom";
import Home from "./Components-1/Home";
import Movies from "./Components-1/Movies";
import Contact from "./Components-1/Contact";
import MovieProfile from "./Components-1/MovieProfile";

function App1(){
    const [movies,setMovies] = useState([
        {
          title: "Inception",
          description: "A thief with the extraordinary ability to enter people's dreams and extract their deepest secrets is given an almost impossible task. He must plant an idea into a target's subconscious, a process called 'inception.' As he assembles a skilled team of dream manipulators, they venture into a layered dream world where the line between reality and illusion blurs. With high stakes and his own haunting past chasing him, every move becomes a matter of life and death.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
          trailerURL : "https://www.youtube.com/embed/YoHD9XEInc0?si=sWc_jgE7es4OjIPQ",
          rating: 2.5,
          id: Math.random()
        },
        {
          title: "The Dark Knight",
          description: "In Gotham City, crime has taken over the streets, but hope rises as Batman continues his relentless fight against injustice. His greatest challenge emerges in the form of the Joker, a cunning and chaotic criminal mastermind who seeks to destroy the city and everything Batman stands for. As the Joker's plans spiral out of control, alliances are tested, and Batman must confront the moral dilemmas of his double life as Bruce Wayne and the Dark Knight.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          trailerURL : 'https://www.youtube.com/embed/EXeTwQWrcwY?si=5CF-LHFGcopT9Kpw',
          rating: 3,
          id: Math.random()
        },
        {
          title: "Interstellar",
          description: "Earth is on the brink of collapse, facing famine and climate disasters that threaten humanity's survival. A group of explorers led by Cooper, a former pilot turned farmer, is sent on a daring mission to travel through a newly discovered wormhole near Saturn. Their goal is to find a habitable planet to ensure the survival of the human race. As they navigate the vastness of space and confront the limits of human endurance, they face difficult choices, personal sacrifices, and the mysteries of time and love.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          trailerURL:"https://www.youtube.com/embed/2LqzF5WauAw?si=PoDGiORy4_YPwiOP",
          rating: 4.5,
          id: Math.random()
        },
        {
          title: "The Matrix",
          description: "Thomas Anderson, a seemingly ordinary computer programmer by day and hacker known as 'Neo' by night, discovers that his entire life is a lie. The world he knows is a simulated reality controlled by machines, while humans are harvested for energy. With the help of the enigmatic Morpheus and the fierce Trinity, Neo learns about his destiny as 'The One' and embarks on a journey to free humanity from the oppressive grip of the Matrix. The fight for freedom tests his courage, skills, and understanding of reality.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
          trailerURL : "https://www.youtube.com/embed/vKQi3bBA1y8?si=vJpaCNU94K1MYgCL",
          rating: 5,
          id: Math.random()
        },
        {
          title: "The Prestige",
          description: "Set in Victorian London, two rival magicians, Robert Angier and Alfred Borden, engage in an intense competition to create the ultimate stage illusion. As their rivalry escalates, they resort to sabotage, deceit, and darker means to outdo each other. The obsession to unveil each other's secrets leads to unforeseen consequences, blurring the lines between magic, science, and morality.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
          trailerURL: "https://www.youtube.com/embed/o4gHCmTQDVI?si=4tNTG7xs2pATlVh1",
          rating: 4,
          id: Math.random()
        },
        {
          title: "Blade Runner 2049",
          description: "In a dystopian future where bioengineered humans known as replicants serve society, Officer K, a Blade Runner, uncovers a long-buried secret that threatens to plunge what's left of society into chaos. As he investigates, he discovers connections to Rick Deckard, a former Blade Runner who has been missing for decades, leading to revelations about identity, humanity, and the nature of reality.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
          trailerURL: "https://www.youtube.com/embed/gCcx85zbxz4?si=h1ZZlhfUFnZemEc8",
          rating: 4.5,
          id: Math.random()
        },
        {
          title: "Fight Club",
          description: "An unnamed narrator, disillusioned with his corporate job and consumer-driven life, forms an underground fight club with the enigmatic and anarchistic Tyler Durden. As the group grows into an anti-materialist movement, the narrator begins to uncover disturbing truths about his relationship with Tyler and the group's true purpose, leading to a shocking revelation.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
          trailerURL: "https://www.youtube.com/embed/qtRKdVHc-cE?si=5A4CX6zGbHh9AQBm",
          rating: 4.8,
          id: Math.random()
        },
        {
          title: "Avatar",
          description: "On the lush alien world of Pandora, a paraplegic Marine, Jake Sully, is tasked with infiltrating the Na'vi, the indigenous population, by using an avatar body. As he learns their ways and forms a bond with Neytiri, a Na'vi warrior, Jake is torn between following orders to exploit Pandora's resources and fighting to protect the planet and its people.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
          trailerURL: "https://www.youtube.com/embed/6ziBFh3V1aM?si=kKmTPsH5vDWW4KbH",
          rating: 4.2,
          id: Math.random()
        },
        {
          title: "Gladiator",
          description: "After being betrayed and left for dead, Roman General Maximus Decimus Meridius is sold into slavery and forced to become a gladiator. Driven by a desire for revenge against Emperor Commodus, who murdered his family, Maximus rises through the ranks of the arena to challenge the corrupt regime and restore honor to Rome.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_.jpg",
          trailerURL: "https://www.youtube.com/embed/owK1qxDselE?si=KHgONFODWBF31wKe",
          rating: 5,
          id: Math.random()
        },     
        {
          title: "Parasite",
          description: "In a deeply divided society, the wealthy Park family and the impoverished Kim family are brought together by a series of cunning deceptions. The Kim family infiltrates the Park household, posing as unrelated, highly qualified individuals. As their lives intertwine, tensions rise and the façade of harmony begins to crumble. What starts as a darkly comedic con spirals into a shocking exploration of greed, class disparity, and the human condition, culminating in a heart-stopping confrontation.",
          posterURL: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          trailerURL : "https://www.youtube.com/embed/SEUXfv87Wpk?si=A7NKYNIpifEkTfrK",
          rating: 4.5,
          id: Math.random()
        },
        {
          title : 'Bolice',
          description : "Après avoir été mis à l'écart, le chef du gouvernement tunisien décide de regrouper l'unité spéciale 'Bolice' suite à une menace nucléaire qui a secoué le monde entier. Les retrouvailles sont chaleureuses. Ils retrouvent rapidement leur synergie et se lancent aussitôt dans la mission. L'objectif est de retrouver le détonateur de la bombe avant qu'il ne soit trop tard, mais celui qui détient les codes est un ancien agent du KGB, pas facile à traquer. Nos agents se lancent alors dans un tourbillon d'aventures, d'un pays à un autre, suivant les traces du malfaiteur, de Tokyo au Caire en passant par Londres. 'Bolice', le film, nous entraîne dans un voyage plein de suspense et de rebondissements, avec pour mission de sauver la terre et d'éviter la fin des temps. Comme d'habitude, l'humour sera notre toile de fond, rendant ce voyage encore plus agréable.",
          posterURL : 'https://m.media-amazon.com/images/M/MV5BN2UyZjkzMzItNjZkNi00MjkzLWJlNWEtNzk5MTYyZDU4ZWQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          trailerURL: "https://www.youtube.com/embed/BZyC2M5UE9w?si=d4-1dtE5WxVuW-sm",
          rating : 4,
          id: Math.random()
        }
      ])

      const [searchedTitle, setSearchedTitle] = useState("")
      const [searchedRating, setSearchedRating] = useState(0)
    return(
    <>
    <NavBarMovies />
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" 
      element={<Movies searchedTitle={searchedTitle} setSearchedTitle={setSearchedTitle} 
      searchedRating={searchedRating} setSearchedRating={setSearchedRating} 
      movies={movies} setMovies={setMovies} />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/MovieProfile/:id' element={<MovieProfile movies={movies}/>}/>
    </Routes>
    </>)
}

export default App1