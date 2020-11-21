import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-light-grayish-blue">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Frontend Mentor | [Challenge Name Here]</title>
      </Head>


      <footer className="text-center">
        Challenge by <a className="text-violet underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a className="text-violet underline" href="#">Ahmed AlQahtani</a>.
      </footer>
    </div>
  )
}
