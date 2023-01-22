class Rectangle {
    constructor(length, height, breadth) {
        this.length = length;
        this.height = height;
        this.breadth = breadth;
    }

    calcArea() {
        return this.length * this.height;
    }

    calcPerimeter() {
        return 2 * (this.length + this.height);
    }

}

let rectangle = new Rectangle (10, 20, 15);

console.log(rectangle.calcArea()); // Answer = 200
console.log(rectangle.calcPerimeter()); // Answer = 60