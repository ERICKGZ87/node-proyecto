import { Testimonial } from "../models/Testimoniales.js";

const GuardarTestimoniales = async (req, res) => {
  //validar
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "el nombre esta vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "el correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "el mensaje esta vacio" });
  }
  if (errores.length > 0) {
//consultar testimoniales existentes

const testimonialesB = await Testimonial.findAll();




    //mostrar msj error
    res.render("testimoniales", {
      pagina: "testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimonialesB
    });
  } else {
    //insertar en la base de datos para
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });

    
      res.redirect("/testimoniales")

    } catch (err) {
      console.log(err);
    }
  }
};

export { GuardarTestimoniales };
