import './App.css'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'
import React, { useState } from 'react';

//no react, componentes sao Funcoes

function App() {



  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligencia artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }

  ]


  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no front'
    }
  ])

  function adicionarEvento(evento) {
    //eventos.push(evento)
    //console.log('eventos => ', eventos)
    setEventos([...eventos, evento])
  }


  return (
    <main>
      <header>
        <img src="/logo.png" alt=""></img>
      </header>
      <Banner></Banner>
      <FormularioDeEvento
        temas={temas}
        aoSubmeter={adicionarEvento}>
      </FormularioDeEvento>
      <section className='container'>
        {temas.map(function (tema) {
          return (
            <section key={tema.id}>
              <Tema tema={tema}></Tema>
              <div className='eventos'>
                {eventos.filter(function (evento){
                  return (evento.tema.id == tema.id)
                })
                .map(function (item, indice) {
                  return (<CardEvento evento={item} key={indice}></CardEvento>)
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App
