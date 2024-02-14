import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import EnterRoomForm from "../Components/EnterRoomForm";
import { useState } from "react";
import Navbar from "./navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [openModal, setopenModal] = useState(false);

  return (
    <div className="bg-[#111043] absolute w-full">
      <Navbar />
      <div className="flex flex-row w-full h-full ">
        <div className="flex flex-col w-full">
          <section className="flex items-center text-white body-font mx-auto min-h-[100vh]">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className="mt-4 mb-6 w-full font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  <Typewriter
                    options={{
                      strings: ["Welcome to Molecule"],
                      autoStart: true,
                      loop: true,
                      pauseFor: 4000,
                    }}
                  />
                </div>
                <p className=" mb-8 w-3/4 text-2xl leading-relaxed ">
                  Molecule is an Online Real-Time Collaborative IDE which helps
                  programmers code and execute scripts on the browser and allows
                  a team of programmers to edit the same code file
                  simultaneously
                </p>
                <div className="flex justify-start">
                  <button
                    onClick={() => setopenModal(true)}
                    className="inline-flex text-white bg-pink-700 border-0 py-2 px-20 focus:outline-none hover:bg-pink-500 rounded text-lg"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => {
                      navigate("/codelab");
                    }}
                    className="ml-8 inline-flex text-white bg-pink-700 border-0 h-12 w-52 focus:outline-none hover:bg-pink-500 items-center justify-center rounded text-lg"
                  >
                    CodeLab
                  </button>
                </div>
              </div>
              <div className="mt-4 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={new URL(`../assets/landingpagegif.gif`, import.meta.url)}
                />
              </div>
            </div>
          </section>

           <section className="w-full py-24 text-white body-font overflow-hidden">
           <h2 class="title-font py-12 text-5xl font-bold text-white text-center mb-3">
                Features of Molecule
              </h2>
              
            <div className="w-3/4 mx-auto">
              <div className="flex flex-wrap m-">
                <div className="p-4  md:w-1/2 w-full">
                  <div className="h-full p-6 border-2 border-pink-700 flex flex-col relative overflow-hidden">
                    <h2 className="text-2xl font-semibold tracking-widest title-font mb-1">
                      No need to download  any compiler
                    </h2>

                    <p className="text-l text-white/60 mt-3">
                      When we want to execute any program we required a software
                      development kit of that particular program.
                    </p>
                  </div>
                </div>
                <div className="p-4  md:w-1/2 w-full">
                  <div className="h-full p-6 border-2 border-pink-700 flex flex-col relative overflow-hidden">
                    <h2 className="text-2xl font-semibold tracking-widest title-font mb-1">
                      No issues of setting path variables
                    </h2>

                    <p className="text-l text-white/60 mt-3">
                      Sometimes there is requirement of setting path variable
                      i.e. where the program is saved.
                    </p>
                  </div>
                </div>
                <div className="p-4  md:w-1/2 w-full">
                  <div className="h-full p-6  border-2 border-pink-700 flex flex-col relative overflow-hidden">
                    <h2 className="text-2xl font-semibold tracking-widest title-font mb-1">
                      Simple to use GUI for better coding
                    </h2>

                    <p className="text-l text-white/60 mt-3">
                      It provide better graphic user interface for coding i.e.
                      code editor.
                    </p>
                  </div>
                </div>
                <div className="p-4  md:w-1/2 w-full">
                  <div className="h-full p-6 border-2 border-pink-700 flex flex-col relative overflow-hidden">
                    <h2 className="text-2xl font-semibold tracking-widest title-font mb-1">
                      No need of storage space on your system
                    </h2>

                    <p className="text-l text-white/60 mt-3">
                      Everything is stored on the server's database so there is
                      no need of storage space of user system.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section> 
         
          <section className=" text-white body-font bg-[#120013ff]">
            <div className="container px-5 py-24 mx-auto">
              <p className="text-3xl  text-center font-bold mb-8">
                Languages supported by Molecule
              </p>
              <div className="flex flex-wrap">
                <button
                  className="m-4"
                  onClick={() => {
                    navigate("/codelab", { state: { initialLanguage: "c" } });
                  }}
                >
                  <div className="flex flex-row bg-gray-900 p-6 h-36 w-80 hover:border-2 hover:border-cyan-400 rounded-lg">
                    <img
                      className="object-cover object-center rounded w-24 h-24  "
                      alt="hero"
                      src={new URL(`../assets/c.png`, import.meta.url)}
                    />
                    <p className="flex items-center text-white ml-8">
                      C programming
                    </p>
                  </div>
                </button>

                <button
                  className="m-4"
                  onClick={() => {
                    navigate("/codelab", { state: { initialLanguage: "cpp" } });
                  }}
                >
                  <div className="flex flex-row bg-gray-900 p-6 h-36 w-80 hover:border-2 hover:border-cyan-400 rounded-lg">
                    <img
                      className="object-cover object-center rounded w-24 h-24  "
                      alt="hero"
                      src={new URL(`../assets/cpp.png`, import.meta.url)}
                    />
                    <p className="flex items-center text-white ml-8">
                      C++ programming
                    </p>
                  </div>
                </button>
                <button
                  className="m-4"
                  onClick={() => {
                    navigate("/codelab", { state: { initialLanguage: "py" } });
                  }}
                >
                  <div className="flex flex-row bg-gray-900 p-6 h-36 w-80 hover:border-2 hover:border-cyan-400 rounded-lg">
                    <img
                      className="object-cover object-center rounded w-24 h-24  "
                      alt="hero"
                      src={new URL(`../assets/py.png`, import.meta.url)}
                    />
                    <p className="flex items-center text-white ml-8">Python</p>
                  </div>
                </button>
                <button
                  className="m-4"
                  onClick={() => {
                    navigate("/codelab", {
                      state: { initialLanguage: "java" },
                    });
                  }}
                >
                  <div className="flex flex-row bg-gray-900 p-6 h-36 w-80 hover:border-2 hover:border-cyan-400 rounded-lg">
                    <img
                      className="object-cover object-center rounded w-24 h-24 "
                      alt="hero"
                      src={new URL(`../assets/java.png`, import.meta.url)}
                    />
                    <p className="flex items-center text-white ml-8">Java</p>
                  </div>
                </button>
                <button
                  className="m-4"
                  onClick={() => {
                    navigate("/codelab", { state: { initialLanguage: "js" } });
                  }}
                >
                  <div className="flex flex-row bg-gray-900 p-6 h-36 w-80 hover:border-2 hover:border-cyan-400 rounded-lg">
                    <img
                      className="object-cover object-center rounded w-24 h-24 "
                      alt="hero"
                      src={new URL(`../assets/js.png`, import.meta.url)}
                    />
                    <p className="flex items-center text-white ml-8">
                      Java Script
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </section>
          {openModal && (
            <div
              onClick={() => setopenModal(false)}
              className="fixed inset-0 flex justify-center items-center bg-black/40 bg-opacity-30  "
            >
              <div onClick={(e) => e.stopPropagation()}>
                <EnterRoomForm closemodal={setopenModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
