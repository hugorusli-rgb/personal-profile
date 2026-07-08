import Image from "next/image";

const skills = [
  "Python",
  "Data Analysis",
  "Data Visualization",
  "Exploratory Data Analysis",
  "Customer Communication",
  "Information Synthesis",
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="flex flex-col sm:flex-row gap-8 items-start">
        <Image
          src="/hugo.jpeg"
          alt="Blurry portrait of Hugo Rusli with the northern lights in the background"
          width={200}
          height={200}
          className="rounded-lg"
        />

        <div>
          <section aria-labelledby="bio-heading" className="mb-8">
            <h2 id="bio-heading" className="text-xl font-semibold mb-2">
              My Story
            </h2>
            <p className="text-gray-700 dark:text-neutral-300 mb-3">
              Hi, I&apos;m Hugo! I&apos;m a student at The University of Europe for Applied Sciences, and currently studying Digital Business and Data Science. 
              I love working on myself and learning new things, finding new small projects to improve my skills. Currently, I&apos;m employed at A&O Hostels as a Kitchen Staff and a Data Annotator for Outlier AI.
              Currently, I&apos;m open to work as a Data Scientist or Data Analyst in Germany or Canada.
            </p>
            <p className="text-gray-700 dark:text-neutral-300">
              Outside of my professional life, I enjoy playing video games and learning new languages.
            </p>
          </section>

          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-xl font-semibold mb-3">
              Skills & Interests
            </h2>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              {skills.map((skill) => (
                <li key={skill} className="text-gray-700 dark:text-neutral-300">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
