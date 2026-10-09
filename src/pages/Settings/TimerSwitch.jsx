export function TimerSwitch({ buttons, selectedIndex, setSelectedIndex }) {
    return (
        <>
            {buttons.map((button, index) => {
                return (
                    <button 
                        key={index} 
                        className={`chip ${selectedIndex === index ? "chip--active" : ""}`}>
                        {button}
                    </button>
                );
            })}
        </>
    );
}