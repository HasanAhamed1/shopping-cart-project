import React from 'react';

const Ans = () => {
    return (
        <div>
            <h1>How react works?</h1>
            <p>React is Javascript library for building user interface. We use components in rect to tell what we want to see on screen. When our data changes, React will efficiently update and re-render our components. After added new component in react or after edited, it is difficult to change DOM anr re-render it. SO, react makes a soft copy of original Dom. After changing react compair new DOM with old DOM then re-render it. React do this with the help of diff algorithm.</p>
            <h1>Props VS State:</h1>
            <p><b>Props:</b> Props are read-only components. It allows us to pass data from one component to other component. Props are immutable. It can be accessed by the child component. It makes components reusable.</p>
            <p><b>State:</b> State is mutable. It keeps information about the components. It can't be accessed by the child component. It can't make components reusable.</p>
        </div>
    );
};

export default Ans;