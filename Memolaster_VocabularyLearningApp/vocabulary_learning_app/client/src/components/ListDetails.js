const ListDetails = ({ result }) => {
  const { word, phonetics, meanings } = result;

  function playAudio() {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <div className="card mt-20">
      <div className="p-20">
        <h3 className="h3cust">Word</h3>
        <div className="flex">
          <p className="custcommon">{word}</p>
          <p className="custcommon1"> {meanings[0].partOfSpeech} </p>
          <p className="custcommon1"> {phonetics[0].text} </p>
        </div>
        <h3 className="h3cust1">Pronounciation</h3>
        <div>
          <p className="custaudio" onClick={playAudio}>
            {" "}
            play audio{" "}
          </p>
        </div>

        <div>
          <h3 className="h3cust">Meaning:</h3>
          <p className="custcommon2">{meanings[0].definitions[0].definition}</p>
        </div>

        <div>
          <h2 className="h3cust">Synonyms </h2>
          <div>
            <p className="flex custcommon3">
              {meanings[0].synonyms.slice(0, 4).map((item, index) => {
                return (
                  <span key={index} className="synonym">
                    {item}
                  </span>
                );
              })}
            </p>
            <p className="flex custcommon3">
              {meanings[0].synonyms.slice(4).map((item, index) => {
                return (
                  <span key={index} className="synonym">
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
