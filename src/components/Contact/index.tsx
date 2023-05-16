const linkedin = 'https://www.linkedin.com/in/jsmarenco/'
const github = 'https://github.com/JsMarenco'
const twitter = 'https://twitter.com/JsMarenco'

export default function Contact() {
  return (
    <section id="contact" className="my-20 px-5 max-w-xl mx-auto">
      <h6 className="text-2xl text-center font-bold mb-3 text-gray-500">
        Contact
      </h6>

      <article className="flex align-middle justify-center">
        <div
          className="text-gray-600 border border-gray-600 w-12 mx-1 h-12 text-xl text-center p-2 rounded-full cursor-pointer hover:text-gray-300"
          onClick={() => window.open(twitter, '_blank', 'noopener,noreferrer')}
        >
          <i className="fa-brands fa-twitter"></i>
        </div>

        <div
          className="text-gray-600 border border-gray-600 w-12 mx-1 h-12 text-xl text-center p-2 rounded-full cursor-pointer hover:text-gray-300"
          onClick={() => window.open(github, '_blank', 'noopener,noreferrer')}
        >
          <i className="fa-brands fa-github"></i>
        </div>

        <div
          className="text-gray-600 border border-gray-600 w-12 mx-1 h-12 text-xl text-center p-2 rounded-full cursor-pointer hover:text-gray-300"
          onClick={() => window.open(linkedin, '_blank', 'noopener,noreferrer')}
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </article>
    </section>
  )
}
