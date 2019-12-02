console.warn("Start Part 1");
var message = "I am string";
message = "12";
var isFeatching = true;
var int = 42;
console.log(typeof message, typeof isFeatching, typeof int);
var numberArray = [0, 1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [0, 1, 1, 2, 3, 5, 8, 13];
var stringArray = ["Ура, я строка!", "Да, как и я! :)"];
var stringArray2 = ["Ура, я строка!", "Да, как и я! :)"];
stringArray.push("Еще одна...");
console.log(numberArray, numberArray2, stringArray);
var contact = ["Sanya", 10];
var variable = 42;
variable = "New String";
variable = [];
function sayName(name) {
    console.log(name);
    return null;
}
sayName("Sasha");
var login = "admin";
var id = "String";
var id2 = 5;
var some = "hello";
var some2 = null;
var some3 = undefined;
console.warn("End Part 1");
console.warn("Start Part 2");
var react1 = {
    id: "5",
    size: {
        width: 5,
        height: 10
    }
};
var react2 = {
    id: "8",
    size: {
        width: 23,
        height: 22
    }
};
react2.color = "black";
console.log(react2);
var react3 = {
    id: "123",
    size: {
        width: 10,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(react3.getArea());
console.warn("End Part 2");
console.warn("Start Part 3");
var Clock = (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
        console.log(this.time);
    };
    return Clock;
}());
var newClock = new Clock;
newClock.setTime(new Date());
console.warn("End Part 3");
console.warn("Start Part 4");
var css = {
    border: "1px solid black",
    marginTop: "5px",
    borderRadius: "6px"
};
console.warn("End Part 4");
console.warn("Start Part 5");
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReverse = Membership[1];
console.log(membership, membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "Facebook";
    SocialMedia["INSTAGRAM"] = "Instagram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
function add(a, b) {
    return a + b;
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: b, "default": a.toString() };
    }
    return { x: a, y: b };
}
;
console.log(position());
console.log(position(42));
console.log(position(10, 15));
console.warn("End Part 5");
console.warn("Start Part 6");
var Typescript = (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "] Typescript version " + this.version;
    };
    return Typescript;
}());
var Car = (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
//# sourceMappingURL=helloWorld.js.map