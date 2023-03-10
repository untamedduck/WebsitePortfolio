import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl dont-bold inline border-b-4 border-gray-5">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo
          dolorem eius, eveniet ab officia voluptates maiores, cumque iste,
          itaque explicabo! Dignissimos illo alias et aut quae error quo sequi
          nostrum dicta officia, corporis dolores reiciendis assumenda,
          accusamus nihil reprehenderit eum laborum, esse magni perspiciatis
          eligendi aliquid. Modi, laboriosam distinctio!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas soluta
          provident rerum nobis, sunt officiis accusamus praesentium odit quasi,
          quia laborum atque. Maiores quis officiis aliquam esse. Cum, suscipit
          voluptatum blanditiis laudantium harum, ab nostrum repellat quo
          aliquid reiciendis adipisci incidunt. Voluptates animi nesciunt sunt,
          nihil unde labore. Nobis, commodi?
        </p>
      </div>
    </div>
  );
};

export default About;
