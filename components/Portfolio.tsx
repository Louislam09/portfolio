import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  return (
    <div className="flex bg-white text-black">
      <div className="w-2/3 p-8">
        <h1 className="text-4xl font-bold mb-2">Luis Alejandro Martinez Magallanes</h1>
        <p className="text-xl mb-6">FRONTEND DEVELOPER</p>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Profile</h2>
          <p>I am a software development student focused on web technologies in the Front-End part. I have strong knowledge of the ReactJS library and the CSS Materialize framework with which I can build beautiful and modern web pages.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Employment History</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Frontend, Media Revolutions</h3>
            <p className="text-sm text-gray-600">NOVEMBER 2020 - OCTOBER 2023</p>
            <p>Worked implementing and creating new features and solving bugs for a EWallet with NextJs in a infra of monorepo.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software Engineer - Front of Site, Newfold Digital</h3>
            <p className="text-sm text-gray-600">NOVEMBER 2021 - PRESENT</p>
            <p>My work in this union is emphasized in offering support, improvements, and implementation of new features of the "ECommerce" application called Ecomdash. It is a web and mobile software application that enables eCommerce marketers to run their business from anywhere, anytime in a fraction of the time they spend today.</p>
          </div>
          {/* Add more employment history items here */}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software development technologist, ITLA, Santo Domingo</h3>
            <p className="text-sm text-gray-600">OCTOBER 2018</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">English Inmersion Program, UASD, Santo Domingo</h3>
            <p className="text-sm text-gray-600">JANUARY 2016 - DECEMBER 2016</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">References</h2>
          <p>Ing. Mikhael Santos Fernandez</p>
          <p>(849) 351 - 8051</p>
          <p>Ing. Raúl Luna from Media Revolutions</p>
          <p>+1 (829) 450-5444</p>
          <p>Renan Peixotox from Torre</p>
          <p>+5516981422078</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Proyectos</h2>
          <h3 className="text-xl font-semibold">ConnectFour Game</h3>
          <p>My PWA Game ConnectFour is a multiplayer game that I created using FrontEnd HTML5 and CSS3 and BackEnd NodeJs with a server using Express.js and for Socket.io players communication with PeerJS to have an integrated voice chat. With deployed on Heroku.</p>
          <p>Each player can create a room that automatically generates a code that can be shared with one or two friends depending on the game world chosen and then the fun begins.</p>
          <p>Link to the project: <a href="https://connect-four-09.herokuapp.com/" className="text-blue-600 hover:underline">https://connect-four-09.herokuapp.com/</a></p>
        </section>
      </div>

      <div className="w-1/3 bg-blue-900 text-white p-8">
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Details</h2>
          <p>Santo Domingo Norte, 11201</p>
          <p>Santo Domingo</p>
          <p>+1 (829) 280 - 7606</p>
          <p>luisiam09@hotmail.com</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Links</h2>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Gestor de Gastos React App</li>
            <li>Candy Crush Game | HTML4</li>
            <li>CSS3 JS</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          {['Node.js', 'React', 'TypeScript', 'Next.js', 'JavaScript', 'ReactJs', 'Git', 'CSS', 'GraphQL', 'HTML5', 'Bootstrap', 'Apollo Client', 'CSS3', 'Socket.io', 'Express.js', 'Python', 'VueJs', 'MongoDB', 'PostgreSQL'].map((skill) => (
            <div key={skill} className="mb-2">
              <p>{skill}</p>
              <Progress value={Math.random() * 100} className="h-2" />
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Languages</h2>
          <div className="mb-2">
            <p>English</p>
            <Progress value={90} className="h-2" />
          </div>
          <div className="mb-2">
            <p>French</p>
            <Progress value={30} className="h-2" />
          </div>
        </section>
      </div>
    </div>
  )
}