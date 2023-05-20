const linkedin = 'https://www.linkedin.com/in/jsmarenco/'
const github = 'https://github.com/JsMarenco'
const twitter = 'https://twitter.com/JsMarenco'

export default function Contact() {
  return (
    <section id="contact" className="flex align-center justify-center">
      <article
        className="hover:animate-bounce transition ease-in-out duration-150 m-3 hover:text-gray-200 hover:bg-gray-800 hover:border-none hover:shadow-gray-800 hover:shadow-lg text-gray-600 border border-gray-600 w-12 mx-1 h-12 text-xl text-center p-2 rounded-full cursor-pointer"
        onClick={() => window.open(twitter, '_blank', 'noopener,noreferrer')}
      >
        <i className="fa-brands fa-twitter"></i>
      </article>

      <article
        className="hover:animate-bounce transition ease-in-out duration-150 m-3 hover:text-gray-200 hover:bg-gray-800 hover:border-none hover:shadow-gray-800 hover:shadow-lg text-gray-600 border border-gray-600 w-12 mx-1 h-12 text-xl text-center p-2 rounded-full cursor-pointer"
        onClick={() => window.open(github, '_blank', 'noopener,noreferrer')}
      >
        <i className="fa-brands fa-github"></i>
      </article>

      <article
        className="hover:animate-bounce transition ease-in-out duration-150 m-3 hover:text-gray-200 hover:bg-gray-800 hover:border-none hover:shadow-gray-800 hover:shadow-lg text-gray-600 border border-gray-600 w-12 mx-1 h-12 text-xl text-center p-2 rounded-full cursor-pointer"
        onClick={() => window.open(linkedin, '_blank', 'noopener,noreferrer')}
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </article>
    </section >
  )
}
