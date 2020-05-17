#-- //SPEEDSOFT VA A SER EL GENERADOR DE CODIGO PARA CONFIGURACIONES GENERALES DEL PANEL DE ADMINISTRACION, 
-- //POR LO QUE EL SISTEMA DEBERA SER MODIFICADO DRASTICAMENTE PARA OPCIONES DE PRESENTACION O VIEW PUBLICO..
-- //LAS TABLAS INFORMACION, USUARIO[ADMIN||PARTICIPANTE], VA A SER CARGADA EN LA $_SESSION[]
-- //------------ NOTAS: // -------------
-- //ELIMINAR COMENTARIOS SIN LA NOTACION "--@@@@options:{}" PARA SPEEDSOFT

DROP DATABASE learnidea;        -- //Eliminar para speedsoft
CREATE DATABASE learnidea;
USE learnidea;                  -- //Eliminar para speedsoft





-- //PAGINA - INICIO
CREATE TABLE usuario_tipo (
    usuario_tipo_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_tipo_nombre VARCHAR(50),
    usuario_tipo_super BOOLEAN,
    usuario_tipo_admin BOOLEAN,
    usuario_tipo_coach BOOLEAN,                 -- //Docente
    usuario_tipo_user BOOLEAN,                  -- //Participante
    usuario_tipo_descripcion VARCHAR(100)
) ENGINE INNODB;

INSERT INTO usuario_tipo VALUES (0, 'SUPER ADMINISTRADOR', true, true, true, true, 'ACCESO TOTAL');

CREATE TABLE usuario_tema (
    usuario_tema_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_tema_nombre VARCHAR(50),
    usuario_tema_primary VARCHAR(30),
    usuario_tema_primary_hover VARCHAR(30),
    usuario_tema_secondary VARCHAR(30),
    usuario_tema_secondary_hover VARCHAR(30),
    usuario_tema_tertiary VARCHAR(30),
    usuario_tema_tertiary_hover VARCHAR(30),
    usuario_tema_quaternary VARCHAR(30),
    usuario_tema_quaternary_hover VARCHAR(30),
    usuario_tema_success VARCHAR(30),
    usuario_tema_info VARCHAR(30),
    usuario_tema_warning VARCHAR(30),
    usuario_tema_error VARCHAR(30),
    usuario_tema_dark_primary VARCHAR(30),
    usuario_tema_dark_primary_hover VARCHAR(30),
    usuario_tema_dark_secondary VARCHAR(30),
    usuario_tema_dark_secondary_hover VARCHAR(30),
    usuario_tema_dark_tertiary VARCHAR(30),
    usuario_tema_dark_tertiary_hover VARCHAR(30),
    usuario_tema_dark_quaternary VARCHAR(30),
    usuario_tema_dark_quaternary_hover VARCHAR(30),
    usuario_tema_dark_success VARCHAR(30),
    usuario_tema_dark_info VARCHAR(30),
    usuario_tema_dark_warning VARCHAR(30),
    usuario_tema_dark_error VARCHAR(30)
) ENGINE INNODB;

INSERT INTO usuario_tema VALUES(0, 'Ideasoft', '#29AAE2', '#218ab8', '#222D32', '#1d262a', '#FFFFFF', '#dddddd', '#FFFFFF', '#c2c2c2', '#19A15F', '#427ad5', '#FFCD42', '#DD5145', '#222d32', '#1d262a', '#222d32', '#1d262a', '#ffffff', '#939393', '#222d32', '#1d262a', '#19a15f', '#427ad5', '#ffcd42', '#dd5145');

