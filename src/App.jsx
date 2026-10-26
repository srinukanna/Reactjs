import "./App.css"
import Card from "./Card";
function App() {
  return (
    <>
     <div className="container">
        <h1> This is React </h1>
        <p> im confident in my life </p>
     </div>
     <Card product="laptop" price ="40000"></Card>
     <Card product="iphone" price ="50000"></Card>
     <Card product="android" price ="100000"></Card>
    </>
  );
}

export default App;
