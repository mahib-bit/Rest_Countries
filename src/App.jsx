import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(response => response.json())


  return (
    <>
      <section id="center">
        <Suspense fallback={<div>Loading...</div>}>
          <Countries countriesPromise={countriesPromise} />
        </Suspense>

      </section>
    </>
  )
}

export default App
