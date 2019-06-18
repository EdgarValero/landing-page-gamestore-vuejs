<template>
	<div>
		<div class="row">
			<transition name="fade">
				<div v-if="message === true" class="col-12">
	                <div class="alert alert-success alert-dismissible fade show text-center m-4" role="alert">
	                  <strong>El formulario fue enviado, espera nuestro contacto!!!</strong>
	                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	                    <span aria-hidden="true">&times;</span>
	                  </button>
	                </div>
	            </div>
			</transition>
			<div class="col-12 col-sm-8 col-md-6 col-xl-4 mx-auto mt-4">
				<div class="card mx-2">
					<div class="card-header bg-danger text-white text-center">
						<h2>Contacto</h2>
					</div>
					<div class="card-body">
						<form @submit.prevent="sentContact">
							<div class="form-group">
								<input type="text" class="form-control" v-model="contact.fullname" placeholder="Nombre Completo" required>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" v-model="contact.email" placeholder="Email" required>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" v-model="contact.affair" placeholder="Asunto" required>
							</div>
							<div class="form-group">
								<textarea class="form-control" v-model="contact.message" placeholder="Mensaje" required></textarea>
							</div>
							<button type="submit" class="btn btn-danger btn-block">Enviar</button>
						</form>
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
            contact: {
            	fullname: "",
            	email: "",
            	affair: "",
            	message: ""
            },
            message: false
        }
    },
    methods: {
        sentContact: function() {
            const res = this.axios.post("http://localhost:3000/contact/add-contact",{
                fullname: this.contact.fullname,
                email: this.contact.email,
                affair: this.contact.affair,
                message: this.contact.message
            });
            this.contact.fullname = "";
            this.contact.email = "";
            this.contact.affair = "";
            this.contact.message = "";
            this.message = !this.message;
        }
    }
	}
</script>