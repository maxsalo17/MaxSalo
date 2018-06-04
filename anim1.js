var angle = 0;
  setInterval(function(){
    angle+=3;
  $("#photo").rotate(angle);
  },50);