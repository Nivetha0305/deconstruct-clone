import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Track() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()


        const order = form.current.order_id.value
        const mobile = form.current.mobile_number.value
        

        const orderreg = /^[0-9]{4,8}$/
        const mobilereg = /^[6-9]\d{9}$/
        
        if (!orderreg.test(order)) {
             alert("Invalid Order ID");
             return;
        }

        if (!mobilereg.test(mobile)) {
             alert("enter the valid mobile number");
             return;
        }




       emailjs
         .sendForm(
           "service_qbpjnzc", // service ID
           "template_fxcti6d", // template ID
           form.current,
           "2hR3Bf6y4wFOf9hjm", // public key
         )
         .then(
           () => {
                 alert("Order request sent successfully!");
                 form.current.reset()

           },
             ((error) => {
                 console.log(error);
                 alert("Failed to send. Try again.");
             }
                 
             )
            )
    }







    return (
      <div className="flex justify-center py-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="border mx-10 px-10 py-16 w-[600px] shadow-md rounded-xl">
          <p className="text-center text-2xl font-semibold mb-10">
            Track Your Order
            <br />
            <span className="text-gray-600 text-base font-normal">
              Enter your order details to track your order
            </span>
          </p>

          {/* Order ID */}
          <label className="capitalize font-medium">Order ID</label>
          <input
                    type="text"
                    name='order_id'
            className="border border-zinc-400 rounded-lg h-10 w-full px-3 mt-1"
            placeholder="Enter your Order ID"
          />

          {/* Mobile Number */}
          <label className="capitalize font-medium mt-6 block">
            Mobile Number
          </label>
          <input
                    type="text"
                    name='mobile_number'
            className="border border-zinc-400 rounded-lg h-10 w-full px-3 mt-1"
            placeholder="Enter your mobile number"
          />

          {/* Button */}
                <button type="submit"
                    className="bg-black text-white rounded-lg w-full h-12 mt-8 hover:bg-gray-900 transition">
            Track Your Order
          </button>
       </form>
      </div>
    );
}
