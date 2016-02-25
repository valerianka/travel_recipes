calculateHeight = function(width){
  // max number of columns is 5
  if (width > 2000) return width / 5;

  return width / Math.ceil(width / 500);
};
