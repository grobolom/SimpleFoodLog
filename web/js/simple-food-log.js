var app = {};

var data = "[\n  {\n    \"index\": 0,\n    \"calories\": 102,\n    \"food\": \"cillum\"\n  },\n  {\n    \"index\": 1,\n    \"calories\": 69,\n    \"food\": \"qui\"\n  },\n  {\n    \"index\": 2,\n    \"calories\": 197,\n    \"food\": \"duis\"\n  },\n  {\n    \"index\": 3,\n    \"calories\": 71,\n    \"food\": \"enim pariatur quis\"\n  },\n  {\n    \"index\": 4,\n    \"calories\": 190,\n    \"food\": \"sunt velit Lorem\"\n  },\n  {\n    \"index\": 5,\n    \"calories\": 103,\n    \"food\": \"non nulla\"\n  },\n  {\n    \"index\": 6,\n    \"calories\": 157,\n    \"food\": \"esse\"\n  },\n  {\n    \"index\": 7,\n    \"calories\": 173,\n    \"food\": \"sit est\"\n  },\n  {\n    \"index\": 8,\n    \"calories\": 93,\n    \"food\": \"reprehenderit\"\n  },\n  {\n    \"index\": 9,\n    \"calories\": 125,\n    \"food\": \"ea ullamco\"\n  },\n  {\n    \"index\": 10,\n    \"calories\": 120,\n    \"food\": \"adipisicing nisi\"\n  },\n  {\n    \"index\": 11,\n    \"calories\": 69,\n    \"food\": \"Lorem\"\n  }\n]";
app.sampleFoodEntry = JSON.parse(data);

firstFood = app.sampleFoodEntry[0];

// console.log(app.sampleFoodEntry[0].food);

var FoodEntry = React.createElement('li', {}, firstFood.food);

var root = React.createElement('div', {}, FoodEntry)
ReactDOM.render(root, document.getElementById('react-app'));

/* tests below */
// console.assert(2 < 2, 'failed asserting 1 less than 2');
