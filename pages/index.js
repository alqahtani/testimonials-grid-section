import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-sm min-h-screen bg-light-grayish-blue font-ch px-6 py-10 md:flex md:items-center md:justify-center md:flex-col md:py-24">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Frontend Mentor | Testimonials grid section</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:w-10/12 md:mx-auto">

        <div className="bg-violet rounded-xl shadow-xl p-9 text-white relative z-0 md:col-span-2">
          <img className="absolute top-0 right-10 z-0" style={{ zIndex: -1 }} src="images/bg-pattern-quotation.svg" alt="quotation mark" />

          <div className="flex items-center mb-3">
            <div className="">
              <img className="rounded-full border-2 h-10 w-10 border-white border-opacity-25" src="images/image-daniel.jpg" alt="Daniel Profile Image" />
            </div>
            <div className="ml-3">
              <p className="font-bold">
                Daniel Clifford
              </p>
              <p className="font-thin opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>

          <p className="text-xl mb-4 font-medium z-10">
            I received a job offer mid-course, and the subjects I learned were current, if not more so,
            in the company I joined. I honestly feel I got every penny’s worth.
          </p>

          <div className="opacity-50 z-10">
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
            transition and have heard some people who had an amazing experience here. I signed up
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
            The next 12 weeks was the best - and most grueling - time of my life. Since completing
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </div>


        </div>

        <div className="bg-dark-grayish-blue rounded-xl shadow-xl p-9 text-white relative z-0 md:col-span-1">

          <div className="flex items-center mb-3">
            <div className="">
              <img className="rounded-full border-2 h-10 w-10 border-white border-opacity-25" src="images/image-jonathan.jpg" alt="Daniel Profile Image" />
            </div>
            <div className="ml-3">
              <p className="font-bold">
                Jonathan Walters
              </p>
              <p className="font-thin opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>

          <p className="text-xl mb-4 font-medium">
            The team was very supportive and kept me motivated
          </p>

          <div className="opacity-50">
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
            for a big company. This was one of the best investments I’ve made in myself. ”
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-9 text-dark-blackish-blue relative z-0 md:col-start-1 md:row-start-2 md:col-span-1">

          <div className="flex items-center mb-3">
            <div className="">
              <img className="rounded-full border-2 h-10 w-10 border-white border-opacity-25" src="images/image-jeanette.jpg" alt="Daniel Profile Image" />
            </div>
            <div className="ml-3">
              <p className="font-bold">
                Jeanette Harmon
              </p>
              <p className="font-thin opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>

          <p className="text-xl mb-4 font-medium">
            An overall wonderful and rewarding experience
          </p>

          <div className="opacity-50">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
            while doing something I love. ”
          </div>
        </div>

        <div className="bg-dark-blackish-blue rounded-xl shadow-xl p-9 text-white relative z-0 md:col-start-2 md:row-start-2 md:col-span-2">

          <div className="flex items-center mb-3">
            <div className="">
              <img className="rounded-full border-2 h-10 w-10 border-white border-opacity-25" src="images/image-patrick.jpg" alt="Daniel Profile Image" />
            </div>
            <div className="ml-3">
              <p className="font-bold">
                Patrick Abrams
              </p>
              <p className="font-thin opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>

          <p className="text-xl mb-4 font-medium">
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
            learning from their experiences was easy.
          </p>

          <div className="opacity-50">
            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
            gave me the confidence necessary to be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the personal attention you need from
            an incredible community of smart and amazing people. ”
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 text-dark-blackish-blue relative z-0 md:col-start-4 md:row-start-1 md:row-span-2">

          <div className="flex items-center mb-3">
            <div className="">
              <img className="rounded-full border-2 h-10 w-10 border-white border-opacity-25" src="images/image-kira.jpg" alt="Daniel Profile Image" />
            </div>
            <div className="ml-3">
              <p className="font-bold">
                Kira Whittle
              </p>
              <p className="font-thin opacity-50">
                Verified Graduate
              </p>
            </div>
          </div>

          <p className="text-xl mb-4 font-medium">
            Such a life-changing experience. Highly recommended!
          </p>

          <div className="opacity-50">
            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
            professionals who can help me learn programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the program. The entire curriculum and staff
            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
            100% recommend! ”
          </div>
        </div>

      </div>


      <footer className="text-center mt-4">
        Challenge by <a className="text-violet underline" href="https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7" target="_blank">Frontend Mentor</a>.
        Coded by <a className="text-violet underline" href="https://twitter.com/alqa7tani">Ahmed AlQahtani</a>.
      </footer>
    </div>
  )
}
