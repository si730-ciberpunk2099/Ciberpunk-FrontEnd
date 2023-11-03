<template>
    <div class="contenedor-main">
            <background-animated-component class="background"></background-animated-component>
            <img src="@/assets/Tittle.png" alt="No carga el titulo" className="title-png">
        <div class="register-container">
            <div class="register-box p-fluid">
                <h2>Nuevo Registro</h2>
                <div class="p-field">
                    <label for="newUsername">Nuevo Usuario</label>
                    <input type="text" id="newUsername" v-model="newUsername" />
                </div>
                <div class="p-field">
                    <label for="newPassword">Nueva Contraseña</label>
                    <input type="password" id="newPassword" v-model="newPassword" />
                </div>
                <button class="p-button p-button-primary" @click="register">Registrarse</button>
                <a href="#" class="forgot-password-link" @click="forgotPassword">¿Ya tienes una cuenta?</a>
            </div>
        </div>
    </div>
</template>

<script>
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";

export default {
    name: "register-component",
    components: {backgroundAnimatedComponent},
    data() {
        return {
            newUsername: "",
            newPassword: ""
        };
    },
    methods: {
        register() {
            console.log("Registrando...");
        },
        forgotPassword() {
            console.log("¿Olvidaste tu contraseña?");
        }
    }
};
</script>

<style scoped>
.register-container {
    background-color: rgba(205, 240, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    color: white;
    line-height: 2.5;
}

.register-box {
    width: 300px;
    text-align: center;
}

.forgot-password-link {
    display: block;
    margin-top: 10px;
    text-decoration: none;
}
.contenedor-main{
    display: flex;
    position: absolute;
    overflow: auto;

    flex-direction: column;

    align-items: center;
    justify-content: center;
    align-content: center;
    align-self: center;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.title-png {
    position: fixed;
    top: 10px;
    left: 20px;
    width: 300px;
    height: auto;
}
.background{
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>
