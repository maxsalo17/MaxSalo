var angle = 0;
  setInterval(rotation,50);

  function rotation(){

      angle+=3;
    $("#photo").rotate(angle);
    
  }