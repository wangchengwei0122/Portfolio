import Section from "../layout/Section";

const contactMethods = [
  { label: "Location", value: "San Francisco, CA" },
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { label: "GitHub", value: "github.com/username", href: "https://github.com/username" },
  { label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com/in/username" },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="mb-6 text-lg text-neutral-700 dark:text-neutral-300">
            I&apos;m currently open to senior frontend and web3 engineering opportunities.
            Let&apos;s build something great together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              Email Me
            </a>
            <a
              href="#"
              className="rounded-lg border border-neutral-900 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Get in Touch
          </h3>
          <address className="not-italic">
            <ul className="space-y-3">
              {contactMethods.map((method) => (
                <li
                  key={method.label}
                  className="flex items-baseline gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <span className="w-24 font-medium text-neutral-900 dark:text-neutral-100">
                    {method.label}:
                  </span>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span>{method.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </address>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
