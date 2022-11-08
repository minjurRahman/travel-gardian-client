import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 m-20 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">1. What is the difference between SQL and NoSQL ? </summary>
                    <div className="px-4 pb-4">
                        <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">2. What is JWT, and how does it work?</summary>
                    <div className="px-4 pb-4">
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">3. What is the difference between javascript and NodeJS?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>useRef is a react hook. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">4. How does NodeJS handle multiple requests at the same time?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>useRef is a react hook. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

                    </div>
                </details>
            </div>
        </div>
    </section>
    );
};

export default Blog;