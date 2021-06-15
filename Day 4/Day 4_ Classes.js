/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(size) {
        let peri = 0;
        for (var index in size) {
            peri += size[index];
        }
        this.perimter = peri;
    }
    perimeter() {
        return this.perimter;
    }
}
