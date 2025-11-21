import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';


export function FormularioDeEvento( {temas, aoSubmeter}) {

  function aoFormSubmetido(formData){
    console.log('opa, esta na hora de criar um novo evento')
    const evento = {    
      capa: formData.get('capa'),
      tema: temas.find(function(item){
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('datavento')),
      titulo: formData.get('nomeEvento')    
    }
    aoSubmeter(evento)
  }
  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <label htmlFor="nomeEvento">
            Qual o nome do evento?
          </label>
          <CampoDeEntrada
            type="text"
            id='nomeEvento'
            placeholder='Summer dev hits'
            name='nomeEvento'>
          </CampoDeEntrada>
        </CampoDeFormulario>        
        <CampoDeFormulario>
          <label htmlFor="capa">
            Qual o endereco da imagem do evento?
          </label>
          <CampoDeEntrada
            type="text"
            id='capa'
            placeholder='http://algumacoisa'
            name='capa'>
          </CampoDeEntrada>
        </CampoDeFormulario>        

        <CampoDeFormulario>
          <label htmlFor="dataEvento">
            Qual a data do evento?
          </label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            placeholder=''
            name='dataEvento'>
          </CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <label htmlFor="dataEvento">
            Tema do evento
          </label>
          <ListaSuspensa id='tema' name='tema' itens={temas}>
          </ListaSuspensa>
        </CampoDeFormulario>

      </div>
      <div className='acoes'>
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}
