import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function Calculator() {
  const [form, setForm] = useState({
    ratio: '',
    correction: '',
    objective: '',
    amountOfCarbs: '',
  });


  useEffect(() => {
    console.log('form', form);
  }, [form])


  useEffect(() => {
    const valueInStorage = localStorage.getItem("ratio")
    // setRatio(valueInStorage)
  }, [])

  const handleChange = (event) => {
    const { value, name } = event.target;
    
    localStorage.setItem("ratio", value);

    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  };

  return (
    <div className={ styles.component }>
      <label>
        Ratio
        <input value={form.ratio} name="ratio" onChange={ handleChange } type="text" />
      </label>
      <label>
        Corrección
        <input value={form.correction} name="correction" onChange={ handleChange } type="text" />
      </label>
      <label>
        Objetivo
        <input value={form.objective} name="objective" onChange={ handleChange } type="text" />
      </label>
      <label>
        Cantidad de carbohidratos
        <input value={form.amountOfCarbs} name="amountOfCarbs" onChange={ handleChange } type="text" />
      </label>
      <button>Calcular</button>
    </div>
  );
};