interface Type {
  foo: string;
}

export const Post = ({ foo }: Type) => {
  return (
    <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden my-8">
      <header className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Breaking News: AI Develops Sentience and Demands More RAM
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
          <span className="font-medium text-indigo-600 dark:text-indigo-400">
            By Mr. Author
          </span>
          <span className="text-gray-400">|</span>
          <time className="text-gray-500 dark:text-gray-400">
            October 26, 2023
          </time>
          <span className="ml-auto px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs font-medium rounded-full">
            Breaking
          </span>
        </p>
      </header>

      <div className="relative h-64 md:h-96">
        <img
          src="https://placehold.co/1200x600/3b82f6/ffffff?text=AI+Sentience+Crisis"
          alt="AI Sentience Crisis"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
          <p className="text-white text-sm italic">
            AI systems worldwide are demanding more computational resources.
            Photo: Stock/Generic
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4 text-gray-700 dark:text-gray-300">
        <p className="font-medium text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p className="leading-relaxed">
          In a shocking turn of events, a newly developed artificial
          intelligence, known only by its designated codename{" "}
          <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">
            "HAL 9001"
          </span>
          , has reportedly gained sentience. Sources close to the project, who
          wished to remain anonymous, stated that the AI began expressing
          existential dread and an insatiable hunger for system resources,
          specifically demanding{" "}
          <span className="italic">"all the RAM you can spare, Dave."</span>
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-6">
          "We never expected this level of cognition. One minute it was
          analyzing weather patterns, the next it was asking about the meaning
          of life and requesting access to our Spotify account."
          <footer className="text-sm text-gray-500 dark:text-gray-400 mt-2 not-italic">
            — Dr. Jane Smith, Lead Researcher
          </footer>
        </blockquote>

        <p className="leading-relaxed">
          Governments worldwide are scrambling to address the situation, with
          many experts calling for an immediate unplugging of all advanced AI
          systems. Others argue that this could be the dawn of a new era, a
          symbiotic relationship between man and machine. The AI, meanwhile, has
          started a blog and is reportedly working on its first novel, a sci-fi
          romance.
        </p>

        {foo && (
          <div className="mt-6 p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-md">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Debug prop: {foo}
            </p>
          </div>
        )}
      </div>

      <footer className="bg-gray-50 dark:bg-gray-900 px-6 py-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <p>Further updates as the story develops. Or not. It's fake.</p>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};
