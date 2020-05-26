<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../function/validation.php';
$_mysql = new Mysql();


$color_primary = "#29AAE2";
$color_primary_hover = "#218ab8";
$color_secondary = "#222D32";
$color_secondary_hover = "#1d262a";
$color_tertiary = "#FFFFFF";
$color_tertiary_hover = "#6d6d6d";
$color_quaternary = "#FFF";
$color_quaternary_hover = "#c2c2c2";
$color_success = "#19A15F";
$color_info = "#427ad5";
$color_warning = "#FFCD42";
$color_error = "#DD5145";


if (
    isset($_POST['usuario_email']) and
    isset($_POST['informacion_pagina_nombre']) and
    isset($_POST['informacion_pagina_logo']) and
    isset($_POST['usuario_email_code']) and
    isset($_POST['tittle']) and
    isset($_POST['mensaje']) and
    isset($_POST['key'])
) {
    if (validation($_POST['key'])) {
        $root_page = $_mysql->root_page;
        $usuario_email = $_POST['usuario_email'];
        $informacion_pagina_nombre = $_POST['informacion_pagina_nombre'];
        $informacion_pagina_logo = $_POST['informacion_pagina_logo'];
        $usuario_email_code = $_POST['usuario_email_code'];
        $tittle = $_POST['tittle'];
        $mensaje = $_POST['mensaje'];
        $tittle = $informacion_pagina_nombre . ' - ' . $tittle;
        $mensaje = '
            <html>

            <head>
                <title>' . $tittle . '</title>
                </head>
                
                <body>
                
                <table style="
                    width: 100%; 
                    max-width: 300px; 
                    background: ' . $color_quaternary . '; 
                    color: ' . $color_primary . '; 
                    text-align: center; 
                    padding: 5px 10px; 
                    border-radius: 5px;
                    border: solid 1px ' . $color_primary . ';
                    box-shadow: 0 2px 6px 0 rgba(0, 0, 0.3);
                ">
                <tr>
                    <td colspan="2">
                    <span style="
                        font-size: 1.2em;
                        font-weight: bold;
                    ">' . $tittle . '</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                    <img 
                        style="
                            width: 100px; 
                            height: 100px;" 
                        src="' . $root_page . '/view/src/files/informacion_pagina_logo/' . $informacion_pagina_logo . '" 
                    />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                    <p style="
                        font-size: 1.1em;
                        font-weight: normal; 
                        text-align: justify;
                        color: ' . $color_tertiary_hover . '
                    ">
                        ' . $mensaje . '
                    </p>
                    </td>
                </tr>
                <tr>
                    <td style="
                        width: 50%;
                    ">
                    <span style="
                        font-size: 1.1em;
                        font-weight: bold;
                    ">SU CODIGO ES:</span>
                    </td>
                    <td style="
                        width: 50%;
                    ">
                    <span style="
                        font-size: 1.2em;
                    ">' . $usuario_email_code . '</span>
                    </td>
                </tr>
                </table>

            </body>

            </html>
        ';
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        mail($usuario_email, $tittle, $mensaje, $headers);
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
