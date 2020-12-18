import React,{useContext} from 'react';
import {ModalContext} from '../context/ModalContext'

const Receta = ({receta}) => {

    //Extraer valores del context

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                 <h2 className="card-header">{receta.strDrink}</h2>

                 <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>

                 <div className="card-body">
                     <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={()=>{
                        }}
                     >
                         Ver Receta
                     </button>
                 </div>
            </div>
        </div>

     );
}
 
export default Receta;