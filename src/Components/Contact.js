import React from 'react';


const Contact = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-white text-3xl font-nano mb-4 -mt-6 -mx-3">Contact</h1>
        
        <hr className="w-32 border-2 border-yellow-600 mb-6 mt-3 rounded-full -mx-3" />
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Contact Info 1 */}
        

        {/* Contact Form */}
        <div className="bg-black/30  p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-white font-nano mb-4">Get in Touch</h2>
          <form
            action="mailto:your.email@example.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded-lg bg-black/30 text-gray-300 border border-gray-600 text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded-lg bg-black/30 text-gray-300 border border-gray-600 text-sm"
                placeholder="Your Email"
                required
              />
            </div> 
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 rounded-lg bg-black/30 text-gray-300 border border-gray-600 text-sm"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-stone-800 text-white rounded-lg hover:bg-stone-600 hover:text-amber-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section (Optional) */}
       <div className="bg-black/30 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl text-white font-nano mb-4">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.401332034741!2d-122.08424968468145!3d37.42199977982599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbf5a3e1b59b%3A0x1b24e1e83951d6a0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633028075396!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div> 
    </div>
  );
};

export default Contact;
