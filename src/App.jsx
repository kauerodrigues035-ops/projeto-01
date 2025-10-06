import { useState } from 'react'
import React from 'react'
import './App.css'
// dados mockados 
const alunosIniciais = [
  { id: 1, nome: 'Ana', idade: 20, matricula: '2023001', curso: 'Administração', periodo: 'Noturno' },
  { id: 2, nome: 'Bruno', idade: 22, matricula: '2023002', curso: 'Engenharia', periodo: 'Diurno' },
  { id: 3, nome: 'Carlos', idade: 21, matricula: '2023003', curso: 'Medicina', periodo: 'Noturno' },
  { id: 4, nome: 'Diana', idade: 23, matricula: '2023004', curso: 'Direito', periodo: 'Diurno' },
  { id: 5, nome: 'Eduardo', idade: 20, matricula: '2023005', curso: 'Arquitetura', periodo: 'Noturno' },

]




function App() {
const[alunos,setAlunos] = useState(alunosIniciais)
const[FormData, setformdata] = useState({nome: '',idade:'',matricula:'',cuso:'',periodo:'',})
const[edintando,seteditando] = useState(null)

const handlesubmit = (e) => {
e.preventDefault()
if(editando) {
  setAlunos(alunos.map(a => a.id=== edintando ? {...FormData,id:edintando} : a))
seteditando(null)
} else {

//adicionar novo aluno 
const novoAluno = {...FormData,id:Date.now()}
setAlunos([...alunos,novoAluno])

}
setformdata ({nome:'',idade:'',matricula:'',curso:'',periodo:''})

}
  




  

  return (
    <div className="App">
      <header>
        <h1>Sistema de Alunos - Senac (VITE)</h1>
        <p>Reac + Vite - Ambiente de desenvolvimento Rápido</p>
      </header>
      <div calassname='container'>
        {/*formulario*/}
<section calassname='form-section'>

<h2>{editando ? 'editar Aluno' : 'cadastrar Aluno'}</h2>
<input type="text" placeholder='nome' 
value={FormData.nome}
onChange={(e) => setformdata({...FormData, nome: e.target.value})  } />

<input type="text" placeholder='matricula'/>
value= {FormData.matricula}
onChange={(e) => setformdata ({...FormData,matricula: e.target.value})}

<form>
<section>
<div>






</div>





</section>












</form>


</section>




      </div>
    </div>
  )
}

export default App
