import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const user = useSelector(state => state.user)
  const [comment, setComment] = useState('')
  console.log(user)
  return (
    <div className="App">
      <header className="App-header">
        <h2>{user.name}</h2>
        <ul>
          {user.comments.map(({comment}) => <li key={comment}>{comment}</li>)}
        </ul>
        <section>
        <input type='text' placeholder='Comment...' onChange={(event)=> setComment(event.target.value)}/>
        <Button comment={comment}/>
        </section>
        
      </header>
    </div>
  );
}

export default App;
