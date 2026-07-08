export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-neutral-700 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-600 dark:text-neutral-400">
        <p>&copy; {year} Hugo Rusli. All rights reserved.</p>
      </div>
    </footer>
  );
}
