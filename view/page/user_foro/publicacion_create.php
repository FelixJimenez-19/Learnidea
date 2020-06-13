<?php
if (isset($viewPage)) {
?>
    <div class="container__publicacion">
        <span class="tittle">CREAR PUBLICACION</span>
        <form method="POST" class="form" id="col2-publicacion_form">
            <input type="hidden" name="usuario_id" value="<?= $_SESSION['usuario_id'] ?>">
            <div class="textarea__container">
                <div class="img" style="background-image: url(view/src/files/usuario_foto/<?= $_SESSION['usuario_foto'] ?>)"></div>
                <textarea name="publicacion_descripcion" placeholder="¿Cuál es tu problema, <?= $_SESSION['usuario_nombre'] ?>?"></textarea>
                <input name="publicacion_foto" type="file" accept="image/png">
            </div>
            <input name="btn_submit" type="submit" value="PUBLICAR">
        </form>
    </div>
<?php
} else {
    header("location: ../../../panel?page=user_foro");
}
?>