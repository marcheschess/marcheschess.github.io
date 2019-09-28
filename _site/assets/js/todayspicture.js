function todayspictureindex( picturecount ){
  /* alert("todayspictureindex: " + Math.floor( Date.now() / 86400000 ) % picturecount ); */
  return ( Math.floor( Date.now() / 86400000 ) % picturecount ); 
}

