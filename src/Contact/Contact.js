import 'flowbite'
import emailjs from "@emailjs/browser"
import { useRef } from 'react'
const Contact = () => {
    const form = useRef();

    const submit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_awnni", "template_ki3e5b9", form.current, "y4ILCg0y2oR3AZSn1")
            .then((res) => {
                console.log(res.text)
            },
                (error) => {
                    console.log(error.text);
                }
            )
        e.target.reset();

    }


    return <section id='contact' class="bg-gray-900 md:pt-20">
        <div class="bg-glass py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-center mb-6" style={{ color: "hsl(218, 81%, 95%)" }}>Contactez-nous</h2>
            <p class="mb-8 lg:mb-16 md:pl-12 md:pr-12 text-center font-medium  text-gray-400 sm:text-xl">Vous souhaitez en savoir d'avantage sur awnni et ses services ? Laissez-nous un message.</p>
            <form action="#" ref={form} class="space-y-8" onSubmit={submit}>
                <div>
                    <label for="email" class="block mb-2 text-lg opacity-80 font-medium  text-gray-300">Votre email</label>
                    <input type="email" id="email" name='from_name' class="shadow-sm  border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="email@exemple.com" required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-lg opacity-80 font-medium  text-gray-300">Sujet</label>
                    <input type="text" id="subject" name='subject' class="block p-3 w-full text-sm   rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="En quoi pouvons-nous vous aider ?" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-lg opacity-80 font-medium  text-gray-300">Votre message</label>
                    <textarea id="message" rows="6" name='message' class="block p-2.5 w-full text-sm  rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Laissez un commentaire..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Envoyer</button>
            </form>
        </div>
    </section>
}
export default Contact;