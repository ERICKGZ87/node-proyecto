
//sintaxis commonjs
//const express= require('express');

import express from 'express'
import router from "./Routes/index.js";
import db from "./config/db.js"


const app=express();//instancia de express

//conectar a la base de datos de

db.authenticate()
.then(() => {console.log("base de datos conectada")})
.catch((error) => {console.log(error)})



    //definir puerto
const port=process.env.PORT || 4000;

//obtener año actual con midleware

app.use((req,res,next)=>{

    const year=new Date()
    res.locals.ActualYear=year.getFullYear()
    res.locals.nombreSitio="Agencia de Viajes"

    return next()
})

//agregar body parser para leer datos del formulario

app.use(express.urlencoded({extended: true}))

//habilitar pug

app.set('view engine', 'pug');

//definir carpeta publica

app.use(express.static("public"))


//agregar routers

app.use("/", router)


app.listen(port,()=> {

console.log(`el servidor esta funcionando en el puerto ${port}`)

})