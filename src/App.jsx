



import Cronomrtro from './components/Cronometro/Cronomrtro.jsx'





function App() {
  
  return (
    <>
      <Cronomrtro></Cronomrtro>
      <div className="App">
        <h1>Mi Cronómetro</h1>
        <Cronomrtro />
      </div>
      <div className="footer">
        <p>© 2023 Mi Cronómetro. Todos los derechos reservados.</p>
      </div>
      <style>{`
        .App {
          text-align: center;
        }

        .footer {
          margin-top: 20px;
          padding: 10px;
          background-color: #f1f1f1;
        }
      `}</style>
    </>
  )
}

export default App
