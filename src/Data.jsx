import './Data.css';

export   let titles = ["Introduction" , "React Get Started" , "React Upgrade" , "React ES6"];
    
export let contents = [
    <div className='content-container'>
        <h2> React Itroduction</h2>
        <button className='button'>Previous ❯</button>
        <button className='btn'>Next ❯</button>
        <h3>What Is React</h3>

         
        
        <div className='ans-div'>
            <p>
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.
            
            </p>

            <h3>How Does React Work ?</h3> 
            <p className='dom-content'>
            React creates a VIRTUAL DOM in memory.
            </p>
            <p>
            Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, 
            before making the changes in the browser DOM.
            </p>

            <p className='dom-content'>
            React creates a VIRTUAL DOM in memory.
            </p>

            <p>
            React finds out what changes have been made, and changes only what needs to be changed.
            <br></br>
            You will learn the various aspects of how React does this in the rest of this tutorial.
            </p>
        </div>

        <div className='code-div-container'>
            <h3> Example
                <a href="" className='a'>Get your own React.js Server</a>
            </h3>
           
            <div className='code-div'>
               <code>
                 <pre>
                    {`
                    const greet = (name)=>{
                        return 'Hello , ' + name + '1';
                    };
                     console.log(greet('World'));
                     `}
                  </pre>
                </code>   
            </div>
        </div>
    </div>,

<div className='content-container'>
        <h2>React Getting Started</h2>
        <button className='button'>Previous ❯</button>
        <button className='btn'>Next ❯</button>
        <div className='ans-div'>
            <p>
            To get an overview of what React is, you can write React code directly in HTML.

            But in order to use React in production, you need npm and Node.js installed.
            </p>
            <h2>React Directly in HTML</h2>
            <p>
            The quickest way start learning React is to write React directly in your HTML files.
            </p>
            <p className='p-content'> 
             <p>
              W3Schools Spaces
             </p>
              The easiest way to get started with creating HTML files is W3Schools Spaces!

              <p>
               It is the perfect place to create, edit,   and share your work with others!
              </p>
              <button className='btn-btn'> Get Started For Free</button>
            </p>

            <p>
            Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.
            </p>

            <p>
            You will learn more about JSX in the React JSX chapter.
            </p>
          
        </div>

        <div className='code-div-container'>
            <h3>Coding Example
            <a href="" className='a'>Get your own React.js Server</a>
            </h3>
           
            <div className='code-div'>
               <code>
               
                 <pre className='pre-content'>
                    {` const greet = (name)=>{
                        return 'Hello , ' + name + '1';
                    };
                     console.log(greet('World')); `}
                  </pre>
                 
                </code>   
            </div>
        </div>
    </div>,

<div className='content-container'>
        <h2>Upgrade React</h2>
        <button className='button'>Previous ❯</button>
        <button className='btn'>Next ❯</button>
        <div className='ans-div'>
            <p>
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.
            </p>
            <p>
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.
            </p>
        </div>

        <div className='code-div-container'>
            <h3>Coding Example
            <a href="" className='a'>Get your own React.js Server</a>
            </h3>
            <div className='code-div'>
               <code>
                 <pre className='pre-content'>
                    {`const greet = (name)=>{
                        return 'Hello , ' + name + '1';
                    };
                     console.log(greet('World'));`
                    }
                  </pre>
                </code>   
            </div>
        </div>
    </div>,

<div className='content-container'>
        <h2>React ES6</h2>
        <button className='button'>Previous ❯</button>
        <button className='btn'>Next ❯</button>
        <div className='ans-div'>
            <p>
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.
           
            </p>
            <p>
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
            React is a tool for building UI components.
           
            </p>
        </div>

        <div className='code-div-container'>
            <h3>Coding Example
            <a href="" className='a'>Get your own React.js Server</a>
            </h3>
            <div className='code-div'>
               <code>
                 <pre>
                    {`const greet = (name)=>{
                        return 'Hello , ' + name + '1';
                    };
                     console.log(greet('World'));`
                    }
                  </pre>
                </code>   
            </div>
        </div>
    </div>
];