-- @@@@options:{ "account": {"user":"usuario_email","pass":"usuario_pass"}, "files": [{"type":"png", "name":"usuario_foto"}, {"type":"png", "name":"usuario_firma"}, {"type":"pdf", "name":"usuario_curriculum"}] }
CREATE TABLE usuario (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_nombre VARCHAR(80),
    usuario_cedula VARCHAR(11) UNIQUE KEY,
    usuario_edad INT,
    usuario_indice VARCHAR(50),                 -- //Indice dactilar
    usuario_celular VARCHAR(15),
    usuario_telefono VARCHAR(15),
    usuario_email VARCHAR(50),                  -- //Usuario de acceso
    usuario_pass VARCHAR(50),                   -- //Contrtaseña de acceso
    usuario_foto VARCHAR(10),                   -- //PNG
    usuario_firma VARCHAR(10),                  -- //PNG
    usuario_curriculum VARCHAR(10),             -- //PDF
    usuario_sexo VARCHAR(10),                   -- //Checklist
    usuario_nivel VARCHAR(10),                  -- //Nivel academico
    usuario_calificacion INT,           		-- //En Estrellitas
    usuario_direccion VARCHAR(100),
    usuario_descripcion TEXT,
    usuario_empresa_nombre VARCHAR(80),
    usuario_empresa_actividad VARCHAR(80),
    usuario_empresa_direccion VARCHAR(100),
    usuario_empresa_telefono VARCHAR(15),
    usuario_fecha_conexion VARCHAR(20),
    usuario_tema_mode_dark BOOLEAN,             -- //Tema modo DARK o CLEAR
    usuario_tipo_id INT,
    usuario_tema_id INT,
    FOREIGN KEY (usuario_tipo_id) REFERENCES usuario_tipo (usuario_tipo_id),
    FOREIGN KEY (usuario_tema_id) REFERENCES usuario_tema (usuario_tema_id)
) ENGINE INNODB;

INSERT INTO usuario VALUES(0, 'Super Administrador', '', 0, '', '', '', 'admin', 'admin', null, null, null, '', '', 0, '', '', '', '', '', '', '', 0, 1, 1);

-- @@@@options:{ "files": [{"type":"png", "name":"mensaje_foto"}] }
CREATE TABLE mensaje (
    mensaje_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    mensaje_texto TEXT,
    mensaje_fecha VARCHAR(20),
    mensaje_foto VARCHAR(10),
    mensaje_visto BOOLEAN DEFAULT false,
    mensaje_key TEXT,
    usuario_id1 INT,
    usuario_id2 INT,
    FOREIGN KEY (usuario_id1) REFERENCES usuario (usuario_id),
    FOREIGN KEY (usuario_id2) REFERENCES usuario (usuario_id)
) ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"informacion_empresa_logo"}, {"type":"png", "name":"informacion_pagina_logo"}] }
CREATE TABLE informacion (
    informacion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    informacion_empresa_nombre VARCHAR(30),
    informacion_empresa_siglas VARCHAR(10),
    informacion_empresa_ciudad VARCHAR(30),
    informacion_empresa_mision VARCHAR(30),
    informacion_empresa_vision VARCHAR(30),
    informacion_empresa_logo VARCHAR(10),
    informacion_gerente_nombre VARCHAR(80),
    informacion_gerente_celular VARCHAR(10),
    informacion_gerente_nivel_nombre VARCHAR(80),
    informacion_gerente_nivel_siglas VARCHAR(10),
    informacion_pagina_nombre VARCHAR(30),
    informacion_pagina_mision VARCHAR(30),
    informacion_pagina_vision VARCHAR(30),
    informacion_pagina_logo VARCHAR(30),
    informacion_pagina_copyright LONGTEXT,
    informacion_ubicacion TEXT,
    informacion_api_key TEXT
) ENGINE INNODB;

INSERT INTO informacion VALUES(0, 'Ideasoft', 'I. S.', 'Macas', 'S/N', 'S/N', '', 'Ideasoft', '', '', '', '', 'Learnidea', '', '', '', '', '#tXCGuR8.UEy""p');

-- @@@@options:{ "files": [{"type":"png", "name":"contacto_icon"}] }
CREATE TABLE contacto (
    contacto_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contacto_nombre VARCHAR(80),
    contacto_url VARCHAR(100),
    contacto_icon VARCHAR(10)
) ENGINE INNODB;

