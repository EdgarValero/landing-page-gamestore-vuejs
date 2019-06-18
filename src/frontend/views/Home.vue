<template>
    <div>
        <div class="row main m-0">
            <transition name="fade">
                <div v-if="message === true" class="col-12">
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                      <strong>Gracias por subscribirte a nuestra Tienda GameStore!!!</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                </div>
            </transition>
            <div class="col-12 col-sm-6">
                <img src="../public/assets/img/right-laptop.png" class="img-fluid">
            </div>
            <div class="col-12 col-sm-6 text-center">
                <p class="text-center lead">Suscribete para obtener mas informacion sobre nuevos videojuegos, promociones, descuentos, sorteos y más. Tambien siguenos en nuestras redes sociales.</p>
                <form @submit.prevent="sentSubscription">
                    <input class="form-control my-4 text-center" type="email" v-model="email"
                        placeholder="Escribe tu email" autocomplete="off" required>
                    <button type="submit" class="btn btn-primary btn-outline">
                        SUBSCRIBETE
                    </button>
                </form>
                <ul class="list-unstyled list-inline mt-4">
                    <li class="list-inline-item">
                        <a href="https://www.facebook.com">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="social-icon"/>
                        </a>
                        <a href="https://www.instagram.com">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="social-icon"/>
                        </a>
                        <a href="https://www.twitter.com">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="social-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container mt-4 mb-4">
            <h2 class="h1 d-flex justify-content-center mb-1 text-center">Video Juegos Destacados</h2>
            <div class="row mt-4 m-0">
                <div class="col-12 col-sm-6 col-md-4 mt-2">
                    <div class="card">
                        <div class="card-header bg-danger text-white text-center">
                            <h3>Fortnite Battle Royal</h3>
                        </div>
                        <img src="../public/assets/img/fortnite.jpg" class="img-fluid" style="height: 300px;">
                        <div class="card-body">
                            <p>Battle Royale es un videojuego gratuito perteneciente al género de Battle Royale desarrollado y publicado por Epic Games. Fue lanzado en la consola Nintendo Switch el 12 de junio de 2018.​ Es un spin-off de Fortnite: Salvar el Mundo, un cooperativo juego de supervivencia con elementos de construcción.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mt-2">
                    <div class="card">
                        <div class="card-header bg-danger text-white text-center">
                            <h3>Apex Legens</h3>
                        </div>
                        <img src="../public/assets/img/apex.jpg" class="img-fluid" style="height: 300px;">
                        <div class="card-body">
                            <p>Apex Legends es un videojuego gratuito perteneciente al género Battle Royale desarrollado por Respawn Entertainment y publicado por Electronic Arts. Fue lanzado para Microsoft Windows, PlayStation 4 y Xbox One el 4 de febrero de 2019.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mt-2">
                    <div class="card">
                        <div class="card-header bg-danger text-white text-center">
                            <h3>Grand Theft Auto 5</h3>
                        </div>
                        <img src="../public/assets/img/gta5.jpg" class="img-fluid" style="height: 300px;">
                        <div class="card-body">
                            <p>Grand Theft Auto V (abreviado como GTA V o GTA5) es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mt-2">
                    <div class="card">
                        <div class="card-header bg-danger text-white text-center">
                            <h3>Metro Exodus</h3>
                        </div>
                        <img src="../public/assets/img/metro.jpg" class="img-fluid" style="height: 300px;">
                        <div class="card-body">
                            <p>Metro Exodus es un videojuego de acción en primera persona desarrollado por 4A Games y distribuido por Deep Silver. Es el tercer título de la serie de videojuegos Metro, basado en las novelas de Dmitry Glukhovsky, y la secuela de Metro: Last Light. El videojuego fue presentado en el E3 2017 y se lanzó el 15 de febrero 2019, en las plataformas PlayStation 4, Xbox One y Microsoft Windows.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mt-2">
                    <div class="card">
                        <div class="card-header bg-danger text-white text-center">
                            <h3>CoD Black Ops 4</h3>
                        </div>
                        <img src="../public/assets/img/cod4.jpg" class="img-fluid" style="height: 300px;">
                        <div class="card-body">
                            <p>Call of Duty: Black Ops 4, es un videojuego de acción y disparos en primera persona, desarrollado por Treyarch y distribuido por Activision, para las plataformas PlayStation 4, Xbox One y Microsoft Windows. El videojuego, que es el décimo quinto título de la franquicia Call of Duty, fue anunciado oficialmente el 8 de marzo de 2018, a través de un breve tráiler. Su fecha de lanzamiento mundial fue el 12 de octubre de 2018.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mt-2">
                    <div class="card">
                        <div class="card-header bg-danger text-white text-center">
                            <h3>Battlefield 5</h3>
                        </div>
                        <img src="../public/assets/img/battlefield5.jpg" class="img-fluid" style="height: 300px;">
                        <div class="card-body">
                            <p>Battlefield V es un videojuego de disparos y acción bélica en primera persona1​ desarrollado por DICE y distribuido por Electronic Arts. El videojuego fue lanzado el 20 de noviembre de 2018 en las plataformas PlayStation 4, Xbox One y Microsoft Windows.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            message: false
        }
    },
    methods: {
        sentSubscription: function() {
            const res = this.axios.post("http://localhost:3000/subscription/add-subscription",{
                email: this.email
            });
            this.email = "";
            this.message = !this.message;
        }
    }
}
</script>
