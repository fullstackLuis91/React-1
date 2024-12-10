
import './App.css'
import Person from './components/Person/Person'
import Header from './components/Restaurant/Header'
import Home from './components/Restaurant/Home'



function App() {

  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  
 

  return (
   
    <div>
        < Person name = "Luis"  surname = "Rioja" age = "33" />
        < Person name = "Alberto" surname = "Chacón" age = "30" />
        < Person name = "Victor" surnmae = "Pons" age = "38" />
        < Home dishes={dishes}/>
        < Header/>
    </div>
  )
}

export default App
