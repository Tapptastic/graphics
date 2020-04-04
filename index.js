const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d');

class Helper {
    static sq(number) {
        return number * number;
    }
}

class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    mag() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }

    norm() {
        return new Vector(this.x / this.mag(), this.y / this.mag(), this.z / this.mag());
    }

    dot(vec) {
        return (this.x * vec.x) + (this.y * vec.y) + (this.z * vec.z);
    }

    cross(vec) {
        return new Vector((this.y * vec.z) - (this.z * vec.y), (this.z * vec.x) - (this.x * vec.z), (this.x * vec.y) - (this.y * vec.x))
    }

    distBetween(vec) {
        return Math.sqrt(Helper.sq((this.x - vec.x)) + Helper.sq(this.y - vec.y) + Helper.sq(this.x - vec.x))
    }

    angelBetween(vec) {

    }

}

class Vector2D extends Vector {
    constructor(x, y) {
        super(x, y, 0);
    }
}

const v = new Vector(1, 0, 5);
const v2 = new Vector(0,2,4);

console.log(v.distBetween(v2));

const v1 = new Vector2D(1, 2);


console.log(v);
console.log(v1)

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {

}

function render() {

}

function gameloop() {
    clearScreen();
    update();
    render();
    requestAnimationFrame(gameloop);

}