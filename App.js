/**
 *
 *<div id="parent">
  <div id="child">
    <h1> I'm H1 tag </h1>
  </div>
  <div id="child">
    <h1> I'm H1 tag </h1>
  </div>
</div>
 *
 *
 *
 *
 */

// const heading = React.createElement(
//   // its not a h1 tag its a object
//   "h1",
//   { id: "heading" }, //passing attributes to the element
//   "Hello World from React!"
// );

// react element (object) =>  HTML (Browser Understands)
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im a h1 tag"),
    React.createElement("h2", {}, "Im a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im a h1 tag"),
    React.createElement("h2", {}, "Im a h2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
