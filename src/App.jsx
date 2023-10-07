import Journal from './components/journal'
import Navbar from './components/navbar'
import data from './data'



function App() {

  const journals = data.map(item => {
    return (
        <Journal
            key={item.id}
            {...item}
        />
    )
  })   
  return (
    <>
      <Navbar/>
      {journals}
    </>    
  )
}

export default App
