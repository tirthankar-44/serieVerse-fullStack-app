import { useState } from 'react'
import './App.css'

import Item from './components/Item.jsx';

function App() {
  const [displayList, setDisplayList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [animationClicked, setAnimationClicked] = useState(false);
  const [liveActionClicked, setLiveActionClicked] = useState(false);


  const handleAllClick = () => {
    console.log("Clicked All");
    fetch("https://serie-verse-full-stack-app-server.vercel.app/all")
      .then(res => res.json())
      .then(data => {
        setDisplayList(data);
      })
      .catch(err => console.log('There was some error in fetching', err));

    setSelected([]);
    console.log(selected);
  }


  const handleAnimationClick = () => {
    console.log("Clicked Animation");   

    setAnimationClicked(true);
    if(liveActionClicked) setLiveActionClicked(false);

    fetch("https://serie-verse-full-stack-app-server.vercel.app/animation")
      .then(res => res.json())
      .then(data => {
        setDisplayList(data);
      })
      .catch(err => console.log('There was some error in fetching', err));    

    setSelected([]);
    console.log(selected);
  }


  const handleLiveActionClick = () => {
    console.log("Clicked Live Action"); 
    
    setLiveActionClicked(true);
    if(animationClicked) setAnimationClicked(false);

    fetch("https://serie-verse-full-stack-app-server.vercel.app/live-action")
      .then(res => res.json())
      .then(data => {
        setDisplayList(data);
      })
      .catch(err => console.log('There was some error in fetching', err));

    setSelected([]);
    console.log(selected);
  }


  const handleActionClick = () => {
    console.log("Clicked Action");
    const genre = "Action";

    if(animationClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/animation/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else if(liveActionClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/live-action/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else{
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/all`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data.filter(item => item.genre == "Action"));
        })
        .catch(err => console.log('There was some error in fetching', err));
    }

    setSelected([]);
    console.log(selected);
  }


  const handleAdventureClick = () => {
    console.log("Clicked Adventure");
    const genre = "Adventure";

    if(animationClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/animation/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else if(liveActionClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/live-action/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else{
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/all`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data.filter(item => item.genre == "Adventure"));
        })
        .catch(err => console.log('There was some error in fetching', err));
    }

    setSelected([]);
    console.log(selected);
  }


  const handleComedyClick = () => {
    console.log("Clicked Comedy");
    const genre = "Comedy";

    if(animationClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/animation/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else if(liveActionClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/live-action/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else{
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/all`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data.filter(item => item.genre == "Comedy"));
        })
        .catch(err => console.log('There was some error in fetching', err));
    }

    setSelected([]);
    console.log(selected);
  }


  const handleMatureClick = () => {
    console.log("Clicked Mature");
    const genre = "Mature";

    if(animationClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/animation/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else if(liveActionClicked){
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/live-action/${genre}`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data);
        })
        .catch(err => console.log('There was some error in fetching', err));
    }
    else{
      fetch(`https://serie-verse-full-stack-app-server.vercel.app/all`)
        .then(res => res.json())
        .then(data => {
          setDisplayList(data.filter(item => item.genre == "Mature"));
        })
        .catch(err => console.log('There was some error in fetching', err));
    }

    setSelected([]);
    console.log(selected);
  }


  const handleSelection = (id) => {
    
    let sel = [...selected]
    let pos = sel.indexOf(id)

    if(pos === -1) sel.push(id)
    else{
      sel = sel.filter(val => val != id)
    }
    // else sel.splice(pos, 1)

    setSelected(sel);
    console.log(selected);
  }


  return (
    <div style={{justifyContent: 'center', textAlign: "center", display: "grid"}}>
      <h1>SerieVerse</h1>
      <h2>Find information about all the best series across several genres!</h2>      
      <button onClick={() => handleAllClick()}>See all series</button>
      <div style={{
        border: "2px solid black", 
        borderRadius: "8px", 
        justifyContent: "center", 
        paddingTop: "10px", 
        paddingBottom: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "rgb(15, 34, 49)",
        width: "100%"}}>
      <button onClick={() => handleAnimationClick()} style={{marginRight:"5px"}}>Animation</button>
      <button onClick={() => handleLiveActionClick()} style={{marginLeft:"5px"}}>Live Action</button>
      </div>
      <div style={{
        border: "2px solid black", 
        borderRadius: "8px", 
        justifyContent: "center", 
        paddingTop: "10px", 
        paddingBottom: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "rgb(15, 34, 49)"}}>
      <button onClick={() => handleActionClick()} style={{marginRight:"5px"}}>Action</button>
      <button onClick={() => handleAdventureClick()} style={{marginLeft:"5px", marginRight:"5px"}}>Adventure</button>
      <button onClick={() => handleComedyClick()} style={{marginLeft:"5px", marginRight:"5px"}}>Comedy</button>
      <button onClick={() => handleMatureClick()} style={{marginLeft:"5px"}}>Mature</button>
      </div>
      <h3 style={{width: "100%", fontWeight: "normal"}}>Click on any item in list to see how I have rated them</h3>
      <li>
        <ul>
          {displayList.map((item, ind) => {
            return (
              <>
                <div style={{display: "flex", flexDirection: "row"}} onClick={() => handleSelection(item.name)}>
                  <h3>{item.name}</h3>
                  <span>+</span>
                </div>
                {selected.indexOf(item.name) !== -1 && <Item key={ind} rating={item.rating}/>}
              </>
            )
          })}
        </ul>
      </li>
    </div>
  )
}

export default App
