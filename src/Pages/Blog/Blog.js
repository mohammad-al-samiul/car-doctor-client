/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              What is CORS ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled
              access to resources located outside of a given domain. It extends and adds flexibility
              to the same-origin policy
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              Why are you using firebase? What other options do you have to implement
              authentication?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              The Firebase Realtime Database lets you build rich, collaborative applications by
              allowing secure access to the database directly from client-side code. Data is
              persisted locally, and even while offline, realtime events continue to fire, giving
              the end user a responsive experience.
              <p>
                <strong>
                  Usually, authentication by a server entails the use of a user name and password.
                  Other ways to authenticate can be through cards, retina scans, voice recognition,
                  and fingerprints.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              How does the private route work?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              The private route component is similar to the public route, the only change is that
              redirect URL and authenticate condition. If the user is not authenticated he will be
              redirected to the login page and the user can only access the authenticated routes If
              he is authenticated (Logged in).
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour">
              What is Node? How does Node work?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
              Node. js is an open-source, cross-platform JavaScript runtime environment and library
              for running web applications outside the client's browser.
              <p className="mt-2">
                It is a used as backend service where javascript works on the server-side of the
                application. This way javascript is used on both frontend and backend. Node. js runs
                on chrome v8 engine which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
