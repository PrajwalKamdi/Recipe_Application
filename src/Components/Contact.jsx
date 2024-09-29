import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0748669f-2928-4939-89dc-1e36229b5534");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    alert("Message Sent SuccessFully!")
  };
  return (
    <div className="mt-[110px] md:px-16 px-5 h-screen">
      <h1 className="text-2xl bg-slate-200 text-center p-2 capitalize mb-6">
        {" "}
        Feel free to contact
      </h1>
      <div className="md:w-1/2 border border-black p-2 md:p-10 bg-slate-200 mx-auto mb-5">
      <form onSubmit={onSubmit}>
      <label htmlFor="" id="name" className="">
          Name : 
        </label>
        <input
          type="text"
          name="name"
       
          placeholder="Your Name"
          required
          className="border w-full p-2 outline-none border-blue-300 rounded-md my-2"
        />
        <label htmlFor="" id="name" className="">
          Email :{" "}
        </label>
        <input
          type="email"
          name="email"
        
          placeholder="Your Email"
          required
          className="border w-full p-2 outline-none border-blue-300 rounded-md my-2"
        />
        <label htmlFor="" id="name" className="">
          Write Your Message :{" "}
        </label>
        <textarea
          type="text"
          name="message"
        
          placeholder="Ask me anything..."
          required
          className="border w-full p-2 outline-none border-blue-300 rounded-md my-2 h-[200px] "
        />
        <button
          type="submit"
          className="p-3 border border-blue-300 rounded-md bg-slate-300 hover:bg-slate-400 "
        >
          Send Message
        </button>
      </form>
       
      </div>
    </div>
  );
}

export default Contact;
