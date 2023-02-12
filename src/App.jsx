import Navbar from './components/Navbar'
import Cards from './components/Cards'
import data from './data'
import './App.css'

function App() {

  const dataCards = data.map((data) => {
    return <Cards data={data} key={data.id}/>
  })

  return (
    <div className="App">
      <Navbar />
      <section>
        {dataCards}
      </section>
    </div>
  )
}

export default App
