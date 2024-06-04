import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2ssvj8v", "template_ot9cojd", form.current, {
        publicKey: "DrGxZErRzpGHXckOa",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div id="email">
        <div className="bg-accent rounded-lg">
          <div className="py-8 lg:py-16 px-4 mx-auto ">
            <h2 className="mb-12 text-4xl tracking-tight font-extrabold text-center text-primary">
              Ask Your Questions
            </h2>

            <form
              action="#"
              className="space-y-8"
              ref={form}
              onSubmit={sendEmail}
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-lg font-semibold text-primary"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="mail@gmail.com"
                  required
                  name="from_email"
                />
              </div>
              <div className="">
                <label
                  for="name"
                  className="block mb-2 text-lg font-semibold text-primary"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-base text-primary bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Name"
                  required
                  name="from_name"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-lg font-semibold text-primary dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-base text-secondary bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  name="message"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:text-secondary  py-3 px-5 text-base font-medium text-center text-accent rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <input type="submit" value="SEND MESSAGE" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;