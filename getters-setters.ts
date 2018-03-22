// ES5
var MyComponent = (function() {
  var MyComponent = function() {
    this._name = 'Josh';
  };
  Object.defineProperty(MyComponent.prototype, 'name', {
    get: function() {
      return this._name;
    },
    set: function(name) {
      this._name = name;
    },
    enumerable: true,
    configurable: true
  });
  return MyComponent;
})();

var myComp = new MyComponent();
console.log(`ES5: ${myComp.name}`); //get => 'Josh'
myComp.name = 'Tracey'; //set => 'Tracey'
console.log(`ES5: ${myComp.name}`) //get => 'Tracey'


// ES6
class MyComponent2 {

  _name = 'Josh';

  get name() {
    return this._name;
  }
  
  set name(name) {
    this._name = name;
  }

};

let myComp2 = new MyComponent2();
console.log(`ES6+: ${myComp2.name}`); //get => 'Josh'
myComp2.name = 'Tracey'; //set => 'Tracey'
console.log(`ES6+: ${myComp2.name}`) //get => 'Tracey'

// Angular + Typescript
@Component({})
export class DateComponent {
  private _dateObject: Date;

  get date() {
    return `The date is ${this._dateObject}`;
  }
  
  @Input() set date(date: number) {
    // assuming `date` is something like 1506439684321
    this._dateObject = new Date(date);
  }

}
