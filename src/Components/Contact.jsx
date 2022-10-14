import React from 'react'

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center p-4 pt-[150px] "
    >
      <form
        method="POST"
        action="https://getform.io/f/cbe1d830-774b-4a1a-b123-33da0b15b008"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 text-gray-200">
            Contact
          </p>
          <p className="text-[#ccd6f6] pt-5">
            Submit the form below or shoot me an email ---
            musdevoffice@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-lg"
          type="text"
          name="name"
          id=""
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-lg "
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <textarea
          className="rounded-lg p-1"
          placeholder="Message"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-white rounded-md border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-200">
          Let`s Collaborate
        </button>
      </form>
    </div>
  );
}
