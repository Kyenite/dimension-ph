import Image from "next/image";
import { Fredoka } from "next/font/google";

import Header from "@components/Header";
import Footer from "@components/Footer";
import CommunityBanner from "@components/CommunityBanner";

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                          Welcome to <span className="bg-gradient-to-tr from-green-700 to-lime-400 bg-clip-text text-transparent">Dimension-PH</span> Online Tutorial Services
                      </h1>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          At Dimension-PH, we are redefining online education by connecting students from all walks of life in a dynamic and inclusive virtual environment. Our innovative teaching methods, personalized support, and dedication to excellence empower learners to unlock their full potential. Join us on a journey of growth, knowledge, and endless opportunities where education knows no boundaries.
                      </p>
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          <button className="shadow-lg shadow-lime-300 hover:shadow-sm bg-gradient-to-tr from-green-700 to-lime-400 hover:from-green-800 hover:to-lime-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition duration-300">
                              Explore Courses
                          </button>
                          <button className="shadow-lg shadow-lime-300 hover:shadow-sm border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-gradient-to-tr hover:from-green-800 hover:to-lime-500 hover:text-white transition duration-300">
                              Learn More
                          </button>
                      </div>
                  </div>
                  
                  <div className="md:w-1/2">
                      <div className="hero-image relative rounded-xl overflow-hidden shadow-xl">
                          <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                              <rect width="600" height="400" fill="#f0fdf4"></rect>
                              
                              <circle cx="500" cy="100" r="50" fill="#dcfce7"></circle>
                              <circle cx="100" cy="300" r="70" fill="#dcfce7"></circle>
                              
                          </svg>
                          
                          <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1" src={"/images/image.jpg"} alt="Personnel Image" width={600} height={480} />
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <section className="bg-gray-300 py-16">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Why Choose <span className="bg-gradient-to-tr from-green-700 to-lime-400 bg-clip-text text-transparent">Dimension-PH</span>?</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Our comprehensive approach to online education ensures that every student receives the attention and resources they need to succeed.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* <!-- Feature 1 --> */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                      <p className="text-gray-600">Learn from ESL teachers with years of experience in language education and cultural exchange.</p>
                  </div>
                  
                  {/* <!-- Feature 2 --> */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Personalized Curriculum</h3>
                      <p className="text-gray-600">Custom learning plans tailored to your specific goals, learning style, and proficiency level.</p>
                  </div>
                  
                  {/* <!-- Feature 3 --> */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Interactive Sessions</h3>
                      <p className="text-gray-600">Engage in dynamic conversations, role-plays, and real-world scenarios to build practical language skills.</p>
                  </div>
              </div>
          </div>
        </section>
        <section className="bg-green-600 px-12 py-24 lg:py-18 relative overflow-hidden">
          <div className="flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start gap-6">
            <div className="w-full h-fit max-w-[580px]">
              <iframe className="relative z-1 w-full h-[60vw] max-h-[440px]" src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1072150300771545%2F&show_text=false&width=560&t=0" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
            <div className="lg:w-1/2 space-y-5 pt-4 relative z-1">
              <h2 className="text-2xl font-bold text-yellow-400 md:text-4xl">Meet Teacher Alia – Your Dedicated Online English Instructor</h2>
              <p className="text-white font-medium">Get to know Teacher Alia Gaile, one of our experienced ESL educators at Dimension PH. With over four years of teaching experience and a bachelor’s degree in English education, Teacher Aliyah has taught students of all ages—from young children to adults. She uses proven methods like CPR (Contextualized Practice and Review) to make learning effective and enjoyable. Her lessons focus on phonics, grammar, pronunciation, and real-life conversation skills to help learners become confident English speakers. Watch the video to see the heart behind our teaching and what makes Dimension PH a trusted name in online English education.</p>
            </div>

            <a className="absolute bg-yellow-400 rounded-lg shadow-lg w-35 h-23 -top-5 right-10 flex flex-col items-center justify-end p-1" href="#">
              <h6 className={`${fredoka.className} text-3xl text-cyan-600 font-bold`}>51Talk</h6>
              <span className="text-xs text-gray-600 text-center">One of our many 3rd Party accounts</span>
            </a> 

            {/* Animate like in the bottom right */}
            <div className="absolute bg-green-800 w-30 h-30 rounded-full -bottom-12 right-18 shadow-lg z-0"></div>
              <div className="absolute bg-green-800 w-30 h-30 rounded-full bottom-15 -right-12 shadow-lg z-0"></div>
              <div className="absolute bg-yellow-300 w-50 h-50 rounded-full -bottom-15 -right-15 shadow-lg z-0">
                <div className="absolute bg-black w-10 h-10 rounded-full top-8 left-18 z-0"></div>
                <div className="absolute bg-black w-10 h-10 rounded-full top-18 left-5 z-0"></div>
              </div>
            </div>

            <div className="absolute z-0 w-40 h-40 border-10 border-green-900 -top-15 -left-10 flex justify-center items-center shadow-lg">
              <div className="w-20 h-20 bg-yellow-400 shadow-lg"></div>
            </div>

            {/* Panda placed AFTER the section but BEFORE CommunityBanner */}
            <div className="absolute z-30 -bottom-3 left-0">
              <div className="bg-[url('/panda.png')] bg-cover bg-center w-50 h-50 lg:w-60 lg:h-60 mx-auto" />
            </div>
        </section>
        <CommunityBanner />
      </main>
      <Footer />
    </>
  );
}
