import './titulo-formulario.estilos.css'

//props e um objeto, props.children. Pode chamar o objeto props  de qq outro nome
export function TituloFormulario(props){
  return (
    <h2 className='titulo-form'>
      {props.children}
    </h2>
  )
}

