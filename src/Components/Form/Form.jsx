import React, { useState } from 'react';
import "./Form.module.css"

function Form() {

    const [identificacion, setIdentificacion] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [notam1, setnotam1] = useState('');
    const [notam2, setnotam2] = useState('');
    const [notam3, setnotam3] = useState('');
    const [asignatura, setasignatura] = useState();
    const [definitiva, setdefinitiva] = useState();
    const [observacion, setobservacion] = useState();



    
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "identificacion":
                setIdentificacion(value);
                break;
            case "nombreCompleto":
                setNombreCompleto(value);
                break;
            case "notam1":
                setnotam1(value);
                break;
            case "notam2":
                setnotam2(value);
                break;
            case "notam3":
                setnotam3(value);
                break;
            case "asignatura":
                setasignatura(value);
                break;
            default:
                break;
        }
        console.log(event.target.value)
    };

  const handleSubmit = (event) => {
  event.preventDefault();
  
  let promedio = ''
  let condicion = ''

if (identificacion == '' || asignatura == '' || notam3 == '' || notam2 == '' || notam1 =='') {
    condicion = "Rellene todos los campos"}
else{
        if (notam3 >= 0 && notam2 >= 0 && notam1 >= 0 && notam3 <= 5 && notam2 <= 5 && notam1 <= 5) {
            promedio = (parseFloat(notam1)*0.3+parseFloat(notam2)*0.35+parseFloat(notam3)*0.35)

            if (promedio >=3){
            condicion = "Gano"
            }
            else if (promedio >=2){
                condicion = "Habilita"
            }
            else {condicion = "Perdio"}
        } 
        else {condicion = "Solo notas entre 0 y 5"}
    }

    setdefinitiva (promedio)
    setobservacion (condicion)

  
};

    return (
        <>
            <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <label htmlFor="identificacion">Identificación</label>
                        <input
                            className="form-control"
                            type="text"
                            name="identificacion"
                            id="identificacion"
                            placeholder="Ingresa tu identificación"
                            value={identificacion}
                            onChange={handleChange}
                        />
                        <label htmlFor="nombreCompleto">Nombre completo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombreCompleto"
                            id="nombreCompleto"
                            placeholder="Ingresa tu nombre completo"
                            value={nombreCompleto}
                            onChange={handleChange}
                        />
                        <label htmlFor="asignatura">Asignatura</label>
                        <select
                            className="form-select"
                            name="asignatura"
                            id="asignatura"
                            value={asignatura}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una asignatura</option>
                            <option value="Matematica">Matematica</option>
                            <option value="Filosofia">Filosofia</option>
                            <option value="Valores">Valores y ciudad</option>
                        </select>

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="notam1">Nota M1</label>
                        <input
                            className="form-control"
                            type="number"
                            name="notam1"
                            id="notam1"
                            placeholder="Momento 1"
                            value={notam1}
                            onChange={handleChange}
                        />
                        
                        <label htmlFor="notam1">Nota M2</label>
                        <input
                            className="form-control"
                            type="number"
                            name="notam2"
                            id="notam2"
                            placeholder="Momento 2"
                            value={notam2}
                            onChange={handleChange}
                        />
                        
                        <label htmlFor="notam1">Nota M3</label>
                        <input
                            className="form-control"
                            type="number"
                            name="notam3"
                            id="notam3"
                            placeholder="Momento 3"
                            value={notam3}
                            onChange={handleChange}
                        />
                        
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Observación</label>
                        <input
                            className="form-control"
                            type="text"
                            name="observacion"
                            id="observacion"
                            placeholder="Observación"
                            value={observacion}
                            disabled
                        />
                          
                        <label htmlFor="">Definitiva: {definitiva}</label>
                     
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary" type="submit">
                            Guardar
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </>
    );
}

export default Form;
