<template>
    <div class="bg-light" style="border-bottom: solid #dc3545 5px">
        <div class="container py-0">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <router-link class="navbar-brand" to="/"><img src="../public/assets/img/gamego-store.png" height="100" width="100"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link btn btn-danger text-white ml-2 mt-1" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link btn btn-danger text-white ml-2 mt-1" to="/videogames">VideoGames</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link btn btn-danger text-white ml-2 mt-1" to="/sucursals">Sucursals</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link btn btn-danger text-white ml-2 mt-1" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
