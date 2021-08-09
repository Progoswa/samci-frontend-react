import React from "react";
//import ListaUsuarios from './user/ListaUsuarios'
import UsuariosAdmin from './admin/UsuariosAdmin'



const Usuarios = () => {

  return (
    <>
     <UsuariosAdmin/>
    </>
  );
};

export default Usuarios;

/*
Expresión regular para quitar acentos:
.normalize('NFD').replace(/[\u0300-\u036f]/g,"")

Funcion de buscar efectiva cuando hai Etiquetas

  const handleBuscador = (e) =>{
    const Cadena = SinTildes(e.target.value.toLowerCase());
    let tempArray=[];
    const limite = Listado.data.length
    //Buscar por Nombre
    for(let index = 0 ; index< limite; index++) {
       const search = SinTildes(Listado.data[index].first_name.toLowerCase());
       const patt = new RegExp(Cadena)
       const resp = patt.test(search)
       if(resp){
        tempArray.push(Listado.data[index])
       }
  }
  getUsers(tempArray)
  }

Para colocar Botones

{
        name: 'Actions',
        allowOverflow: true,
        cell:(column) => <button type="button" onClick={handleEdit(column)} className="btn">Editar</button>,  
    }   
    
Para cuando tienes checbox

const [thing, setThing] = useState({});
 
  const updateState = useCallback((state) => 
  {
    console.log(state)
    setThing(state)
  }
  
  );

  const handleEdit = () => {
    console.log('humm')
  }

  const handleDelete = () => {
    console.log('t')
  }


*/