-- //Empresas que nos respaldan
-- @@@@options:{ "files": [{"type":"png", "name":"institucion_logo"}] }
CREATE TABLE institucion (
    institucion_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    institucion_nombre VARCHAR(150),
    institucion_siglas VARCHAR(50),
    institucion_logo VARCHAR(10)
) ENGINE INNODB;
-- //PAGINA - FIN





-- //CURSO_MODELO - INICIO
-- //INDEPENDIENTES - INICIO
CREATE TABLE area (
    area_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    area_codigo VARCHAR(5),
    area_descripcion TEXT
) ENGINE INNODB;

CREATE TABLE especificacion (
    especificacion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    especificacion_codigo VARCHAR(5),
    especificacion_descripcion TEXT
) ENGINE INNODB;

CREATE TABLE alineacion (
    alineacion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    alineacion_descripcion TEXT
) ENGINE INNODB;

CREATE TABLE participante_tipo (
    participante_tipo_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    participante_tipo_descripcion TEXT
) ENGINE INNODB;

CREATE TABLE modalidad (
    modalidad_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    modalidad_descripcion TEXT
) ENGINE INNODB;

CREATE TABLE duracion (
    duracion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    duracion_descripcion TEXT
) ENGINE INNODB;
-- //INDEPENDIENTES - FIN

-- //CENTRAL - INICIO
CREATE TABLE curso_modelo (
    curso_modelo_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    curso_modelo_nombre VARCHAR(50),
    curso_modelo_hora_teorica INT,
    curso_modelo_hora_practica INT,
    area_id INT,
    especificacion_id INT,
    alineacion_id INT,
    participante_tipo_id INT,
    modalidad_id INT,
    duracion_id INT,
    usuario_id INT,
    UNIQUE(curso_modelo_nombre),
    FOREIGN KEY (area_id) REFERENCES area (area_id),
    FOREIGN KEY (especificacion_id) REFERENCES especificacion (especificacion_id),
    FOREIGN KEY (alineacion_id) REFERENCES alineacion (alineacion_id),
    FOREIGN KEY (participante_tipo_id) REFERENCES participante_tipo (participante_tipo_id),
    FOREIGN KEY (modalidad_id) REFERENCES modalidad (modalidad_id),
    FOREIGN KEY (duracion_id) REFERENCES duracion (duracion_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id)
) ENGINE INNODB;
-- //CENTRAL - FIN

