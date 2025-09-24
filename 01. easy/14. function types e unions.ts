type Callback = (value: string | number) => void;

const logValue: Callback = (value) => {
    console.log("The value is:", value);
};

const alertValue: Callback = (value) => {
    alert(`The value is: ${value}`);
};