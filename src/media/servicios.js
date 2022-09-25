import Modelado3d from "../components/Servicios/Modelado3d";
import Postproducción from "../components/Servicios/Postproduccion";
import Renderizado3d from "../components/Servicios/Renderizado3d";


const servicios = [
  {
    imagen:
    "https://static.wixstatic.com/media/2f903d_b5d8780d893841a59c3122f8980ba826~mv2.jpg/v1/fill/w_595,h_740,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/2f903d_b5d8780d893841a59c3122f8980ba826~mv2.jpg",
      texto: <Modelado3d />,
  },
  {
    imagen:
      "https://static.wixstatic.com/media/2f903d_f680702357a1441bb2a1e65f7a92dfb7~mv2.jpg/v1/fill/w_595,h_520,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/2f903d_f680702357a1441bb2a1e65f7a92dfb7~mv2.jpg",
      texto: <Renderizado3d />,
  },
  {
    imagen:
      "https://static.wixstatic.com/media/2f903d_c2cb4eeb30284700940cfb6c1b394267~mv2.png/v1/fill/w_595,h_480,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/2f903d_c2cb4eeb30284700940cfb6c1b394267~mv2.png",
    texto: <Postproducción />,
  },
];

export default servicios;
