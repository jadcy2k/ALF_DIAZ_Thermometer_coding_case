# Beyonnex Frontend Coding test (Thermometer) 


### By Alf Diaz 
+ [JoseAlfredoDiaz@gmail.com](mailto:joseAlfredoDiaz@gmail.com)
+ [/in/JoseAlfredoDiaz](https://www.linkedin.com/in/josealfredodiaz/)


## Tech Stack

`React + TypeScript + Vite + PicoCSS + EsLint + Jest`

## Setup

Launch project:

+ `yarn dev`
+ or: `npm run dev`

Test:

+ `yarn test`
+ or: `npm run test`

## Key points

+ From my point of view, the complexity of this challenge is in the CSS, especially in the calculation of the degrees of rotation.

+ We start from the CSS property `transform:rotate()` to which we have to specify the degree of rotation. 

+ In addition, I had to apply the CSS property `transform-origin` to define the pivot point.

+ The visual elements will be "absolute" positioned relative to the main element.

+ The `TemperatureForm` component does not show any complication, it will only raise the props towards the "app" so that the thermometer can be updated. The `React Context API` can also be used.

## Thermometer component

The `Thermometer` component is a UI element that visualizes the target temperature on a virtual thermometer. It visualizes the target temperature within a predefined range, calculating and adjusting the rotation of the `targetLine` needle to reflect this temperature within the context of the thermometer.

It is designed to display three main elements:

1. **Minimum and Maximum Lines:**
   - Represent the lower and upper temperature limits.
   - Positioned at angles 45° and 315°, respectively (within a complete circle of 360 degrees) on the thermometer.
   - The length and position of these lines are calculated based on the thermometer's size.

2. **Needle Representing the Target Temperature (`targetLine`):**
   - Positioned at the center of the circle, indicating the target temperature.
   - Its position and rotation are calculated based on the target temperature concerning the minimum and maximum temperature limits.
   - The `targetLine` needle rotates from the angle 45° to 315°, corresponding to the thermometer's scale, representing the temperature range.

3. **Display of the Temperature Value:**
   - Displays the value of the target temperature below the thermometer.

The calculation of the `targetLine` needle rotation is carried out using the following steps:

1. The relative position of the target temperature within the complete temperature range is calculated as a fraction (percentage) between the minimum and maximum temperatures.

2. This fraction is multiplied by `270`, which represents the available range of degrees on the thermometer (315° - 45°), to obtain the relative rotation within the thermometer's range.

3. This value is then increased by `45` to adjust the start of the temperature range (instead of starting from 0°) to the angle 45° of the thermometer.

