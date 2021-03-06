var items = [{
  id: 1,
  price: 10,
  name: 'bike'
},{
  id: 2,
  price: 20,
  name: 'tv'
},{
  id: 3,
  price: 100,
  name: 'laptop'
},{
  id: 4,
  price: 30,
  name: 'shirt'
}];

//map()
var ids = items.map(function(item) {
  console.log(item.id, item.name, item.price);
  return {
    id: item.id,
    name: item.name,
    price: item.price
  }
});

//filter() 
var cheapItems = items.filter(function(item) {
  return item.price <=20;
});

//reduce()
var total = items.reduce(function(prev, current) {
  console.log('prev', prev.price);
  console.log('current', current.price);
  return prev.price + current.price;
})

//using map() and reduce()
items.map(function(item) {
    return item.price;
}).reduce(function(previous, current) {
    return previous + current;
});