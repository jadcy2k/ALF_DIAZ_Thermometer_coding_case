import { CSSProperties } from 'react';

interface ThermometerProps {
  minTemperature: number;
  maxTemperature: number;
  targetTemperature: number;
}

const Thermometer: React.FC<ThermometerProps> = ({ minTemperature, maxTemperature, targetTemperature }) => {
  
  const circleSize = 100; // Size of the thermometer circle
  const markerLength = 65; // Longitude of both marker lines
  const minMarkerRotation = 45; // 'Min' marker line rotationn
  const maxMarkerRotation = 315; // 'Max' marker line rotationn
  const targetLineRotation = ((targetTemperature - minTemperature) / (maxTemperature - minTemperature)) * 270 + 45; // Rotation for the 'Target' marker line.


  // Style definition as 'CSSProperties':
  // -----------------------------------
  // NOTE: I can use a separate CSS file or import the 'Styled-components' library. 
  // For now I put them here in the component to speed up development.
  const minMarkerStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `rotate(${minMarkerRotation}deg)`,
    transformOrigin: '0 0',
    border: '3px solid gold',
    height: `${markerLength}px`,
  };
  const maxMarkerStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `rotate(${maxMarkerRotation}deg)`,
    transformOrigin: '0 0',
    border: '3px solid gold',
    height: `${markerLength}px`,
  };
  const targetLineStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '45px',
    border: '1px solid red',
    transformOrigin: '0 0',
    transform: `rotate(${targetLineRotation}deg)`,
    zIndex: 2,
  };
  const thermometerStyle: CSSProperties = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    position: 'relative',
  };
  const circleStyle: CSSProperties = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: '50%',
    border: '5px solid cyan',    
    backgroundImage: 'radial-gradient(circle, #ffffff, #cbcbcb)',
    position: 'fixed',
    zIndex: 1,
  };
  const thermometerComponentStyle: CSSProperties = {
    position: 'relative',
    padding: '1rem',
  };
  const temperatureTextStyle: CSSProperties = {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '16px',
    width: `${circleSize}px`,
  };
  // ++++++++++++++++++++++++++++++++++++++

  return (
    <div style={thermometerComponentStyle}>
      <div style={thermometerStyle}>
        <div style={minMarkerStyle}></div>
        <div style={maxMarkerStyle}></div>
        <div style={circleStyle}></div>
        <div style={targetLineStyle} data-testid="targetLine"></div>
      </div>
      <div style={temperatureTextStyle}>{targetTemperature} °C</div>
    </div>
  );
};

export default Thermometer;
