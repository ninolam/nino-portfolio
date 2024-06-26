import React from "react";
import userData from "@constants/data";
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'


export default function Contact() {
  const SERVICE_ID = "service_2e44nsf";
  const TEMPLATE_ID = "template_196eg5h";
  const USER_ID = "6kXs6LJHQtcdtS4kd";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message bien reçu, je reviens vers vous rapidement !'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, il y a eu une erreur',
          text: error.text,
        })
      })
    e.target.reset()
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#F1F1F1] dark:bg-gray-900 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="font-semibold text-2xl">
              Feel free to contact me to discuss your project. 
              </h1>
              <p className="font-light text-base mt-2 max-w-[80%]">
              I will respond as soon as possible!
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#F1F1F1] dark:border-gray-900 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className=" font-light text-sm">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#F1F1F1] dark:border-gray-900 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="font-light text-sm">
                  {userData.email}
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleOnSubmit} className="form rounded-lg dark:bg-gray-800 bg-white p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Name
            </label>
            <input
              type="text"
              className="dark:bg-gray-600 font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="user_name"
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="dark:bg-gray-600 font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name='user_email'
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="dark:bg-gray-600 font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name='user_message'
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
