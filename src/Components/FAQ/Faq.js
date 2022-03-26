import './Faq.css'
import React from 'react'

const Faq = () => {
    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='faq-info'>
                <div className='single-faq'>
                    <h2>01. How react works?</h2>
                    <p>React is JavaScript Library. React works in unidirectional flow. React has virtual DOM. It is same as the browser DOM. And react works with the help of the virtual DOM. If our code has change anything like component, function, object or any other data, React create a virtual DOM immediately and it compare the virtual DOM with the browser DOM . And identify in where the changes happened. If a node is found to be different (different type or component) it will re-render the entire subtree. And Finally change that thing. That's how react works. </p>
                </div>
                <div className='single-faq'>
                    <h2>02. Difference between props and state?</h2>
                    <h4>state</h4>
                    <p>
                        1. State is the internal element of a component. <br />
                        2. State works like a function.<br />
                        3. State changes can be asynchronous.<br />
                        4. State can be modified.<br />
                        5. State can't be changed by parent component.<br />
                    </p>
                    <h4>props</h4>
                    <p>
                        1. Props is the external element of a component.<br />
                        2. Props works like an object.<br />
                        3. Props are read only.<br />
                        4. Props can't be modified.<br />
                        5. Props can be changed by parent component.<br />
                    </p>
                </div>
                <div className='single-faq'>
                    <h2>03. How useState works?</h2>
                    <p>
                        useState is a hook.
                        By using useState we can add state to function component. In that function component generates a single piece of state that connected with that component. Each state bear a single piece of data. It can be anything, like array, object, string, boolean, number whatever you have. UseState is use for the present component only.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq