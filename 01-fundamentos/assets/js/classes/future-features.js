class Rectangle {
    #area = 0; // future feature of javascript
    constructor ( base = 0, height=0 ) {
        this.base = base;
        this.height = height;
        this.#area = base * height ;
    }

    get Area() {
        return this.#area;
    }
}

    const rectangle = new Rectangle(10,15);
    rectangle.Area = 100; // does not work as is overriden by get method.

    console.log(rectangle.Area);
