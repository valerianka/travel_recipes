calculateHeight = function(width){
  if (width > 2000) return width / 5;
  
  return width / Math.ceil(width / 500);
};
