import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function Calculator() {
  const [form, setForm] = useState({
    minimo: '',
    glucemia: '',
    ratio: '',
    correction: '',
    objective: '',
    amountOfCarbs: '',
  });
  const [result, setResult] = useState();
  /**
   * Runs on every refresh
   */
  useEffect(() => {
    console.log('form', form);
    //   const valueInStorage = localStorage.getItem("form")

    //   if (valueInStorage){
    //     return
    //   }
    //   valueInStorage.setItem("form", JSON.stringify(form))
    //
  }, [form]);

  /**
   * Runs on init only
   */
  useEffect(() => {
    const valueInStorage = localStorage.getItem('form');
    if (valueInStorage) {
      setForm(JSON.parse(valueInStorage));
    }
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setForm((prevState) => {
      const newForm = {
        ...prevState,
        [name]: Number(value),
      };
      localStorage.setItem('form', JSON.stringify(newForm));
      return newForm;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let res = form.amountOfCarbs / form.ratio;
    if (form.glucemia > form.correction) {
      res = res + form.minimo;
    }
    console.log(res);
    res = Math.round(res * 2) / 2;
    setResult(res);
  };
  return (
    <div className={styles.component}>
      <form onSubmit={handleSubmit}>
        <label>
          Minimo
          <input value={form.minimo} name="minimo" onChange={handleChange} type="text" />
        </label>
        <label>
          Glucemia
          <input value={form.glucemia} name="glucemia" onChange={handleChange} type="text" />
        </label>
        <label>
          Ratio
          <input value={form.ratio} name="ratio" onChange={handleChange} type="text" />
        </label>
        <label>
          Corrección
          <input value={form.correction} name="correction" onChange={handleChange} type="text" />
        </label>
        <label>
          Objetivo
          <input value={form.objective} name="objective" onChange={handleChange} type="text" />
        </label>
        <label>
          Cantidad de carbohidratos
          <input value={form.amountOfCarbs} name="amountOfCarbs" onChange={handleChange} type="text" />
        </label>
        <button type="submit">Calcular</button>
        <span>{result}</span>
      </form>
    </div>
  );
}
