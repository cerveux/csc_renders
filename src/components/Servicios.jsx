import servicios from "./Servicios/servicios";
import Footer from "./Footer";


export default function Servicios() {
    return (
        <>
        <main>
            <div className="servicios">
                <div className="titulos-servicios">
                <h1>Servicios</h1>
                <h3>Espera lo inesperado</h3>
                </div>
                
                {servicios.map((servicio) => {
                    return (
                        <div className="card-container container-sm" >
                            <div className="row">
                                <div class="col-12 col-md-6 texto-servicios text-start">
                                    {servicio.texto}
                                </div>
                                <div class="col-12 col-md-6 img-servicios" style={{ backgroundImage: `url(${servicio.imagen})` }} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
        <Footer />
        </>
        
    )
}