import Button from "./components/Button";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import GreetingByClass from "./components/GreetingByClass";
import GreetingByFunction from "./components/GreetingByFunction";
import Nav from "./components/Nav";
import Tabular from "./components/Tabular";

function App() {
  return (
    <>
      <GreetingByClass name="Anuja" />
      <GreetingByFunction name="Anish" /> <hr /> <br />
      <Nav />
      <Button data="submit" /> <hr /> <br />
      <Form /> <hr />
      <Counter />
      <Tabular />
      <Card data={products}/>
    </>
  );
}

export default App;
