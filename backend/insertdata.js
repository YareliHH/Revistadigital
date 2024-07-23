require('dotenv').config();
const mongoose = require('mongoose');
const Tecnologia = require('./models/tecnologias');
const tecnologias = [
    {
        titulo: "Competencias para la enseñanza-aprendizaje de la bibliotecología y la ciencia de la información en la sociedad digital",
        autor: "JOHANN PIRELA MORILLO",
        descripcion: "Se proponen seis competencias docentes que deben desarrollar los docentes de Bibliotecología y Ciencia de la información, como formadores de los profesionales de  la información requeridos para apalancar procesos de desarrollo sostenible en el contexto de las actuales sociedades digitales.",
        img: "https://media.istockphoto.com/id/1141749740/es/foto/concepto-de-investigaci%C3%B3n-m%C3%A9dica-en-el-campo-de-la-virolog%C3%ADa-y-el-c%C3%A1ncer-mol%C3%A9cula-de-adn-con.jpg?s=1024x1024&w=is&k=20&c=u6yQ-inY4Gb429Xwcr-o7_m0PxDZdCf-g1GALHMim2U=",
        url: "https://ru.iibi.unam.mx/jspui/bitstream/IIBI_UNAM/CL193/1/07_investigacion_bibliotecologica_problemas_johann_pirella_morillo.pdf",


    },
    {
        titulo: "El uso del Método Design Thinking en la investigación aplicada para integrar la biblioteca en plataformas.",
        autor: "Ticona Bejarano",
        descripcion: "El presente artículo presenta la aplicación de Design Thinking en el área de requerimientos de software para ayudar y solucionar algunos problemas que existen en el desarrollo de software",
        img: "https://media.istockphoto.com/id/1663265275/es/foto/un-hombre-utiliza-tecnolog%C3%ADa-de-computaci%C3%B3n-en-la-nube-en-su-computadora-port%C3%A1til-para-la.jpg?s=1024x1024&w=is&k=20&c=WMcu1hovSzMe1-S78jHC_j620drKXCtxgEYYvcfQmtw=",
        url: "https://www.redalyc.org/journal/6738/673870838004/673870838004.pdf",


    },

    {
        titulo: "Mejores Prácticas en Proyectos de Ingeniería Mecatrónica",
        autor: "Vargas J.E., Gorrostieta E",
        descripcion: "El presente artículo muestra una síntesis de las mejores prácticas en proyectos de ingeniería mecatrónica que por poco más de 20 años de experiencia profesional han efectuado los autores",
        img: "https://media.istockphoto.com/id/478469116/es/foto/ordenador-de-placa-de-circuito-de.jpg?s=1024x1024&w=is&k=20&c=Dc8gIeOIbxhFoewecOvpstRXYucc05hhqsIZdF3yMKg=",
        url: "https://www.mecamex.net/revistas/LMEM/revistas/LMEM-V07-N03-03.pdf",



    },

    {
        titulo: "La gestión de programas y proyectos territoriales de ciencia e innovación en el sector de la salud pública ",
        autor: "MSc. Katerine Guerra Betancourt",
        descripcion: "El desarrollo de las investigaciones que contribuyen a la generación y aplicación de nuevos conocimientos, productos y procesos que eleven la calidad del sistema de salud cubano constituye una de las prioridades del Ministerio de Salud Pública en el país. ",
        img: "https://media.istockphoto.com/id/1160780299/es/vector/microscopio-con-l%C3%ADquido-en-tubos-de-ensayo-investigaci%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=iOh5dWB0IdeYuO71mizPGJMW3QYztxxbdMj6uFMbz30=",
        url: "http://scielo.sld.cu/pdf/ics/v24n4/ics07413.pdf",


    },

    {
        titulo: "Sistema de medición de riesgos en enrutadores bajo el estándar 802.11g basándose en los lineamientos planteados",
        autor: "MSc. Katerine Guerra Betancourt",
        descripcion: "Un incoveniente en las redes inalambricas la seguridad debido a la emision de señales es por el aire ",
        img: "https://media.istockphoto.com/id/480708970/es/foto/m%C3%A1quina-para-sistema-rob%C3%B3tico-manejo-de-la-industria-farmac%C3%A9utica.jpg?s=1024x1024&w=is&k=20&c=bJYGcf8rCF-MI4YwxuJWSUUztcAy3PSquV3bqw8R5vY=",
        url: "https://repositorio.unal.edu.co/bitstream/handle/unal/32941/19725-106815-1-PB.pdf?sequence=1",

    },
    {
        titulo: "La minería de datos espaciales y su aplicación en los estudios de salud y epidemiología",
        autor: "Ing. Liset González Polanco",
        descripcion: "La acumulación de información espacial producto del desarrollo de los sistemas informáticos, y en especial de los sistemas de información geográfica, propicia la aplicación de técnicas de minería de datos espaciales para la extracción de nuevos conocimientos que asistan a la toma de decisiones",
        img: "https://media.istockphoto.com/id/1248604121/es/foto/en-otros-virus-puede-ocurrir-en-el-planeta-tierra-despu%C3%A9s-de-covid-19-enfermedad-pand%C3%A9mica.jpg?s=1024x1024&w=is&k=20&c=GdmI_zyRfVL4ueFY2gl4f3tDAOEpu0X4zD42BlylYPc=",
        url: "http://scielo.sld.cu/pdf/ics/v24n4/ics10413.pdf",


    },

]
mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('Conectado a la base de datos MongoDB');
        try {
            await Tecnologia.insertMany(tecnologias);
            console.log('Datos de tecnologías insertados');
        } catch (err) {
            console.error('Error al insertar datos:', err);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch(err => console.error('Error de conexión a MongoDB:', err));
