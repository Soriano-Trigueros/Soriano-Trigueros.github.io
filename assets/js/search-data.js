// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "all publications are open and can be accessed through the html button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-docencia",
          title: "docencia",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/docencia/";
          },
        },{id: "news-i-am-giving-a-talk-at-issac2025-in-guanajuato",
          title: 'I am giving a talk at ISSAC2025 in Guanajuato',
          description: "",
          section: "News",},{id: "news-i-have-started-as-a-tenure-track-faculty-at-universidad-de-sevilla",
          title: 'I have started as a tenure-track faculty at Universidad de Sevilla',
          description: "",
          section: "News",},{id: "news-i-am-giving-a-flash-talk-at-atmcs-2026-in-mpi-leipzig",
          title: 'I am giving a flash talk at ATMCS 2026 in MPI Leipzig.',
          description: "",
          section: "News",},{id: "projects-f-structures-on-manifolds",
          title: 'f-structures on manifolds',
          description: "An study of this (1,1)-tensor structure as part of my master degree&#39;s final project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fstructure_project/";
            },},{id: "projects-induced-matching",
          title: 'Induced matching',
          description: "Can information contained in a function of persistence modules be summarized in a matching?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/matching_project/";
            },},{id: "projects-vectorization-methods",
          title: 'Vectorization methods',
          description: "Transforming barcodes into valid inputs for statistics and machine learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vect_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
