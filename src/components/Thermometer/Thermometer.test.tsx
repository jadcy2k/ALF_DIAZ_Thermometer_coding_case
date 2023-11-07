import { render } from '@testing-library/react';
import Thermometer from './Thermometer';

describe('Thermometer Component', () => {
  it('renders with the provided temperatures', () => {
    const minTemperature = 0;
    const maxTemperature = 100;
    const targetTemperature = 50;

    const { getByText, getByTestId } = render(
      <Thermometer
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
        targetTemperature={targetTemperature}
      />
    );

    // Check if the temperature value is displayed
    expect(getByText(`${targetTemperature} °C`)).toBeDefined();

    // Check if the targetLineStyle is present
    const targetLineStyle = getByTestId('targetLine');
    expect(targetLineStyle).toBeDefined();

    // Check if the temperature line mark the top (180deg)
    const computedStyles = window.getComputedStyle(targetLineStyle);
    expect(computedStyles.transform).toBe('rotate(180deg)');
  });
});