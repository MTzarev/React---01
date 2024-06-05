let rootElement = document.getElementById(`root`);

let reactElement = React.createElement(`header`, {}, 
React.createElement(`h1`, {}, `Hello React`),
React.createElement(`h2`, {}, `The best framework in the world`)
);
ReactDOM.render(reactElement, rootElement);

