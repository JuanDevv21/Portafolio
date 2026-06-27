import styles from "./page.module.css"
import Image from "next/image"
import FotoPerfil from '../assets/images/fotoPerfil.png'
import Users from "../assets/images/group.svg"
import Code from "../assets/images/code.svg"
import Rocket from "../assets/images/rocket.svg"
import JavaScript from "../assets/images/javascript.svg"
import Jest from "../assets/images/jest.svg"
import Mysql from "../assets/images/mysql.svg"
import Mongo from "../assets/images/mongodb.svg"
import Nextjs from "../assets/images/nextjs.svg"
import Play from "../assets/images/playwright.svg"
import Postgres from "../assets/images/postgresql.svg"
import Prisma from "../assets/images/prisma.svg"
import Python from "../assets/images/python.svg"
import ReactLogo from "../assets/images/react.svg"
import Stripe from "../assets/images/stripe.svg"
import Supabase from "../assets/images/supabase.svg"
import Sequelize from "../assets/images/sequelize.svg"
import Exp from "../assets/images/expressjs.svg"
import ReactJS from "../assets/images/react.svg"
import Type from "../assets/images/typescript.svg"
import Html from "../assets/images/html5.svg"
import Css from "../assets/images/css.svg"
import Ecodrop from "../assets/images/ecodrop.png"
import Vasquez from "../assets/images/vasquez.png"
import PropRent from "../assets/images/proprent.png"
import FormularioContacto from "../components/Formulario"
import Envelope from '../assets/images/envelope.svg'
import Location from '../assets/images/location-blank.svg'
import Phone from '../assets/images/phone.svg'


