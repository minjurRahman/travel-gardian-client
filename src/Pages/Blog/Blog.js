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
                        <p>1. Type – <br />
                            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br />
                            2. Language – <br />
                            SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
                            A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. <br />

                            3. Scalability – <br />
                            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. <br />
                            
                            4. Structure – <br />
                            SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. <br />
                          
                            5. Property followed – <br />
                            SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). <br />
                            

                            6. Support – <br />
                            Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments
                            </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">2. What is JWT, and how does it work?</summary>
                    <div className="px-4 pb-4">
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />
                        How dose it workes? <br />
                        In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.
                        You also should not store sensitive session data in browser storage due to lack of security.
                        Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.
                         </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">3. What is the difference between javascript and NodeJS?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>1. NodeJS : <br />
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Nodejs is used in server-side development. Nodejs is written in C, C++ and Javascript. <br />

                        2. JavaScript : <br />
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript is used in frontend development. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</p>

                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">4. How does NodeJS handle multiple requests at the same time?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. <br />
                        A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                        The cluster module allows easy creation of child processes that all share the same server ports.
                        </p>

                    </div>
                </details>
            </div>
        </div>
    </section>
    );
};

export default Blog;