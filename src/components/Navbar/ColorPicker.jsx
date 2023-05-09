import React, { useState } from 'react'
import { SketchPicker } from 'react-color';
import { swatch } from '../../assets';

const ColorPicker = ({ color, onChange }) => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(color);
  
    const handleColorPickerClose = () => {
      setShowColorPicker(false);
    };
  
    const handleColorPickerChange = (color) => {
      setSelectedColor(color.hex);
      if (onChange) {
        onChange(color.hex);
      }
    };
    
  
    const handleColorPickerSave = () => {
      setShowColorPicker(false);
      if (selectedColor) {
        onChange(selectedColor);
      }
    };
  
    return (
      <>
        <button style={{background: "transparent", border: "transparent"}} onClick={() => setShowColorPicker(!showColorPicker)}>
        <img src={swatch} alt="color" style={{background: "none"}}/>
                <label style={{ color: "white"}} htmlFor="mesh">Main</label>
        </button>
        {showColorPicker && (
          <SketchPicker
            color={selectedColor}
            onChange={handleColorPickerChange}
            onChangeComplete={handleColorPickerSave}
            onClose={handleColorPickerClose}
            style={{
              position: 'fixed',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 9998,
            }}
          />
        )}
      </>
    );
  };

export default ColorPicker