const Home = () => {
  return (
    <>
      <section className={styles.top}>
        <nav className={styles.navbar}>
        <section>
          <Image style={{borderRadius: "50px"}} loading="eager" src={FotoPerfil} alt="Foto de perfil" width={50} height={50}></Image>
          <h4>Juan Camilo Gonzalez</h4>
        </section>
        <section>
          <span>Sobre mi</span>
          <span>Habilidades</span>
          <span>Proyectos</span>
          <span>Experiencia</span>
        </section>
        <section>
          <p>Contáctame</p>
        </section>
      </nav>

        <div className={styles.hero}>
          <h1>Hola, soy <span className={styles.textodegradado}>Juan Camilo</span> Desarrollador<br></br> de <span className={styles.textodegradado}>Software</span></h1>
          <span className={styles.heroparrafo}>Diseño y construyo productos digitales rápidos, accesibles, escalables y centrados en el usuario. Convierto ideas en experiencias digitales que facilitan procesos y generan resultados</span>
          <div className={styles.actionbtn}>
            <p>Trabajemos juntos</p>
            <p>Mis proyectos</p>
          </div>
        </div>

        <section className={styles.section1}>
          <div className={styles.section1top}>
            <p>SOBRE MÍ</p>
          </div>
          <div className={styles.section1buttom}>
            <div className={styles.section1left}>
              <h2>Construyo<br></br> productos que <span className={styles.textodegradado}>la <br></br>gente ama usar.</span></h2>
            </div>
            <div className={styles.section1right}>
              <span style={{marginBottom: "20px"}}>Soy un desarrollador de software con pasion por crear interfáces limpias, escalables y centradas en el usuario. Combino habilidades técnicas sólidas con sensibilidad por el diseño.</span>
              <span>Trabajo con startups y equipos que quieren lanzar rapido sin sacrificar calidad. Mi enfoque pasa por el codigo mantenible, performance medible y experiencias que convierten.</span>
              <div className={styles.bloq}>
                <div className={styles.card}>
                  <Image src={Code} alt="codigo"></Image>
                  <span>Código limpio</span>
                </div>
                <div className={styles.card}>
                  <Image src={Rocket} alt="cohete"></Image>
                  <span>Performance</span>
                </div>
                <div className={styles.card}>
                  <Image src={Users} alt="group"></Image>
                  <span>UX primero</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.section2title}>
          <h2>Herramientas con las que<br></br>que <span className={styles.textodegradado}>construyo</span>.</h2>
        </div>
        <section className={styles.section2}>
          <div className={styles.techcards}>
            <p>Lenguajes</p>
            <div className={styles.imagenes}>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Python} alt="Python" width={40} height={40} />
                  <span>Python</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={JavaScript} alt="JavaScript" width={40} height={40} />
                  <span>JavaScript</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Type} alt="TypeScript" width={40} height={40} />
                  <span>TypeScript</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Html} alt="Html" width={40} height={40} />
                  <span>Html</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Css} alt="Css" width={40} height={40} />
                  <span>Css</span>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.techcards}>
            <p>Frameworks</p>
            <div className={styles.imagenes}>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Exp} alt="Express" width={40} height={40} />
                  <span>Express</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Nextjs} alt="NextJS" width={40} height={40} />
                  <span>NextJS</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={ReactJS} alt="React" width={40} height={40} />
                  <span>React</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Sequelize} alt="Sequelize" width={40} height={40} />
                  <span>Sequelize</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Stripe} alt="Stripe" width={40} height={40} />
                  <span>Stripe</span>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.techcards}>
            <p>Bases de datos</p>
            <div className={styles.imagenes}>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Supabase} alt="Supabase" width={40} height={40} />
                  <span>Supabase</span>
                </div>
              </button>
              <button className={styles.tecla}>
                <div className={styles.teclaCara}>
                  <Image src={Mongo} alt="Mongodb" width={40} height={40} />
                  <span>Mongo</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Mysql} alt="MySQL" width={40} height={40} />
                  <span>MySQL</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Postgres} alt="Postgresql" width={40} height={40} />
                  <span>PostgreSQL</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Prisma} alt="Prisma" width={40} height={40} />
                  <span>Prisma</span>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.techcards}>
            <p>Testing</p>
            <div className={styles.imagenes}>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Play} alt="Playwright" width={40} height={40} />
                  <span>Playwright</span>
                </div>
              </button>
              <button className={styles.tecla}>
                  <div className={styles.teclaCara}>
                  <Image src={Jest} alt="Jest" width={40} height={40} />
                  <span>Jest</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.section3}>
          <div className={styles.section3top}>
            <h2>Proyectos <span className={styles.textodegradado}>recientes</span>.</h2>
            <p>Algunos de los ultimos proyectos en los que he trabajado, desde MVPs hasta plataformas en producción</p>
          </div>
          <div className={styles.section3buttom}>
            <div className={styles.projectcard}>
              <div className={styles.referencias}>
                <Image src={Ecodrop} alt="Ecodrop" width={356} height={300}></Image>
              </div>
              <p>EcoDrop ProductPage</p>
              <span className={styles.descripcion}>Product Page desarrollada a partir del lanzamiento de un producto destinado al tratamiento de la piel, el objetivo fue recopilar datos de contacto de clientes a cambio de un descuento</span>
              <div className={styles.techaplicada}>
                <span className={styles.tags}>ExpressJS</span>
                <span className={styles.tags}>JavaScript</span>
                <span className={styles.tags}>React</span>
                <span className={styles.tags}>Css</span>
                <span className={styles.tags}>Html</span>
              </div>
            </div>

            <div className={styles.projectcard}>
              <div className={styles.referencias}>
                <Image src={Vasquez} alt="Vasquez Asociados" width={356} height={300}></Image>
              </div>
              <p>Vasquez & Asociados</p>
              <span className={styles.descripcion}>Landing page para Vasquez & Asociados, el proposito fue reforzar la confianza del cliente y generar presencial digital para la captacion de nuevos clientes</span>
              <div className={styles.techaplicada}>
                <span className={styles.tags}>JavaScript</span>
                <span className={styles.tags}>Html</span>
                <span className={styles.tags}>Css</span>
                <span className={styles.tags}>ExpressJS</span>
                <span className={styles.tags}>NextJS</span>
                <span className={styles.tags}>PostgreSQL</span>
                <span className={styles.tags}>Prisma</span>
              </div>
            </div>

            <div className={styles.projectcard}>
              <div className={styles.referencias}>
                <Image src={PropRent} alt="PropRent" width={356} height={300}></Image>
              </div>
              <p>PropRent</p>
              <span className={styles.descripcion}>SaaS que facilita comunicacion entre propietario e inquilino, ideal para multipropiedades, centraliza la informacion y genera reportes y trazabilidad</span>
              <div className={styles.techaplicada}>
                <span className={styles.tags}>Prisma</span>
                <span className={styles.tags}>MySQL</span>
                <span className={styles.tags}>NextJS</span>
                <span className={styles.tags}>Jest</span>
                <span className={styles.tags}>TypeScript</span>
                <span className={styles.tags}>ExpressJS</span>
                <span className={styles.tags}>Supabase</span>
                <span className={styles.tags}>Playwright</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section4}>
          <div className={styles.section4left}>
            <h2>¿Tienes una idea?<br></br> <span className={styles.textodegradado}>Hablemos</span></h2>
            <span>Estoy disponible para proyectos freelance y colaboraciones de largo plazo. Cuéntame sobre tu proyecto y veamos cómo puedo ayudarte</span>
            <div className={styles.contactos}>
              <div style={{backgroundColor: '#1e2936', padding: '4px', borderRadius: '10px', marginRight: '10px'}}>
                <Image src={Envelope} alt="Correo" width={40} height={40}></Image>
              </div>
              <div>
                <p>EMAIL</p>
                <span>camilo20126@gmail.com</span>
              </div>
            </div>
            <div className={styles.contactos}>
              <div style={{backgroundColor: '#1e2936', padding: '4px', borderRadius: '10px', marginRight: '10px'}}>
                <Image src={Location} alt="Ubicacion" width={40} height={40}></Image>
              </div>
              <div>
                <p>UBICACIÓN</p>
                <span>Remoto - Disponible globalmente</span>
              </div>
            </div>
            <div className={styles.contactos}>
              <div style={{backgroundColor: '#1e2936', padding: '4px', borderRadius: '10px', marginRight: '10px'}}>
                <Image src={Phone} alt="Phone" width={40} height={40}></Image>
              </div>
              <div>
                <p>TELEFONO</p>
                <span>+57 310 607 0752</span>
              </div>
            </div>
          </div>
          <div>
            <FormularioContacto></FormularioContacto>
          </div>
        </section>
      </section>
        
    </>
  )
}

export default Home