import React from 'react';

const Blogs = () => {
    return (
      <div>
        <div className="blog1">
          <h4>Authentication vs. Authorization</h4>
          <article>
            <legend>Authentication</legend>
            Authentication verifies who the user is.Authentication works through
            passwords, one-time pins, biometric information, and other
            information provided or entered by the user.Authentication is the
            first step of a good identity and access management
            processAuthentication is visible to and partially changeable by the
            user.
          </article>
          <article>
            <legend>Authorization</legend>
            Authorization determines what resources a user can
            access.Authorization works through settings that are implemented and
            maintained by the organization.Authorization always takes place
            after authentication.Authorization isn’t visible to or changeable by
            the user.
          </article>
        </div>
        <div className="blog2">
          <h4>
            Why are you using firebase and What other options do you have to
            implement authentication?
          </h4>
          <p>
            Firebase is a platform developed by Google for creating mobile and
            web applications. Google Firebase offers many features that pitch it
            as the go-to backend development tool for web and mobile apps. It
            reduces development workload and time. And it's a perfect
            prototyping tool. Firebase is simple, lightweight, friendly, and
            industrially recognized.
          </p>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Microsoft, Yahoo, Github,
            Play Games, Facebook, Twitter, Apple and more.
          </p>
        </div>
        <div className="blog3">
          <h4>
            What other services does firebase provide other than authentication?
          </h4>
          <h4>
            There are many services which Firebase provides, Most useful of them
            are:
          </h4>
          <ul className="list-disc">
            <li>Cloud Firestore.</li>
            <li>Authentication.</li>
            <li>Hosting.</li>
            <li>Google Analytics.</li>
            <li>Cloud Storage.</li>
            <li>Cloud Messaging.</li>
            <li>Predictions.</li>
          </ul>
        </div>
      </div>
    );
};

export default Blogs;