-- //DEPENDIENTES - INICIO
CREATE TABLE requisito (
    requisito_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    requisito_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE objetivo (
    objetivo_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    objetivo_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE contenido_primario (
    contenido_primario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contenido_primario_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE contenido_secundario (
    contenido_secundario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contenido_secundario_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE contenido_transversal (
    contenido_transversal_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    contenido_transversal_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE estrategia (
    estrategia_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    estrategia_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE evaluacion_diagnostica (
    evaluacion_diagnostica_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    evaluacion_diagnostica_tecnica VARCHAR(100),
    evaluacion_diagnostica_instrumento VARCHAR(100),
    evaluacion_diagnostica_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE evaluacion_formativa (
    evaluacion_formativa_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    evaluacion_formativa_tecnica VARCHAR(100),
    evaluacion_formativa_instrumento VARCHAR(100),
    evaluacion_formativa_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE evaluacion_final (
    evaluacion_final_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    evaluacion_final_tecnica VARCHAR(100),
    evaluacion_final_instrumento VARCHAR(100),
    evaluacion_final_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
)  ENGINE INNODB;

CREATE TABLE entorno_aprendizaje (
    entorno_aprendizaje_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    entorno_aprendizaje_instalaciones VARCHAR(100),
    entorno_aprendizaje_teorica VARCHAR(100),
    entorno_aprendizaje_practica VARCHAR(100),
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;

CREATE TABLE bibliografia (
    bibliografia_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    bibliografia_descripcion TEXT,
    curso_modelo_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id) ON DELETE CASCADE
) ENGINE INNODB;
-- //DEPENDIENTES - FIN
-- //CURSO_MODELO - FIN




-- //CURSO - INICIO
-- @@@@options:{ "files": [{"type":"png", "name":"curso_foto"}] }
CREATE TABLE curso (
    curso_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    curso_nombre VARCHAR(50),
    curso_fecha_inicio VARCHAR(50),
    curso_fecha_fin VARCHAR(50),
    curso_cupos INT,
    curso_whatsapp TEXT,
    curso_foto VARCHAR(10),
    curso_calificacion DOUBLE,          -- //Concluido cada curso se actualizará respecto a la calificacion de cada inscripción
    curso_proximo BOOLEAN,
    curso_visible BOOLEAN,
    curso_precio_live DOUBLE,
    curso_precio_record DOUBLE,
    curso_certificado_live BOOLEAN,     -- //Certificado validado por la setec
    curso_certificado_record BOOLEAN,   -- //Certificado validado por la setec
    curso_certificacion_live BOOLEAN,   -- //Certificacion de parte de un instituto
    curso_modelo_id INT,
    usuario_id INT,
    FOREIGN KEY (curso_modelo_id) REFERENCES curso_modelo (curso_modelo_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id)
) ENGINE INNODB;

CREATE TABLE curso_evento (
    curso_evento_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    curso_evento_nombre VARCHAR(50),
    curso_evento_fecha VARCHAR(50),
    curso_evento_descripcion TEXT,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES curso (curso_id)
) ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"curso_deber_foto"}] }
CREATE TABLE curso_deber (
    curso_deber_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    curso_deber_descripcion TEXT,
    curso_deber_link TEXT,
    curso_deber_foto VARCHAR(50),
    curso_deber_fecha_inicio VARCHAR(20),                   -- //Formato 0000/00/00 00:00
    curso_deber_fecha_fin VARCHAR(20),                      -- //Formato 0000/00/00 00:00
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES curso (curso_id)
) ENGINE INNODB;

CREATE TABLE curso_seccion (
    curso_seccion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    curso_seccion_nombre VARCHAR(50),
    curso_seccion_descripcion TEXT,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES curso (curso_id)
) ENGINE INNODB;

CREATE TABLE seccion_video (
    seccion_video_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    seccion_video_nombre VARCHAR(50),
    seccion_video_material VARCHAR(50),
    seccion_video_iframe TEXT,
    seccion_video_descripcion TEXT,
    curso_seccion_id INT,
    FOREIGN KEY (curso_seccion_id) REFERENCES curso_seccion (curso_seccion_id)
) ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"video_comentario_foto"}] }
CREATE TABLE video_comentario (
    video_comentario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    video_comentario_descripcion TEXT,
    video_comentario_foto VARCHAR(10),
    video_comentario_fecha VARCHAR(20),                     -- //Formato 0000/00/00 00:00
    seccion_video_id INT,
    FOREIGN KEY (seccion_video_id) REFERENCES seccion_video (seccion_video_id)
)  ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"video_respuesta_foto"}] }
CREATE TABLE video_respuesta (
    video_respuesta_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    video_respuesta_descripcion TEXT,
    video_respuesta_foto VARCHAR(10),
    video_respuesta_fecha VARCHAR(20),                      -- //Formato 0000/00/00 00:00
    video_comentario_id INT,
    FOREIGN KEY (video_comentario_id) REFERENCES video_comentario (video_comentario_id)
)  ENGINE INNODB;

CREATE TABLE seccion_leccion (
    seccion_leccion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    seccion_leccion_descripcion TEXT,
    seccion_leccion_puntaje DOUBLE,
    seccion_leccion_intentos INT,
    curso_seccion_id INT,
    FOREIGN KEY (curso_seccion_id) REFERENCES curso_seccion (curso_seccion_id)
) ENGINE INNODB;

CREATE TABLE seccion_pregunta (
    seccion_pregunta_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    seccion_pregunta_descripcion TEXT,
    seccion_pregunta_tiempo VARCHAR(10),
    seccion_pregunta_porcentaje VARCHAR(10),
    seccion_leccion_id INT,
    FOREIGN KEY (seccion_leccion_id) REFERENCES seccion_leccion (seccion_leccion_id)
) ENGINE INNODB;

