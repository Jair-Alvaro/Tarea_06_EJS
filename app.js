const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('styles'));

app.get('/Portafolio/1', (req, res) => {
  const datos = {
    inicio: 'Jair IAH',
    imagenUrlfoto: 'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg',
    sobreMi: 'Soy Jair IAH, un apasionado desarrollador web con experiencia en desarrollo front-end y back-end. Mi objetivo es crear soluciones tecnológicas innovadoras para desafíos complejos. Actualmente, trabajo como Desarrollador Web en XYZ Company.',
    email: 'jair@gmail.com',
    telefono: '925755522',
    educacion: 'Desarrollador de Software',
    proyectos: [
        { nombre: 'Sistema de Gestión Escolar', descripcion: 'Desarrollé un sistema completo de gestión escolar para una escuela local. El sistema incluye funcionalidades para la gestión de estudiantes, profesores y calificaciones.', imagenUrl: 'https://www.megacreativos.com/wp-content/uploads/2020/04/2020-04-072-scaled.jpg'},
        { nombre: 'Aplicación de Compras en Línea', descripcion: 'Diseñé y desarrollé una aplicación de compras en línea que permite a los usuarios buscar productos, agregarlos al carrito y realizar pagos seguros.', imagenUrl: 'https://www.tuexpertoapps.com/wp-content/uploads/2017/01/Compra-online.jpg'},
        { nombre: 'Plataforma de Blogging', descripcion: 'Creé una plataforma de blogging intuitiva que permite a los usuarios escribir y publicar sus blogs. La plataforma también tiene funciones sociales como comentarios y compartición en redes sociales.', imagenUrl: 'https://1.bp.blogspot.com/-14aqd30hytM/X2S9b-K-lHI/AAAAAAAAeLU/ZAlRjqc9VHsvazn3416Th2bqo5ZJXyj2ACLcBGAsYHQ/s2048/a7abd7e4-a6a4-4cd5-9cd3-203e0f646908.png'}
    ],
    habilidadesTecnicas: ['Python – Avanzado', 'Django – Avanzado', 'React – Avanzado', 'Node.js - Intermedio', 'GraphQL - Intermedio', 'MongoDB', 'MySQL', 'Bootstrap – Avanzado', 'CSS3 – Avanzado', 'HTML5 - Avanzado', 'Excel-Intermedio'],
    certificaciones: ['Certificación en Desarrollo Web Full Stack', 'Certificación en Diseño de Interfaces de Usuario'],
    experienciaLaboral: 'Desarrollador Web - XYZ Company\nFecha de inicio: Enero 2019 - Presente\nEn mi rol como Desarrollador Web en XYZ Company, he estado involucrado en el desarrollo de múltiples proyectos web y móviles. Trabajo en estrecha colaboración con equipos multidisciplinarios para crear aplicaciones robustas y fáciles de usar. Mis responsabilidades incluyen la implementación de nuevas características, la mejora del rendimiento y la solución de problemas técnicos.'
  };
  res.render('index.ejs', { datos });
});

app.get('/Portafolio/2', (req, res) => {
  const datos = {
    inicio: 'Imax JAH',
    imagenUrlfoto: 'https://tntsports.com.ar/__export/1675017104302/sites/tntsports/img/2023/01/29/cristiano_ronaldo_al_nassr_crop1675016925853.jpg_423682103.jpg',
    sobreMi: 'Soy Imax JAH, un ingeniero de sistemas con experiencia en desarrollo web y móvil. Mi enfoque se centra en diseñar arquitecturas de software robustas y escalables para aplicaciones empresariales y móviles. Actualmente, trabajo como Desarrollador Full Stack en ABC Corporation.',
    email: 'imax@gmail.com',
    telefono: '954785632',
    educacion: 'Ingeniería en Sistemas',
    proyectos: [
        { nombre: 'Sistema de Gestión de Inventarios', descripcion: 'Desarrollé un sistema de gestión de inventarios para una cadena de tiendas. El sistema permite realizar un seguimiento en tiempo real del inventario, las ventas y las tendencias de productos.', imagenUrl: 'https://intl-blog.imgix.net/wp-content/uploads/2019/03/Software-de-gesti%C3%B3n-de-inventarios.png?auto=format%2Cenhance' },
        { nombre: 'Aplicación de Entrega a Domicilio', descripcion: 'Diseñé y desarrollé una aplicación de entrega a domicilio para un servicio de comida rápida. La aplicación permite a los usuarios realizar pedidos, realizar un seguimiento del estado de la entrega y proporciona opciones de pago en línea.', imagenUrl: 'https://i0.wp.com/workflowteam.net/wp-content/uploads/2020/06/APP-DELIVERY4.jpg?w=3840&ssl=1'},
        { nombre: 'Plataforma de Gestión de Proyectos', descripcion: 'Creé una plataforma de gestión de proyectos colaborativa que permite a los equipos organizar tareas, asignar responsabilidades y realizar un seguimiento del progreso del proyecto. La plataforma también incluye herramientas de análisis y generación de informes.', imagenUrl: 'https://blogs.imf-formacion.com/blog/mba/wp-content/uploads/2021/01/Software.png' }
    ],
    habilidadesTecnicas: ['Java – Avanzado', 'React Native – Avanzado', 'Firebase – Intermedio', 'Oracle - Avanzado', 'MySQL - Intermedio', 'CSS3 – Avanzado', 'HTML5 - Avanzado', 'Excel-Intermedio'],
    certificaciones: ['Certificación en Desarrollo de Aplicaciones Móviles', 'Certificación en Gestión de Proyectos de Software'],
    experienciaLaboral: 'Desarrollador Full Stack - ABC Corporation\nFecha de inicio: Marzo 2018 - Presente\nEn mi puesto en ABC Corporation, lidero el desarrollo de aplicaciones empresariales y móviles. Colaboro con equipos multifuncionales para diseñar soluciones tecnológicas eficientes y escalables. Me enfoco en la mejora continua y la adopción de las últimas tecnologías para proporcionar aplicaciones de alta calidad a nuestros clientes.'
  };
  res.render('index.ejs', { datos });
});

app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en http://localhost:3000');
});
