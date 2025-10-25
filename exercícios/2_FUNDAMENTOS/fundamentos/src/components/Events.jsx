import React from "react";

const Events = () => {

  const handleClick = (e) => {
    console.log(e)
    console.log("Executou")
  }




  return (
    <div>
      <div>
        <button onClick={() => console.log('Testando função')}>Clique aqui</button>
      </div>
      {/* 7 - Evento da função */}
      <div>
        <button onClick={handleClick}>Clique aqui com função!</button>
      </div>
    </div>
  );
};

export default Events;
