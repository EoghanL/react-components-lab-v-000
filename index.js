const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const pCreator = function(text){
  return React.createElement('p', {}, `${text}`)
}

const liGenerator = function(array){
  return array.map((element) => React.createElement('li', {}, element))
}

const innerStrong = React.createElement('strong', {}, 'right in front of you.')

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', { className: 'oldercoaster'}, [
      pCreator('Two grannies having the time of their life!'),
      pCreator('Passengers:'),
      React.createElement('ul', {}, [
        liGenerator(['Agnes', 'Muriel'])
      ])
    ])
  }
});

class InFrontOfYou extends React.Component{
  render(){
    return React.createElement('div', {}, [
      pCreator("You shouldn't look too far."),
      React.createElement('p', {}, ["Sometimes, the solution is ", innerStrong])
    ])
  }
}

class ButcherShop extends React.Component{
  render(){
    return React.createElement('div', { className: 'butcher-shop' }, [
      pCreator('Hello! We have the following products for sale today:'),
      React.createElement('ul', {}, liGenerator(BUTCHER_PRODUCTS) )
    ])
  }
}



ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);

// const OlderCoaster = React.createClass({ ALSO BROKE TEST NUMBER 2
//   render() {
//     return React.createElement('div', { className: 'oldercoaster' }, [
//       React.createElement('p', {}, 'Two grannies having the time of their life!'),
//       React.createElement('p', {}, 'Passengers:'),
//       React.createElement('ul', {}, [
//         React.createElement('li', {}, 'Agnes'),
//         React.createElement('li', {}, 'Muriel'),
//       ])
//     ]);
//   }
// });
