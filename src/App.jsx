import Titulo from "./titulo"


function app(){
  return(
    <div>
      <Titulo cor="blue" nome="Snow Y." paragrafo={true} />
      <Titulo cor="red" />
      <Titulo />
    </div>
  )
  {/* return <h1>Hello World</h1> */}
}

export default app

