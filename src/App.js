import React, { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/Details";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "beasts of no nation (2015)",
      posterurl:
        "https://alternativemovieposters.com/wp-content/uploads/2019/05/alex_beasts.jpg",
      description:
        "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/2xb9Ty-1frw?autoplay=1",
    },
    {
      id: 2,

      name: "13 hours in benghazi (2016)",
      posterurl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bf2e038-2a49-42c5-a0d1-8d73d0013952/ddbfpgd-57d93005-edac-4121-aeda-5249b1b5a825.jpg/v1/fill/w_1024,h_1183,q_75,strp/13_hours___the_secret_soldiers_of_benghazi_movie_p_by_fidi84_ddbfpgd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4MyIsInBhdGgiOiJcL2ZcLzNiZjJlMDM4LTJhNDktNDJjNS1hMGQxLThkNzNkMDAxMzk1MlwvZGRiZnBnZC01N2Q5MzAwNS1lZGFjLTQxMjEtYWVkYS01MjQ5YjFiNWE4MjUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.l4OoAgS03vmcqSZF2z8870C_J8GyUyQdza7nQfDRrtM",
      description:
        "A security team consisting of six members fights to defend an American diplomatic compound in Benghazi, Libya, against a wave of terrorist attacks.",
      rating: 4,
      trailer: "https://www.youtube.com/embed/5MBjAN7jqsQ?autoplay=1",
    },
    {
      id: 3,

      name: "The Circle (2017)",
      posterurl:
        "https://fr.web.img6.acsta.net/pictures/17/06/02/15/21/575672.jpg",
      description:
        "Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could change the world, she realises its adverse consequences.",
      rating: 2,
      trailer: "https://www.youtube.com/embed/zH0E69gtQtI?autoplay=1",
    },
    {
      id: 4,

      name: "Inception (2010)",
      posterurl:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_french_original_film_art_256f6a57-c282-44ba-872b-fb1eedb5b32b_1200x.jpg?v=1601921609",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rating: 3,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1",
    },
    {
      id: 5,

      name: "Shutter Island (2010)",
      posterurl:
        "data:image/jpeg;base64,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",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/5iaYLCiq5RM?autoplay=1",
    },
    {
      id: 6,

      name: "Warcraft (2016)",
      posterurl:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Warcraft_Teaser_Poster.jpg",
      description:
        "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.",
      rating: 1,
      trailer: "https://www.youtube.com/embed/2Rxoz13Bthc?autoplay=1",
    },
    {
      id: 7,

      name: "The Godfather (1972)",
      posterurl:
        "https://i.pinimg.com/originals/7f/bf/39/7fbf396b1234209ed0c887b8b932476f.jpg",
      description:
        "The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/sY1S34973zA?autoplay=1",
    },
    {
      id: 8,

      name: "Taxi Driver (1976)",
      posterurl:
        "https://static.displate.com/857x1200/displate/2020-07-06/6378753f0fa7d0cd58d616ed0dd0ef8c_824089360fc99361ea5ce22c58be24af.jpg",
      description:
        "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
      rating: 3,
      trailer: "https://www.youtube.com/embed/UUxD4-dEzn0?autoplay=1",
    },
    {
      id: 9,

      name: "Fight Club (1999)",
      posterurl:
        "https://i.pinimg.com/originals/86/55/80/865580314a24d809e6fb0f12ce72e738.jpg",
      description:
        "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/O1nDozs-LxI?autoplay=1",
    },
    {
      id: 10,

      name: "The Lord of the Rings (2001)",
      posterurl:
        "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg",
      description:
        "The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo?autoplay=1",
    },
    {
      id: 11,

      name: "Unacknowledged (2017)",
      posterurl:
        "https://m.media-amazon.com/images/I/71WrGcXbFTL._AC_SY741_.jpg",
      description:
        "Disclosure Project founder Dr. Steven M. Greer offers evidence of extraterrestrial contact, including top-secret testimonials, documents and never-before-seen UFO footage.",
      rating: 4,
      trailer: "https://www.youtube.com/embed/XMnPKVbgH60?autoplay=1",
    },
    {
      id: 12,

      name: "Dachra (2018)",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BZDBmN2ZhZmMtM2M2Mi00N2ZmLThmMjctY2E1ZjM2MDQ0NmQ2XkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_.jpg",
      description:
        "A young journalism student and her friends become trapped in an isolated village while trying to solve a gruesome criminal case that is over 25 years old.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/iPSrkGu62lE?autoplay=1",
    },
    {
      id: 13,

      name: "Paper Lives (2021)",
      posterurl:
        "https://netnaija.xyz/wp-content/uploads/2021/03/Paper-Lives-2021-Turkish-Netnaija.xyz_.jpg",
      description:
        "Mehmet runs a solid waste warehouse in an impoverished Istanbul neighbourhood, where he helps everyone in need, especially homeless children and teenagers. One day, Mehmet meets a homeless 8-year-old boy who changes his life.",
      rating: 2,
      trailer: "https://www.youtube.com/embed/lXdSaVK-vzs?autoplay=1",
    },
    {
      id: 14,

      name: "Seaspiracy (2021)",
      posterurl:
        "https://occ-0-2954-2568.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbNoay-wTWFKGgVzV107B9xclcvm6TkdgIhuGuk5jcf40WS1eHGAUYErM8VV4TZQgtq_5Z1irqBbdsQGNCrp7JKiUhWF4JMkwjVMs4b9i2NB6wB0su2pVgOsYeJnig.jpg",
      description:
        "Seaspiracy is a 2021 documentary film about the environmental impact of fishing directed by and starring Ali Tabrizi, a British filmmaker. The film premiered on Netflix globally in March 2021 and garnered immediate attention in several countries.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/1Q5CXN7soQg?autoplay=1",
    },
    {
      id: 15,

      name: "Kate (2021)",
      posterurl:
        "https://static1.tribute.ca/poster/660x980/kate-netflix-154816.jpg",
      description:
        "Minutieuse et prodigieusement douée, Kate est l'exemple même de la machine à tuer parfaitement rodée et au sommet de son art. Mais voilà qu'un jour elle échoue à éliminer sa cible, un yakuza à Tokyo.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/MysGjRS9jFU?autoplay=1",
    },
    {
      id: 16,

      name: "beckett (2021)",
      posterurl:
        "https://occ-0-1705-300.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABYQ7Kv8sDVWN39Gdqy7r2mvyLmjfJxR4WteSq9ESn4lxMr2Qp5aMMTp0XAIo8JD-ZtZCWaAw2pMNoAenmotX_VoGMysMkZ1umOT1MdwOzWFSTyabLMFxmCSsqj2Ptw.jpg",
      description:
        "Après un tragique accident de la route en Grèce, Beckett, un touriste américain, se retrouve pris dans un dangereux complot politique et doit fuir pour sauver sa peau.",
      rating: 5,
      trailer: "https://www.youtube.com/embed/EPT_PNucTWE?autoplay=1",
    },
  ]);

  let addMovie = (newmovie) => {
    setMovies([...movies, newmovie]);
  };
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <header>
            <div className="logo">
              <img
                src="https://fontmeme.com/permalink/210923/0355b7f2273606f0fd282cbfc6ec503a.png"
                alt="logo"
                border="0"
              />
            </div>
            <AddMovie addMovie={addMovie} />
          </header>
          <div>
            <MovieList movies={movies} />
          </div>
        </Route>
        <Switch>
          <Route exact path="/detail/:ID">
            <Detail movies={movies} />
          </Route>
        </Switch>
      </Router>
      <footer className="footer">
        {" "}
        © Copyright All Reserved To HSBEST.TN{" "}
      </footer>
    </div>
  );
}

export default App;
