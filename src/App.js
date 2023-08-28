const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt me"),
    React.createElement(Pet, {
      animal: "DOG",
      name: "Luna",
      breed: "Havanses",
    }),
    React.createElement(Pet, {
      animal: "snake",
      name: "Katraj",
      breed: "python",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "pepper",
      breed: "Cockatiel",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
