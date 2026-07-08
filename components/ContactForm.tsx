"use client";

import { useState } from "react";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const MIN_MESSAGE_LENGTH = 20;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate(data: FormFields): FormErrors {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (data.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Your message needs to be at least ${MIN_MESSAGE_LENGTH} characters long.`;
    }

    return newErrors;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = validate(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No real backend here yet - just show a success message.
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitted(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-md">
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full border border-gray-400 dark:border-neutral-600 rounded px-3 py-2 bg-white dark:bg-neutral-800"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-red-700 dark:text-red-400 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full border border-gray-400 dark:border-neutral-600 rounded px-3 py-2 bg-white dark:bg-neutral-800"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-red-700 dark:text-red-400 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full border border-gray-400 dark:border-neutral-600 rounded px-3 py-2 bg-white dark:bg-neutral-800"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-700 dark:text-red-400 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-700 dark:bg-blue-500 text-white rounded px-5 py-2 font-medium"
      >
        Send Message
      </button>

      {submitted && (
        <p
          role="status"
          aria-live="polite"
          className="text-green-700 dark:text-green-400 mt-4"
        >
          Thanks for reaching out! Your message has been sent.
        </p>
      )}
    </form>
  );
}
