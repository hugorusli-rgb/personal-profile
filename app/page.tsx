import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "LLM From Scratch",
    description:
      "Followed a hands-on Python course to build a GPT-style LLM from scratch, covering tokenization, embeddings, attention mechanisms, and the training loop — implemented without external LLM libraries to really understand how the pieces fit together.",
    link: "https://github.com/hugorusli-rgb/GPT-from-scratch",
  },
  {
    id: 2,
    name: "Finance Management Dashboard (Ongoing)",
    description:
      "Followed a Next.js course to build a banking dashboard app that links multiple bank accounts and visualizes balances and transaction history in an interactive UI, using Plaid for account connections and Dwolla for transfers.",
    link: "https://github.com/hugorusli-rgb/banking",
  },
  {
    id: 3,
    name: "Credit Card Fraud Detection (future)",
    description:
      "N/A",
    link: "#",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero section */}
      <section aria-labelledby="hero-heading" className="py-16 text-center">
        <h1 id="hero-heading" className="text-4xl font-bold mb-2">
          Hugo Rusli
        </h1>
        <p className="text-xl text-gray-700 dark:text-neutral-300 mb-1">
          Digital Business and Data Science Student
        </p>
        <p className="text-lg text-gray-600 dark:text-neutral-400 mb-6">
          Currently exploring machine learning, finance, and web development through hands-on projects.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/about"
            className="border-2 border-blue-700 dark:border-blue-400 rounded px-5 py-2 font-medium no-underline"
          >
            Learn more about me
          </Link>
          <Link
            href="/contact"
            className="bg-blue-700 dark:bg-blue-500 text-white rounded px-5 py-2 font-medium no-underline"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Highlight section: featured projects */}
      <section aria-labelledby="projects-heading" className="pb-16">
        <h2 id="projects-heading" className="text-2xl font-bold mb-6">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border border-gray-200 dark:border-neutral-700 rounded-lg p-5"
            >
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-neutral-400 mb-3">
                {project.description}
              </p>
              <a href={project.link} className="site-link">
                View {project.name} details
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