CREATE TABLE seccion_alternativa (
    seccion_alternativa_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    seccion_alternativa_descripcion TEXT,
    seccion_alternativa_correta BOOLEAN,
    seccion_pregunta_id INT,
    FOREIGN KEY (seccion_pregunta_id) REFERENCES seccion_pregunta (seccion_pregunta_id)
) ENGINE INNODB;
-- //CURSO - FIN





-- //PARTICIPANTE - INICIO
CREATE TABLE inscripcion (
    inscripcion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    inscripcion_estado VARCHAR(15),
    inscripcion_certificado_participante_nombre VARCHAR(100),
    inscripcion_certificado_participante_cedula VARCHAR(10),
    inscripcion_certificado_empresa_nombre VARCHAR(50),
    inscripcion_certificado_empresa_ciudad VARCHAR(50),
    inscripcion_certificado_empresa_gerente VARCHAR(80),
    inscripcion_certificado_empresa_docente VARCHAR(100),
    inscripcion_certificado_curso_nombre VARCHAR(80),
    inscripcion_certificado_curso_fecha_inicio VARCHAR(50),
    inscripcion_certificado_curso_fecha_fin VARCHAR(50),
    inscripcion_certificado_curso_horas INT,
    inscripcion_certificado_emision VARCHAR(100),
    inscripcion_certificado_codigo VARCHAR(100),
    inscripcion_curso_calificacion INT,                             -- //Calificacion en Estrellitas del 1 al 5
    inscripcion_curso_opinion VARCHAR(100),                         -- //Valoracion del curso
    inscripcion_pago_live BOOLEAN,
    inscripcion_pago_record BOOLEAN,
    usuario_id INT,
    curso_id INT,
    UNIQUE(usuario_id, curso_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id),
    FOREIGN KEY (curso_id) REFERENCES curso (curso_id)
)  ENGINE INNODB;

CREATE TABLE inscripcion_leccion (
    inscripcion_leccion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    inscripcion_leccion_nota DOUBLE,
    inscripcion_id INT,
    seccion_leccion_id INT,
    FOREIGN KEY (inscripcion_id) REFERENCES inscripcion (inscripcion_id),
    FOREIGN KEY (seccion_leccion_id) REFERENCES seccion_leccion (seccion_leccion_id)
)  ENGINE INNODB;

CREATE TABLE inscripcion_pregunta (
    inscripcion_pregunta_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    inscripcion_leccion_id INT,
    seccion_pregunta_id INT,
    FOREIGN KEY (inscripcion_leccion_id) REFERENCES inscripcion_leccion (inscripcion_leccion_id),
    FOREIGN KEY (seccion_pregunta_id) REFERENCES seccion_pregunta (seccion_pregunta_id)
)  ENGINE INNODB;

CREATE TABLE inscripcion_alternativa (
    inscripcion_alternativa_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    inscripcion_pregunta_id INT,
    seccion_alternativa_id INT,
    FOREIGN KEY (inscripcion_pregunta_id) REFERENCES inscripcion_pregunta (inscripcion_pregunta_id),
    FOREIGN KEY (seccion_alternativa_id) REFERENCES seccion_alternativa (seccion_alternativa_id)
)  ENGINE INNODB;

