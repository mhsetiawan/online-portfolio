function About() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
          About
        </h1>
        <div className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="mt-4 text-lg font-normal text-gray-500 dark:text-gray-400 sm:max-w-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            sapiente, corrupti necessitatibus quae asperiores, exercitationem
            consectetur doloribus suscipit ratione et veniam iste numquam ipsum?
            Praesentium consequatur laudantium soluta amet cupiditate similique
            voluptates possimus! Odit dicta corporis laborum eum harum, cum enim
            dolorem dolorum placeat ratione iste quod id iusto illum.
          </p>
        </div>
        <div className="mt-10">
          <a
            href=""
            className="text-white text-base cursor-pointer py-4 px-5 rounded-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
