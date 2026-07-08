import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
      <p className="text-gray-700 dark:text-neutral-300 mb-8">
        Have a question or want to work together? Fill out the form below
        and I&apos;ll get back to you soon.
      </p>

      <ContactForm />
    </div>
  );
}
