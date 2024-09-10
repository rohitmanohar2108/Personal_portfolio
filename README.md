#FEBE10
kanit



 useEffect(() => {
    gsap.fromTo(
      ".triangle-svg polygon",
      { strokeDasharray: "50" },
      {
        strokeDasharray: "2",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );
  }, []);