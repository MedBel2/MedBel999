
import React from 'react';
import './App.css';
import MovieList from './Comp/MovieList';

function App() {
  const movies = [
    {
      id: 1,
      title: "Wednesday",
      description: "Horror",
      posterURL: "https://m.media-amazon.com/images/I/41YZTePdSOL._AC_.jpg",
      rating: 5,
      description:"While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago.",
      trailerlink:"https://www.youtube.com/embed/watch?v=Di310WS8zLk",
    },
    {
      id: 2,
      title: "Me3an",
      description: "science fiction horror",
      posterURL: "https://th.bing.com/th/id/OIP.SC4_7HPZwfIANrCLcF6AgwHaJQ?pid=ImgDet&rs=1",
      rating: 4,
      description:"After her parents are killed in a car accident, eight-year-old Cady is sent to live with her aunt Gemma, a roboticist at the high-tech Seattle toy company Funki. Gemma is covertly using the company's resources to develop M3GAN",
      trailerlink:"https://www.youtube.com/embed/watch?v=BRb4U99OU80",
    },
    {
      id: 3,
      title: "The witcher",
      description: "action",
      posterURL: "https://es.web.img2.acsta.net/pictures/19/11/22/09/33/5060052.jpg",
      rating: 5,
      description:"Witchers are once-normal humans who got mutated by a combination of medieval science and magic, which made them superhuman (more Captain America than Superman) and able to take potions too toxic for normal people.",
      trailerlink:"https://www.youtube.com/embed/watch?v=ndl1W4ltcmg",
    },
    {
      id: 4,
      title: "Inception",
      description: "Science Fiction, Action",
      posterURL: "https://www.daily-movies.ch/wp-content/uploads/2014/11/daily-movies.ch_Inception.jpeg",
      rating: 4.8,
      description:" inception » consiste à implanter une idée dans les rêves d'un homme. C'est la spécialité de Cobb, qui doit pénétrer dans le subconscient de Robert Fischer, afin de le persuader de démanteler l'empire industriel dont il va hériter.",
      trailerlink:"https://www.youtube.com/embed/watch?v=YoHD9XEInc0",
    },
    {
      id: 5,
      title: "The Shawshank Redemption",
      description: "Drama, Crime",
      posterURL: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg",
      rating: 4.9,
      description:"The film tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.",
      trailerLink:"https://www.youtube.com/embed/watch?v=NmzuHjWmXOc",
    },
    {
      id: 6,
      title: "The Dark Knight",
      description: "Action, Crime, Drama",
      posterURL: "https://www.prime1studio.com/media/catalog/product/cache/1/image/1400x1400/17f82f742ffe127f42dca9de82fb58b1/h/d/hdmmdc-02_a19.jpg",
      rating: 4.7,
      description:"The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.",
      trailerlink:"https://www.youtube.com/embed/watch?v=EXeTwQWrcwY",
    },
    {
      id: 7,
      title: "Pulp Fiction",
      description: "Crime, Drama",
      posterURL: "https://www.avoir-alire.com/local/cache-vignettes/L240xH327/arton3816-7e2d6.jpg?1682424451",
      rating: 4.6,
      description:"Deux truands, Jules Winnfield (Samuel L. Jackson) et son ami Vincent Vega (John Travolta), qui revient d'Amsterdam, ont pour mission de récupérer une mallette au contenu mystérieux et de la rapporter à Marsellus Wallace (Ving Rhames), leur patron.",
      trailerlink:"https://www.youtube.com/embed/watch?v=s7EdQ4FqbhY",
    },
    {
      id: 8,
      title: "Fight Club",
      description: "Drama",
      posterURL: "https://static.cinebel.be/img/movie/poster/full/3752_fr_fight_club_1594305685425.jpg",
      rating: 4.5,
      description:"The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
      trailerlink:"https://www.youtube.com/embed/watch?v=O1nDozs-LxI",
    },
  ];
   

 

  return (
    <div className='background'>
        <div className='background'>
      <h1>Hello, welcome! This is My Movie List:</h1>
      <MovieList movies={movies} />
      

    </div>

  </div>
);
}
 

export default App;