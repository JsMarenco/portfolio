// Third-party dependencies
import Link from "next/link"

// Current project dependencies
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/JsMarenco",
    icon: <FiGithub />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/jsmarenco",
    icon: <FiTwitter />,
  },
  {
    label: "Email",
    href: "mailto:jsmarenco.dev@gmail.com",
    icon: <FiMail />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jsmarenco/",
    icon: <FiLinkedin />,
  },
]

const Contact = () => {
  return (
    <section className="rounded-xl max-w-3xl z-30 mx-auto w-[90%]" id="contact">
      <h2 className="text-center text-white mb-4 font-medium text-xl">
        Contact
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            aria-label={`JsManrenco link to ${link.label}`}
            role="link"
            target="_blank"
          >
            <article className="shadow-lg p-6 flex items-center justify-center gap-3 rounded-xl bg-[#091530] hover:bg-[#454545] shadow-slate-950 border-gray-400 border-opacity-70 border-3 text-white text-lg font-normal border-dotted">
              <span>{link.icon}</span>
              <span className="hidden sm:flex">{link.label}</span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Contact
