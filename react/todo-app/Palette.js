import React from 'react';
import './Palette.css';

// Color 컴포넌트
// [] 형태로 나타난다.
const Color = ({ color, active, onClick }) => {
    return (
        <div 
            className={`color ${active && 'active'}`}
            style={{ background: color }}
            onClick={onClick}
        ></div>
    );
};

// Color 컴포넌트들을 감싸고있는 Palette 컴포넌트
const Palette = ({ colors, selected, onSelect }) => {
    return (
        <div className="palette">
            {
                colors.map(
                    color => (
                        <Color
                            color={color}
                            active={selected===color}
                            onClick={() => onSelect(color)}
                            key={color}
                        />
                    )
                )
            }
        </div>
    );
};

export default Palette;
