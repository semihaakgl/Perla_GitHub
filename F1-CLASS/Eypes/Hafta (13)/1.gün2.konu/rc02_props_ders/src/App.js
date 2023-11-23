import Msg from "./components/Msg";
import Person from "./components/Person";

function App() {
  return (
    <div>
      {/* <Msg name="Ali Can Meşe" /> */}
      <Person
        name="Emily Kurnikov"
        img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        tel="+49 123 45 68"
      />
      <Person
        name="John Steven"
        img="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
        tel="+49 123 45 78"
      />
      <Person
        name="Sumany Kirinihni"
        img="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
        tel="+49 123 45 78"
      />
    </div>
  );
}

export default App;
