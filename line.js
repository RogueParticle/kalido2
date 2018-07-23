function Line(x1,y1,x2,y2, sc, sw) {

  this.strokeColor = sc;
  this.strokeWidth = sw;

  //invert by aspect ratio
  this.ix1 = y1 * aspect;
  this.iy1 = x1 / aspect;
  this.ix2 = y2 * aspect;
  this.iy2 = x2 / aspect;

  //Octant 1 coordinates
  this.o1x1 = x1;
  this.o1y1 = y1;
  this.o1x2 = x2;
  this.o1y2 = y2;

  //Octant 2 coordinates
  this.o2x1 = width - x1;
  this.o2y1 = y1;
  this.o2x2 = width - x2;
  this.o2y2 = y2;

  //Octant 3 coordinates
  this.o3x1 = x1;
  this.o3y1 = height - y1;
  this.o3x2 = x2;
  this.o3y2 = height - y2;

  //Octant 4 coordinates
  this.o4x1 = width - x1;
  this.o4y1 = height - y1;
  this.o4x2 = width - x2;
  this.o4y2 = height - y2;

  //Octant 5 coordinates
  this.o5x1 = this.ix1;
  this.o5y1 = this.iy1;
  this.o5x2 = this.ix2;
  this.o5y2 = this.iy2;

  //Octant 6 coordinates
  this.o6x1 = width - this.ix1;
  this.o6y1 = this.iy1;
  this.o6x2 = width - this.ix2;
  this.o6y2 = this.iy2;

  //Octant 7 coordinates
  this.o7x1 = this.ix1;
  this.o7y1 = height - this.iy1;
  this.o7x2 = this.ix2;
  this.o7y2 = height - this.iy2;

  //Octant 8 coordinates
  this.o8x1 = width - this.ix1;
  this.o8y1 = height - this.iy1;
  this.o8x2 = width - this.ix2;
  this.o8y2 = height - this.iy2;


  this.show = function() {
    stroke(this.strokeColor);
    strokeWeight(this.strokeWidth);
    line(this.o1x1, this.o1y1, this.o1x2, this.o1y2);
    line(this.o5x1, this.o5y1, this.o5x2, this.o5y2);

    line(this.o2x1, this.o2y1, this.o2x2, this.o2y2);
    line(this.o6x1, this.o6y1, this.o6x2, this.o6y2);

    line(this.o3x1, this.o3y1, this.o3x2, this.o3y2);
    line(this.o7x1, this.o7y1, this.o7x2, this.o7y2);

    line(this.o4x1, this.o4y1, this.o4x2, this.o4y2);
    line(this.o8x1, this.o8y1, this.o8x2, this.o8y2);
  }
}
