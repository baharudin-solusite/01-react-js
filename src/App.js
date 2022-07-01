// import data/halaman
import SelamatDatang from './components/SelamatDatang';
import './App.css';
import SelamatMalam from './components/SelamayMalam';
// Import gambar
import BurungHatu from "./img/burung-hantu.jpg"
function App() {
  // tempat membuat Variabel sebelum return
  let pulang = "ke kampung halaman";
  const perkalian = 9 * 9;
  // const Click = () => {
  //   console.log("ayam")
  // }
  const handleClick = () => {
    console.log("burung hantu")
  }

  // conditional
  const isLogin = true

  // map
  const data = [
   {
    orang:"aurel",
   }, {orang : "anton",

   },{orang : "budi" }
  ]


  return (
    // JSX
    // react membutuhkan pembunggkus untuk parentnya
    <div className="App">
      <header className="App-header">
        <SelamatDatang/>  
      
        {/* url gambar src */}
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


          {/* Event */}
        {/* Pembuatan Button secara inlane */}
        <button onClick={() => console.log("inlane Button")}>Inlane Button</button>     
        {/* pembuattan button secara internal */}
        <button onClick={handleClick}>Tes</button>
        {/* checkbox */}
        <input type={"checkbox"} onChange = {() => console.log("ayam")} />
        {/* input form */}
        <input type={"text"} onChange = {(event) => console.log(event.target.value)}/>


        {/* conditional */}
        {/* codisional yang bisa dipakai pada React Js Ternari operator */}
        {isLogin ? <p>sudah login</p> : <p>belum login</p> }
        {/* maping menampilkan Array of object */}
        {data.map ((item,index) => ( 
          <h1 key={index}>{item.orang}</h1>
        ))}
      </header>   
    </div>
  );
}

export default App;
