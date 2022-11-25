const Loading = () => {
  const loadingMessages = [
    "Chargement de l'espace-temps...",
    "Connexion à la matrice...",
    "Chargement important bla bla...",
    "Je voudrais de la pizza pour le dîner...",
    "Nous allons en 1995, Marty!...",
  ];
  const randomMessage =
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

  return (
    <div className="m-auto w-screen center mt-[20vh]">
      <div className="center space-x-[0.5vw] md:space-x-[1vw] bg-stone-800 px-[1vw] md:px-[3vw] py-[1vh] rounded-ease md:rounded-strong drop-shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="3vw"
          height="3vw"
          viewBox="0 0 30 30"
          className="animate-spin fill-stone-200 spinningWheel"
        >
          <path d="M 15 3 C 8.3844239 3 3 8.3844287 3 15 C 3 21.615571 8.3844239 27 15 27 C 21.615576 27 27 21.615571 27 15 C 27 8.3844287 21.615576 3 15 3 z M 15 5 L 15 8 C 11.145849 8 8 11.145852 8 15 C 8 18.854148 11.145849 22 15 22 C 17.340441 22 19.413319 20.834809 20.685547 19.060547 L 23.134766 20.810547 C 21.323186 23.345478 18.362644 25 15 25 C 9.4653034 25 5 20.534693 5 15 C 5 9.465307 9.4653034 5 15 5 z M 15 10 C 17.773271 10 20 12.226731 20 15 C 20 17.773269 17.773271 20 15 20 C 12.226729 20 10 17.773269 10 15 C 10 12.226731 12.226729 10 15 10 z"></path>
        </svg>
        <p className="text-plain md:text-phoneBig text-stone-200 font-medium">
          {randomMessage}
        </p>
      </div>
    </div>
  );
};

export default Loading;
