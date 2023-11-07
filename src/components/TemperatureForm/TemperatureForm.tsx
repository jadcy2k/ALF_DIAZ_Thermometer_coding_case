interface Props {
  onMinChange: (t:number) => void;
  onMaxChange: (t:number) => void;
  onTargetChange: (t:number) => void;
  minTemp: number;
  maxTemp: number;
  targetTemp: number;
}
const TemperatureForm: React.FC<Props> = props => {
  
  const { onMinChange, onMaxChange, onTargetChange, minTemp, maxTemp, targetTemp } = props;

  return (
    <>
    <h4>Enter your values:</h4> 
    <div className="grid">
      <label htmlFor='minTemp'>Min °
        <input name='minTemp' placeholder='Min T°' type='number' min={0} max={9999} value={minTemp} onChange={(e) => { onMinChange(parseInt(e.target.value)) }}></input>
      </label>
      <label htmlFor='maxTemp'>Max °
        <input name='maxTemp' placeholder='Max T°' type='number' min={0} max={9999} value={maxTemp} onChange={(e) => { onMaxChange(parseInt(e.target.value)) }}></input>
      </label>
      <label htmlFor='targetTemp'>Target °
        <input name='targetTemp' placeholder='target T°' type='number' min={0} max={maxTemp} value={targetTemp} onChange={(e) => { onTargetChange(parseInt(e.target.value)) }}></input>
      </label >
    </div>
    </>
  )
};
export default TemperatureForm;