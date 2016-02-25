calculateHeight = function(width){
  if (width < 500){
    return width;
  } else if (width >= 500){
    return width / 2;
  } else if (width >= 1000){
    return width / 3;
  } else if (width >= 1500){
    return width / 4;
  } else if (width >= 2000){
    return width / 5;
  }
};
