import axios from "axios";
import { backendUrl } from "../../../admin/src/App";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

export const sendConfirmationEmail = async (formData, tripType = '') => {
    console.log('formData: ', formData);
    try {
        const mailOptions = {
            from: {
                name: 'Trip Square',
                address: assets.email, // Use the email from assets
            },
            to: assets.email, // Use the email from assets
            subject: `${tripType} Booking Enquiry`,
            html: `
                <h1>${tripType} Booking Enquiry</h1>
                <p>Enquiry is from ${formData.name}</p>
                <h3>UserDetails:</h3>
                <ul>
                    <li>user Name: ${formData.name}</li>
                    <li>User Email: ${formData.email}</li>
                    <li>User Phone Number: ${formData.phone}</li>
                    <li>Enquiry Date: ${new Date().toLocaleDateString()}</li>
                    <li>Enquiry Time: ${new Date().toLocaleTimeString()}</li>
                    <li>Message: ${formData.message || 'Honeymoon Enquiry'}</li>
                </ul>
                <p>Please contact user ASAP!!</p>
            `
        };
        const response = await axios.post(backendUrl + 'api/order/send-email', { mailOptions });
        if (response.data.success) {
            toast.success('Thank you for your enquiry! We will get back to you soon.');
        } else {
            toast.error('Failed to send enquiry, please Click on the WhatsApp button to contact us');
            throw new Error(response.data.message || 'Failed to send confirmation email');
        }
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        // You might want to log this error to a monitoring service
    }
};