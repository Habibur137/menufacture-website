import React from "react";

const Blogs = () => {
  return (
    <div className="px-8 lg:px-16 lg:mt-16">
      <div>
        <h3 className="text-2xl font-bold">
          01. Optimizing performance in a React application
        </h3>
        <p>Keeping component state local where necessary.</p>
        <p>Keeping component state local where necessary.</p>
        <p>Code-splitting in React using dynamic import()</p>
        <p>Windowing or list virtualization in React.</p>
        <p>Lazy loading images in React.</p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold">
          02. There are four main types of state you need to properly manage in
          your React apps:
        </h3>
        <p>Local State</p>
        <p>Global State</p>
        <p>Server State</p>
        <p>Url State</p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold">
          03. Prototypal Inheritance in JavaScript
        </h3>
        <p>
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold">
          {" "}
          04. What is a unit test? Why should write unit tests?
        </h3>
        <p>
          UNIT TESTING is a type of software testing where individual units or
          components of a software are tested. The purpose is to validate that
          each unit of the software code performs as expected. Unit Testing is
          done during the development (coding phase) of an application by the
          developers. Unit Tests isolate a section of code and verify its
          correctness. A unit may be an individual function, method, procedure,
          module, or object.
        </p>
        <p className="mt-3">
          Unit Testing is important because software developers sometimes try
          saving time doing minimal unit testing and this is myth because
          inappropriate unit testing leads to high cost Defect fixing during
          System Testing, Integration Testing and even Beta Testing after
          application is built. If proper unit testing is done in early
          development, then it saves time and money in the end.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold">
          {" "}
          05. Why you do not set the state directly in React.{" "}
        </h3>
        <h2 className="font-bold mt-4 mb-2">
          One should never update the state directly because of the following
          reasons:
        </h2>
        <p>
          If you update it directly, calling the setState() afterward may just
          replace the update you made.
        </p>
        <p>
          When you directly update the state, it does not change this.state
          immediately. Instead, it creates a pending state transition, and
          accessing it after calling this method will only return the present
          value.
        </p>
        <p>You will lose control of the state across all components.</p>
      </div>
    </div>
  );
};

export default Blogs;