-- CERTIFICADOS
CREATE TABLE certificado_tipo (
    certificado_tipo_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    certificado_tipo_nombre VARCHAR(80)
)  ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"pdf", "name":"certificado_pdf"}] }
CREATE TABLE certificado (
    certificado_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    certificado_codigo VARCHAR(50),
    certificado_pdf VARCHAR(10),
    certificado_tipo_id INT,
    usuario_id INT,
    FOREIGN KEY (certificado_tipo_id) REFERENCES certificado_tipo (certificado_tipo_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id)
)  ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"deber_entrega_foto"}, {"type":"pdf", "name":"deber_entrega_pdf"}] }
CREATE TABLE deber_entrega (
    deber_entrega_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    deber_entrega_descripcion TEXT,
    deber_entrega_link TEXT,
    deber_entrega_foto VARCHAR(50),
    deber_entrega_pdf VARCHAR(50),
    deber_entrega_fecha_inicio VARCHAR(20),                   -- //Formato 0000/00/00 00:00
    deber_entrega_fecha_fin VARCHAR(20),                      -- //Formato 0000/00/00 00:00
    curso_deber_id INT,
    inscripcion_id INT,
    FOREIGN KEY (curso_deber_id) REFERENCES curso_deber (curso_deber_id),
    FOREIGN KEY (inscripcion_id) REFERENCES inscripcion (inscripcion_id)
) ENGINE INNODB;
-- //PARTICIPANTE - FIN





-- //FORO - INICIO
-- @@@@options:{ "files": [{"type":"png", "name":"publicacion_foto"}] }
CREATE TABLE publicacion (
    publicacion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    publicacion_descripcion TEXT,
    publicacion_foto VARCHAR(10),
    publicacion_fecha VARCHAR(20),                              -- //Formato 0000/00/00 00:00
    usuario_id INT,
    inscripcion_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id),
    FOREIGN KEY (inscripcion_id) REFERENCES inscripcion (inscripcion_id)
)  ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"publicacion_comentario_foto"}] }
CREATE TABLE publicacion_comentario (
    publicacion_comentario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    publicacion_comentario_descripcion TEXT,
    publicacion_comentario_foto VARCHAR(10),
    publicacion_comentario_fecha VARCHAR(20),                   -- //Formato 0000/00/00 00:00
    publicacion_id INT,
    FOREIGN KEY (publicacion_id) REFERENCES publicacion (publicacion_id)
)  ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"publicacion_respuesta_foto"}] }
CREATE TABLE publicacion_respuesta (
    publicacion_respuesta_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    publicacion_respuesta_descripcion TEXT,
    publicacion_respuesta_foto VARCHAR(10),
    publicacion_respuesta_fecha VARCHAR(20),                    -- //Formato 0000/00/00 00:00
    publicacion_comentario_id INT,
    FOREIGN KEY (publicacion_comentario_id) REFERENCES publicacion_comentario (publicacion_comentario_id)
)  ENGINE INNODB;
-- //FORO - FIN





-- //BUZON DE ERRORES - INICIO
-- @@@@options:{ "files": [{"type":"png", "name":"buzon_foto"}] }
CREATE TABLE buzon (
    buzon_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    buzon_email VARCHAR(50),            -- //Identificaremos a la persona si se encuentra en usuarios, else pondremos anonimo
    buzon_descripcion TEXT,
    buzon_foto VARCHAR(10)
)  ENGINE INNODB;
-- //BUZON DE ERRORES - FIN

-- //TRANSACCION - INICIO
-- @@@@options:{ "files": [{"type":"png", "name":"transaccion_tipo_logo"}] }
CREATE TABLE transaccion_tipo (
    transaccion_tipo_id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    transaccion_tipo_nombre VARCHAR(50),
    transaccion_tipo_descripcion TEXT,
    transaccion_tipo_logo VARCHAR(10),
    transaccion_tipo_credido BOOLEAN,       -- //Solo una opcion a la vez
    transaccion_tipo_pago BOOLEAN,          -- //Solo una opcion a la vez
    transaccion_tipo_entrada BOOLEAN        -- //Solo una opcion a la vez
) ENGINE INNODB;

-- @@@@options:{ "files": [{"type":"png", "name":"transaccion_foto"}] }
CREATE TABLE transaccion (
    transaccion_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    transaccion_descripcion TEXT,
    transaccion_valor DOUBLE,
    transaccion_foto VARCHAR(10),
    transaccion_fecha VARCHAR(20),
    transaccion_tipo_id INT,
    FOREIGN KEY (transaccion_tipo_id) REFERENCES transaccion_tipo (transaccion_tipo_id)
)  ENGINE INNODB;
-- //TRANSACCION - FIN