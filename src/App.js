import React from "react";
import "./styles.css";
import { useState } from "react";

const songsDatabase = {
  ROCK: [
    { name: "Enter Sandman ", band: "Metallica" },
    { name: "Du Hast", band: "Rammstein" },
    { name: "Crazy", band: "Aerosmith" },
    { name: "Sonne", band: "Rammstein" },
    { name: "Another one Bites the Dust", band: "Queen" },
    { name: "Ich Will", band: "Rammstein" },
    { name: "Nothing Else Matters", band: "Metallica" }
  ],

  ALT_ROCK: [
    { name: "Smells Like Teen Spirit", band: "Nirvana" },
    { name: "Creep", band: "Radio Head" },
    { name: "Come As You Are", band: "Nirvana" },
    { name: "The Fly", band: "U2" },
    { name: "Jeremy", band: "Pearl Jam" },
    { name: "Seven Nation Army", band: "The White Stripes" },
    { name: "Everlong", band: "Foo Fighters" }
  ],
  POP: [
    { name: "Billie Jean", band: "Micheal Jackson" },
    { name: "Every Breath You Take", band: "The Police" },
    { name: "Uptown Girl", band: "Billy Joel" },
    { name: "Video Killed the Radio Star", band: "The Buggles" },
    { name: "I Want it That Way", band: "The Backstreet Boys" },
    { name: "Hung Up", band: "Madonna" },
    { name: "Livin' La Vida Loca", band: "Ricky Martin" }
  ],
  DISCO: [
    { name: "Stayin' Alive", band: "Bee Gees" },
    { name: "Rasputin", band: "Boney M" },
    { name: "Dancing Queen", band: "ABBA" },
    { name: "Mamma Mia", band: "ABBA" },
    { name: "Ma Baker", band: "Boney M" },
    { name: "YMCA", band: "Village People" },
    { name: "Friday Night Fever", band: "Bee Gees" }
  ],
  REGGAE: [
    { name: "Red Red Wine", band: "U2" },
    { name: "Three Little Birds", band: "Bob Marley & The Wailers" },
    { name: "No Woman No Cry", band: "Bob Marley & The Wailers" },
    { name: "Buffalo Soldier", band: "Bob Marley & The Wailers" },
    { name: "Many Rivers to Cross", band: "Jimmy Cliff" },
    { name: "Pressure Drop", band: "Toots & The Maytals" },
    { name: "Concrete Jungle", band: "Bob Marley" }
  ],
  CLASSICAL: [
    { name: "Canon in D major", band: "Johann Pachelbel" },
    { name: "The Four Seasons", band: "Antonio Vivaldi" },
    { name: "6 Suites for Unaccompanied Cello", band: "J.S. Bach" },
    { name: "The Nutcracker", band: "Pyotr Ilych Tchaikovsky" },
    { name: "In the Hall of the Mountain King", band: "Edvard Grieg" },
    { name: "Symphony No. 5", band: "Ludwig van Beethoven" },
    { name: "Hungarian Dance No. 5", band: "Johannes Brahms" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("ROCK");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "monospace", fontSize: "80px" }}>
        Old but Gold
      </h1>
      <p style={{ fontSize: "smaller",fontFamily: "monospace" }}>
        {" "}
        I am a sucker for songs which are pretty old (from the 90's and 80's era), better known as retro songs. I have put together some of the best ones
        , you can check them out genre-wise as below. ENJOY!!{" "}
      </p>

      <div>
        {Object.keys(songsDatabase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#086972",
              borderRadius: "1rem",
              padding: "0.75rem  2rem",
              border: "1px solid #086972",
              margin: "1rem 1rem",
              color: "#a7ff83"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songsDatabase[selectedGenre].map((songss) => (
            <li
              key={songss.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {songss.name} </div>
              <div style={{ fontSize: "smaller" }}> {songss.band} </div>
            </li>
          ))}
        </ul>
      </div>



      <footer className="footer">
    <strong>YOU CAN CONNECT WITH ME ON:</strong>
    <br></br>
    <br></br>
    <a className="linkfoot" href="https://github.com/gowriljadhav">
      Github
    </a>
    <br></br>
    <br></br>
    <a className="linkfoot" href="https://twitter.com/gogo_quo">
      Twitter
    </a>
    <br></br>
    <br></br>
    <a
      className="linkfoot"
      href="https://www.instagram.com/_weirdlyabstract_/"
    >
      Instagram
    </a>
    <br></br>
    <br></br>
    <a
      className="linkfoot"
      href="https://www.linkedin.com/in/gowri-l-jadhav/"
    >
      LinkedIn
    </a>
    <br></br>
    <br></br>
  </footer>
    </div>
    

  
  );
}
