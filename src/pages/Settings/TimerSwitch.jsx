export function TimerSwitch({ buttons, selectedIndex, setSelectedIndex, setTimeArray }) {
    return (
        <>
            {buttons.map((button, index) => {
                return (
                    <button 
                        key={index} 
                        className={`chip ${selectedIndex === index ? "chip--active" : ""}`}
                        onClick={() => {
                            setSelectedIndex(index);
                            if (index === 0) {
                                setTimeArray([1500, 300, 900]);
                            }

                            else if (index === 1) {
                                setTimeArray([3000, 600, 1800]);
                            }

                            else {
                                setTimeArray([900, 180, 600]);
                            }
                        }}
                    >
                        {button}
                    </button>
                );
            })}
        </>
    );
}