import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_06pijp4";
const TEMPLATE_ID = ""; // TODO

export const sendEmail = ({customerName, customerEmail, orderInfo}) => {
    const templateParams = {
        customerName: customerName,
        customerEmail: customerEmail,
        orderInfo: orderInfo
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(response => {
            console.log(response.text);
        })
        .catch(error => {
            console.log(error.text);
        });
}