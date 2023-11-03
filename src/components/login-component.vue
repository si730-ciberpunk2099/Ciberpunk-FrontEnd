<template>
    <div class="contenedor-main">
        <background-animated-component class="background"></background-animated-component>
        <img src="@/assets/Tittle.png" alt="No carga el titulo" className="title-png">
        <div class="login-container">
            <div class="login-box p-fluid">
                <h2>Inicie sesion en Ciberpunk</h2>
                <div class="p-field">
                    <label for="username">Usuario</label>
                    <input type="text" id="username" v-model="username" />
                </div>
                <div class="p-field">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" v-model="password" />
                </div>
                <button class="p-button p-button-primary" @click="login">Iniciar sesión</button>
                <a href="#" class="forgot-password-link" @click="forgotPassword">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    </div>
</template>

<script>
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
export default {
    name: "login-component",
    components:{
        backgroundAnimatedComponent,
    },
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            console.log("Iniciando sesión...");
        },
        forgotPassword() {
            console.log("¿Olvidaste tu contraseña?");
        }
    }
};
</script>

<style scoped>
.login-container {
    background-color: rgba(205, 240, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    color: white;
    line-height: 2.5;
}

.login-box {
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
