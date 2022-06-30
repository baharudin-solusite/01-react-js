import SelamatDatang from './components/SelamatDatang';
import './App.css';
import SelamatMalam from './components/SelamayMalam';
import BurungHatu from "./img/burung-hantu.jpg"
function App() {
  // tempat membuat Variabel sebelum return
  let pulang = "ke kampung halaman";
  const perkalian = 9 * 9;
  // const Click = () => {
  //   console.log("ayam")
  // }
  const handleClick = () => {
    console.log('Burung Hantu')
  }


  return (
    // JSX
    <div className="App">
      <div>
      <header className="App-header">
        
        <SelamatDatang/>  
        <button onClick={() => console.log("cobaan ke 2")}>Inlane</button>
        <button onClick={() => console.log("inlane Button")}>Inlane Button</button>     
        <button onClick={handleClick}>Tes</button>
        <img width={400} src="https://rimbakita.com/wp-content/uploads/2019/01/burung-hantu.jpg" alt='Burung Hantu'/>
        <SelamatMalam/>
        <img width={400} src={BurungHatu} alt='Burung Hantu'/>
        {/* Penggunaan class pada React yaitu menggunakan ClassName */}
        <h1 className='nama'>Baharudin</h1>
        {/* Curly Braces in JSX */}
        <h2> {7+7} </h2>
        {/* Variabel harus dipanggil Terlebih dahulu */}
        <h4> {pulang} </h4>
        <h3> {perkalian} </h3>
     
        <p> {"surabaya".toUpperCase ()} </p> 



       
      </header>
      </div>
    </div>
  );
}

export default App;
