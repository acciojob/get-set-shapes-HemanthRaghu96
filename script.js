//complete this code
class Rectangle {
  constructor(width, height) {
    this.mywidth = width;
    this.myheight = height;
  }
  get width() {
    return this.mywidth;
  }
  get height() {
    return this.myheight;
  }
  getArea() {
    return this.mywidth * this.myheight;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.myside = side;
  }
  getPerimeter() {
    return 4 * this.myside;
  }
}
// Creating a Rectangle instance
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

// Creating a Square instance
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
