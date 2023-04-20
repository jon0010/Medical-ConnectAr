import React from "react";
import { Link } from "react-router-dom";
import "./IngresoMedicos.css";

const IngresoMedicos = () => {
  return (
    // <div>
    //   <section className="pl-5 bg-gradiente-white-sky-blue">
    //     <h2>Ingreso de Médicos</h2>
    //   </section>

    //   <div className="h5subtitulo">
    //     <h5>
    //       Presta servicio a tus pacientes de forma remota utilizando Medical
    //       Connect, una plataforma de telemedicina de alta calidad utilizada por
    //       médicos y pacientes de todo el mundo.
    //     </h5>
    //   </div>

    //   <section>
    //     <div className="d-grid gap-2 col-6 mx-auto">
    //       <Link to={"/creacionmedico"}>
    //         <button className=" btn-primary" type="button">
    //           CREAR CUENTA
    //         </button>
    //       </Link>
    //       <Link to={"/iniciarsesion"}>
    //         <button className=" btn-primary1" type="button">
    //           INGRESAR
    //         </button>
    //       </Link>
    //     </div>
    //   </section>

    //   <section className="d-grid gap-2 col-6 mx-auto">
    //     <a className="btn btn-primary disabled">Ingresa por Google Aquí</a>
    //     <a
    //       href="#"
    //       className="btn2 btn-secondary disabled "
    //       tabindex="-1"
    //       role="button"
    //       aria-disabled="true"
    //     >
    //       <i className="bi bi-google"></i>
    //     </a>
    //   </section>
    // </div>

    <div>
      <section className="pl-5 bg-gradiente-white-sky-blue">
        <h1 className="h1titulo">Ingreso de Médicos</h1>
      </section>

      <div className="h4subtituloM">
        <h4>
          Presta servicio a tus pacientes de forma remota utilizando Medical
          Connect, una plataforma de telemedicina de alta calidad utilizada por
          médicos y pacientes de todo el mundo.
          <hr></hr>
        </h4>
      </div>
      <div className="img-div-redondoM">
        <img
          className="img-fondo-redondoM"
          src="https://cdn.discordapp.com/attachments/1094314281123717203/1098147432870727711/Diseno_sin_titulo.png"
          alt="foto fondo"
        />
      </div>
      <div>
        <section className="row">
          <div className="d-grid gap-5 col-6 col-md-4 mx-auto">
            <div class="cardMM">
              <Link to={"/creacionpaciente"}>
                <button className=" btn-primary" type="button">
                  CREAR CUENTA
                </button>
              </Link>
            </div>

            <div className="cardM">
              <Link to={"/iniciarsesion"}>
                <button className=" btn-primary1" type="button">
                  INGRESAR
                </button>
              </Link>
            </div>

            <div class="loading text-center">
              <svg width="64px" height="48px">
                <polyline
                  points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                  id="back"
                ></polyline>
                <polyline
                  points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                  id="front"
                ></polyline>
              </svg>
            </div>
          </div>
        </section>
      </div>

      <div className="row">
        <section className="d-grid1M gap-2 col-12 col-md-4 ">
          <button className="buttonGM">
            <svg className="svgGM"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            Ingresa por Google
          </button>
        </section>

        <img
          className="def-fondo-imgM"
          src="https://cdn.discordapp.com/attachments/1094314281123717203/1098150863744290866/Diseno_sin_titulo_1.png"
          alt="imagen fondo"
        />
      </div>
    </div>
  );
};

export default IngresoMedicos;
