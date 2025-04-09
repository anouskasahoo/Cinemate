/*
import "./App.css";
import MovieCard from "./components/MovieCard"

function App() {

  return (
    <div>
      <MovieCard movie={{title:"Tim film", release_date: "2025"}}/>
    </div>
  )
}

export default App


function App() {
  return (
    <div>
      <h1>Hello from App</h1>
    </div>
  );
}
*/

import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  //const dummyMovie = {
  //  title: "Tim film",
  //  release_date: "2025",
  //};

  //console.log("Rendering App with movie:", dummyMovie);

  return (
    <div>
      <h1>Hello again</h1>
      <MovieCard movie={{title: "Tim film",release_date: "2025",}} />
    </div>
  );
}

export default App;

