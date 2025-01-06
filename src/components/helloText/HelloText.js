import React from "react";
import Typed from "typed.js";

function HelloText(args) {
  let final = args["final"] ? args["final"] : "";
  const el = React.useRef(null);
  const hello_langs = [
    "Hello",
    "Hola",
    "Bonjour",
    "こんにちは",
    "안녕하세요",
    "您好",
    "Kaixo",
  ];
  hello_langs.forEach((lang, index) => {
    hello_langs[index] = lang + final;
  });

  React.useEffect(() => {
    const typ1 = new Typed(el.current, {
      strings: hello_langs,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      shuffle: true,
      backDelay: 3000,
      startDelay: 250,
      fadeOut: true,
      showCursor: false,
      /* cursorChar: "▌", */
    });

    return () => {
      typ1.destroy();
    };
  }, []);

  return <span ref={el} />;
}
export default HelloText;
