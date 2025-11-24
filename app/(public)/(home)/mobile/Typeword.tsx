"use client";
import React, { useState, useEffect } from "react";

const TypewriterEffect = ({
  words = ["Register now !", "Limited seat available !"],
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 1000,
  loop = true,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    // PAUSE MODE (fixed)
    if (pause) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // TYPING MODE
          if (charIndex < currentWord.length) {
            const updated = currentWord.slice(0, charIndex + 1);
            setText(updated);
            setCharIndex(charIndex + 1);

            // Check if we just typed the last character
            if (charIndex + 1 === currentWord.length) {
              setPause(true);
              setTimeout(() => {
                setIsDeleting(true);
                setPause(false);
              }, delay);
            }
          }
        } else {
          // DELETING MODE
          if (charIndex > 0) {
            const updated = currentWord.slice(0, charIndex - 1);
            setText(updated);
            setCharIndex(charIndex - 1);
          } else {
            // Finished deleting entire word
            setIsDeleting(false);
            setWordIndex((prev) =>
              loop
                ? (prev + 1) % words.length
                : Math.min(prev + 1, words.length - 1)
            );
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    pause,
    words,
    wordIndex,
    loop,
    typeSpeed,
    deleteSpeed,
    delay,
  ]);

  return <span className=" text-[#29AE48]">{text}</span>;
};

export default TypewriterEffect;
