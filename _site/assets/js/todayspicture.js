function loadfig(){
  var srcs = srclist.split(',');
  //alert( "srcs: " + srcs );
  captions = captionlist.split(',');
  var index = Math.floor( Date.now() / 86400000 ) % captions.length; 
  //alert( "array length: " + captions.length );
  //alert( "index:" + index );
  //alert( "srcs: " + srcs[index] );
  //alert( captions[index] );

  $("#img").attr("src", srcs[index]);
  $("#figcaption").append( captions[index]); 
}
