const productosMates = [
  // MATES
  {
    id: 1,
    nombre: "Mate de calabaza forrado en cuero",
    descripcion: "Mate artesanal con virola de alpaca.",
    precio: 5999,
    categoria: "mates",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_i4ACb0sXoOU-3mkBj43ZtEXoPE71sxzDw&s",
    stock: 20
  },
  {
    id: 2,
    nombre: "Mate camionero de acero inoxidable",
    descripcion: "Mate térmico con base antideslizante.",
    precio: 7999,
    categoria: "mates",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsbyDgubsKixK6CNZLnmshx6jZxZsVVXMyQ&s",
    stock: 25
  },
  {
    id: 3,
    nombre: "Mate de cerámica esmaltada",
    descripcion: "Diseño moderno, apto lavavajillas.",
    precio: 4499,
    categoria: "mates",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KQ7-ULuV8mVDnEuTiB5ESzcBXRpELDtOyg&s",
    stock: 30
  },
  {
    id: 4,
    nombre: "Mate imperial artesanal",
    descripcion: "Edición premium con detalles en alpaca.",
    precio: 12499,
    categoria: "mates",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_869444-MLA54286921377_032023-O.webp",
    stock: 10
  },
  {
    id: 5,
    nombre: "Mate plástico con logo",
    descripcion: "Resistente y liviano, ideal para el trabajo.",
    precio: 1999,
    categoria: "mates",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKnEyzCrx5I-exlYWa_RoSv791EUfzkYGnw&s",
    stock: 100
  },

  // BOMBILLAS
  {
    id: 6,
    nombre: "Bombilla recta de acero inoxidable",
    descripcion: "Filtro desmontable, apta lavavajillas.",
    precio: 2499,
    categoria: "bombillas",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_712008-MLA79729202125_102024-O.webp",
    stock: 50
  },
  {
    id: 7,
    nombre: "Bombilla pico de loro niquelada",
    descripcion: "Diseño tradicional argentino.",
    precio: 2299,
    categoria: "bombillas",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdccSoYxPlgVMc9uTP5l7eKSbbbFRtAxwBMA&s",
    stock: 60
  },
  {
    id: 8,
    nombre: "Bombilla de aluminio anodizado",
    descripcion: "Colores metalizados, liviana y durable.",
    precio: 1799,
    categoria: "bombillas",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuia3jTn2Mwmct-oo60Ufa4dofk4SaliV4mw&s",
    stock: 40
  },
  {
    id: 9,
    nombre: "Bombilla de bronce con grabado",
    descripcion: "Estilo vintage, con detalle artesanal.",
    precio: 3499,
    categoria: "bombillas",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDX3ZB5FGg3Qz5PwnHTM6bTqkNbDCZjrMHA&s",
    stock: 20
  },
  {
    id: 10,
    nombre: "Bombilla de acero con pico desmontable",
    descripcion: "Cómoda para limpiar y transportar.",
    precio: 2699,
    categoria: "bombillas",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_913154-MLA80360106571_102024-O.webp",
    stock: 35
  },

  // TERMOS
  {
    id: 11,
    nombre: "Termo Stanley 1L original",
    descripcion: "24hs de temperatura, garantía oficial.",
    precio: 36999,
    categoria: "termos",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RVwBhJ8GB3OKM4dJ9XBvozKpHOdHFOitbQ&s",
    stock: 15
  },
  {
    id: 12,
    nombre: "Termo Lumilagro clásico 1L",
    descripcion: "Pico cebador, resistente a golpes.",
    precio: 10499,
    categoria: "termos",
    imagen: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3602263_f.jpg",
    stock: 20
  },
  {
    id: 13,
    nombre: "Termo con bomba cebadora",
    descripcion: "Ideal para cebar sin inclinar.",
    precio: 12999,
    categoria: "termos",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3IG1Dq_d92DZwOyM6tglo0q-OEXEFpsQ6Q&s",
    stock: 12
  },
  {
    id: 14,
    nombre: "Termo acero inoxidable 500ml",
    descripcion: "Liviano, práctico para llevar.",
    precio: 7499,
    categoria: "termos",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfH1Vd_ikkOy4Q7X_r_kZDojcwJ5ZWNK4pg&s",
    stock: 40
  },
  {
    id: 15,
    nombre: "Termo eléctrico 12V para auto",
    descripcion: "Conector para encendedor, ideal para viajes.",
    precio: 15999,
    categoria: "termos",
    imagen: "https://www.electromisiones.com.ar/37557-large_default/termo_electrico_peabody_pe_etl500n_para_auto_500ml_12v24v_negro.jpg",
    stock: 8
  },

  // ACCESORIOS
  {
    id: 16,
    nombre: "Yerbera y azucarera de lata",
    descripcion: "Con pico vertedor y diseño personalizado.",
    precio: 4999,
    categoria: "accesorios",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_736783-MLA47323772697_092021-O.webp",
    stock: 40
  },
  {
    id: 17,
    nombre: "Bolso matero de eco-cuero",
    descripcion: "Espacio para mate, termo y accesorios.",
    precio: 8499,
    categoria: "accesorios",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_743235-MLA75170580656_032024-O.webp",
    stock: 10
  },
  {
    id: 18,
    nombre: "Porta termo y mate rígido",
    descripcion: "Ideal para el auto o escritorio.",
    precio: 3499,
    categoria: "accesorios",
    imagen: "https://dcdn-us.mitiendanube.com/stores/001/211/567/products/128rojorosabordo-scaled1-3d575189a0471c58d116136812833180-1024-1024.jpg",
    stock: 18
  },
  {
    id: 19,
    nombre: "Cepillo limpia bombillas",
    descripcion: "Accesorio flexible para una limpieza profunda.",
    precio: 999,
    categoria: "accesorios",
    imagen: "https://www.deliargentina.com/image/cache/catalog/product/mates/cepillo-limpia-bombillas-de-mate-argentino/cepillo-limpia-bombillas-de-mate-argentino--1000x1000.jpg.webp",
    stock: 60
  },
  {
    id: 20,
    nombre: "Tapa anti derrame para mate",
    descripcion: "Evita salpicaduras al transportar.",
    precio: 1399,
    categoria: "accesorios",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_930666-MLA53067503094_122022-O.webp",
    stock: 75
  },

  // KITS
  {
    id: 21,
    nombre: "Set matero básico",
    descripcion: "Incluye mate, bombilla y yerbera.",
    precio: 10999,
    categoria: "kits",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOe-WRs2ponrgtRT0KpvWtfPRWDJ_sv40Jfg&s",
    stock: 30
  },
  {
    id: 22,
    nombre: "Set premium de cuero",
    descripcion: "Mate, bombilla, termo y bolso matero de cuero.",
    precio: 32999,
    categoria: "kits",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_633644-MLA45638364876_042021-O.webp",
    stock: 5
  },
  {
    id: 23,
    nombre: "Set infantil de mate",
    descripcion: "Diseñado para niños, incluye mate plástico y bombilla segura.",
    precio: 5999,
    categoria: "kits",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOf4XqR5E7wT5BGFYNBGhXK13MiiPoqa1iw&s",
    stock: 20
  },
  {
    id: 24,
    nombre: "Set matero para oficina",
    descripcion: "Mate de cerámica, bombilla y termo de 500ml.",
    precio: 14999,
    categoria: "kits",
    imagen: "https://http2.mlstatic.com/D_865909-MLA81788647144_012025-O.jpg",
    stock: 12
  },
  // {
  //   id: 25,
  //   nombre: "Set de regalo personalizado",
  //   descripcion: "Mate grabado con nombre, bombilla y caja decorativa.",
  //   precio: 18999,
  //   categoria: "kits",
  //   imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoWNeAHrtO_YzOT6cFJ6rMm4iLRML5i5L6A&s",
  //   stock: 10
  // }
];

export default productosMates; 