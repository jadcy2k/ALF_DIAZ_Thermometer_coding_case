import { useState } from 'react'
import Thermometer from './components/Thermometer/Thermometer.tsx'
import TemperatureForm from './components/TemperatureForm/TemperatureForm.tsx';

function App() {
  // Stateful variables:
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(200);
  const [targetTemp, setTargetTemp] = useState(100);

  // Update State:
  const onMinChange = (temp: number) => {
    setMinTemp(temp);
  };
  const onMaxChange = (temp: number) => {
    setMaxTemp(temp);
  };
  const onTargetChange = (temp: number) => {
    setTargetTemp(temp);
  };
  // +++++++++++++++++++++++++++++++++++++

  return (
    <article>
      <h2>My custom Heater Temperature</h2>
      <p>
        <span>By Jose Alfredo Diaz (Kronberg im Taunus, Hessen)</span><br />
        <a href='mailto:joseAlfredoDiaz@gmail.com'>JoseAlfredoDiaz@gmail.com</a> &nbsp;|&nbsp; 
        <a href='https://www.linkedin.com/in/josealfredodiaz/'>/in/JoseAlfredoDiaz/</a> &nbsp;|&nbsp; 
        <a href="tel:+4917687638893">+49 (0)176 8763 8893</a>
      </p>
      <Thermometer minTemperature={minTemp} maxTemperature={maxTemp} targetTemperature={targetTemp} />
      <TemperatureForm onMinChange={onMinChange} onMaxChange={onMaxChange} onTargetChange={onTargetChange} minTemp={minTemp} maxTemp={maxTemp} targetTemp={targetTemp} />
    </article>
  )
}
export default App
