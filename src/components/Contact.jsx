import React from "react";

function Contact() {
  return (
    <div name='contact' className="w-full h-screen flex justify-center p-4 bg-[#011343]" >
      <form method="POST" action="https://getform.io/f/zbzkpwwa" className="flex flex-col max-w-[600px] w-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300" >Contact</p>
          <p className="text-gray-300 py-4" >Submit the from below shoot me an email - myemail@gmail.com</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
        <input className="my-4 bg-[#ccd6f6] p-2" type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] p-2" name="message" placeholder="Message" id="" cols="30" rows="10"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center" >Let's Connect</button>
      </form>
    </div>
  );
}

export default Contact;
