import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';
import GameForm from './GameForm';
import './App.css';


export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();
  // here's the state you'll need:
    // title;
  const [title, setTitle] = useState('');
    // genre;
  const [genre, setGenre] = useState('');
    // designer;
  const [designer, setDesigner] = useState('');
    // description;
  const [description, setDescription] = useState('');
    // minPlayers;
  const [minPlayers, setMinPlayers] = useState('');
    // maxPlayers;
  const [maxPlayers, setMaxPlayers] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    const game = {
      title, 
      genre, 
      designer, 
      description, 
      min_players: minPlayers, 
      max_players: maxPlayers
    };

    await createGame(game);
    // use history.push to send the user to the list page
    history.push('/board-games');
  }

  return (
    <div>
      <GameForm
        submitGame={handleSubmit}
        title={title}
        setTitle={setTitle}
        genre={genre}
        setGenre={setGenre}
        designer={designer}
        setDesigner={setDesigner}
        description={description}
        setDescription={setDescription}
        minPlayers={minPlayers}
        setMinPlayers={setMinPlayers}
        maxPlayers={maxPlayers}
        setMaxPlayers={setMaxPlayers}/>
    </div>
  );
}
