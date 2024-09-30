import profil from "../assets/profile-image.jpg";
function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] justify-center items-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <img
        src={profil}
        alt="profile-image"
        className="w-40 h-40 rounded-full"
      />
      <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Hi!! I&apos;m Muhammad Haris Setiawan
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa,
        expedita molestias natus vel veniam. Quisquam odit expedita deserunt
        maxime!
      </p>
    </div>
  );
}

export default Home;
