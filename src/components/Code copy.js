let name = 'Vikash';
let setName = (val) => {
  name = val;
  App();
}

let role = 'UI Developer';
let setRole = (val) => {
  role = val;
  App();
}

function Comp1(name) {
  console.log('h1 > name')
}
function Comp2(role) {
  console.log('h1 > role')
}

function App() {
  console.log('div.App')
  console.log('h1 > count')
  console.log('button > Increase');
  Comp1(name);
  Comp2(role);
}

App();
setName(1);
setRole(1);