const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", {}, "Hello From H1"),
    React.createElement("h1", {}, "Hello From H1"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", {}, "Hello From H1"),
    React.createElement("h1", {}, "Hello From H1"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
