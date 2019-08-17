function Apple(weight) {
    this.weight = weight;
    this.getWeight = function () {
        alert(this.weight + "kgs");
        return this.weight;

    };

    this.setWeight = function (val) {
        this.weight = val;
    };

    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--
        }
    };
    this.isEmpty = function () {
        this.decrease();
        if (this.weight > 0) {
            return true;
        }
        return false
    };


}

function Human(name, age, gender, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;


    this.talk = function () {
        alert("Hi I am  " + this.name + ", i " + this.age + " year old ," + " I'm a " + this.gender + ", I weigh " + this.weight + " kg")
    };

    this.getWeight = function () {
        alert(this.weight + " Kg");
        return this.weight;

    };

    this.getGender = function () {
        return this.gender;
    };

    this.getAge = function () {
        return this.age;
    };


    this.eat = function (food) {
        if (food.isEmpty()) {
            this.weight++;
        } else {
            alert("It's over");
        }
    };
};

let apple = new Apple(5);

let adam = new Human("Adam",18,"Boy",60);
let eva = new Human("Eva",18,"Girl",48);



// function check() {
//
// }
