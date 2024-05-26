import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0, // Move the X axis on the "From"
        rotation: 0, // Set the rotation animation on the "From"
        borderRadius: "0%", // Set the border radius percentage on the "From"
      },
      {
        x: 250, // Move the X axis on the "To"
        repeat: -1, // Repeat the animation on the "To"
        yoyo: true, // Enable the reverse animation bouncing on the starting point on the "To"
        borderRadius: "100%", // Set the border radius percentage on the "To"
        rotation: 360, // Set the rotation animation on the "To"
        duration: 2, // Set the execution time in seconds on the "To"
        ease: "bounce.out", // Set the animation movement on the "To"
      }
    );
  }, []);

  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
