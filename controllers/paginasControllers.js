import { Viaje } from "../models/Viajes.js"; //importando el modelo
import { Testimonial } from "../models/Testimoniales.js"; //importando el modelo


const paginaInicio = async (req, res) => {
//consultar 3 viajes del modelo

const promiseDB=[];

promiseDB.push(Viaje.findAll({limit:3}))
promiseDB.push(Testimonial.findAll({limit:3}))

try{

  const resultado=await Promise.all(promiseDB)

  // const viajesB=await Viaje.findAll({limit:3})
  // const testimonialesB=await Testimonial.findAll({limit:3})

  res.render("inicio", {
    pagina: "inicio",
    clase:"home",
    viajesB:resultado[0],
    testimonialesB:resultado[1]
  });

}catch(err){console.log(error)}


};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  //consultar viajes  de BD

  try{
    const viajesB = await Viaje.findAll();

    res.render("viajes", {
      pagina: "Proximos Viajes",
      viajesB,
    });
  }catch(err){console.log(err)}
  
};

const paginaTestimoniales = async (req, res) => {
  //consultar testimonios  de BD

try{

  const testimonialesB = await Testimonial.findAll();

  res.render("testimoniales", {
    pagina: "testimoniales",
    testimonialesB
  });
}catch(error){
  console.log(error)
}


  


};

//muestra un viaje por su slug

const paginaDetalleViaje = async (req, res) => {
  
  const { slug } = req.params;

  try {
    const resultado = await Viaje.findOne({where:{slug:slug}})
  
    res.render("viaje", {
      pagina: "Informacion del viaje",
      resultado,
    });
  } catch (err) {
    console.log(err);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
};
