import {useRef, useState} from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_8kp9rpj',
                'template_bc1p8wi',
                {
                    from_name: form.name,
                    to_name: 'Youssef Mohamed',
                    from_email: form.email,
                    to_email: 'youssef.mu.saber@gmail.com',
                    message: form.message
                }, 'RXonCzHfIX4NU3oR6')
            setLoading(false);
            alert("Message sent successfully");
            setForm({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Message failed to send");
        }
    };

    // service_8kp9rpj

    return(
        <section id="contact" className={"c-space my-20"}>
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <div className={"contact-container"}>
                    <p className={"head-text"}>Let's chat</p>
                    <p className={"text-lg text-white-600 mt-3"}>
                        Whether you have a project in mind or just want to say hi, I am always happy to chat.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-12 flex flex-col space-y-7"}>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Your amazing name</span>
                            <input type={"text"} name={"name"} value={form.name} onChange={handleChange} required className={"field-input"} placeholder={"John Doe"}/>
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Your fantastic email</span>
                            <input type="email" name={"email"} value={form.email} onChange={handleChange} required className={"field-input"} placeholder={"JohnDoe@example.com"}/>
                        </label>
                        <label className={"space-y-3"}>
                        <span className={"field-label"}>Your beautiful message</span>
                        <textarea name={"message"} value={form.message} onChange={handleChange} required rows={5} className={"field-input"} placeholder={"Hi, I am interested in ...."}/>
                    </label>
                        <button className={"field-btn"} type={"submit"} disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src={"/assets/arrow-up.png"} alt={"arrow"} className={"field-btn_arrow"}/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;