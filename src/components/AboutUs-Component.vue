<script setup>
import { ref } from 'vue';

const isFieldsetCollapsed = ref(true);
</script>

<template>
    <div class="Contenedor-1">
        <background-animated-component></background-animated-component>
        <navbar></navbar>

        <div class="Contenedor-2">
            <Card class="Titulo">
                <template #title>
                    <h1 class="sub-titulo">Bienvenido! </h1>
                </template>
            </Card>
            <Card class="texto-main">
                <template #title> Bienvenido! </template>
                <template #content>
                    <p>
                        Bienvenido a nuestro rincón en línea. Somos un apasionado equipo de jóvenes entusiastas que comparte una visión: hacer que el mundo de la PC gaming, el diseño y el trabajo profesional sea accesible para todos, sin importar su nivel de experiencia. Nuestra historia comenzó cuando identificamos un problema común entre aquellos que deseaban adentrarse en estos emocionantes mundos, pero se encontraban con la barrera del desconocimiento técnico.
                        Fue entonces cuando decidimos unir fuerzas y crear esta página web con un propósito claro: brindar apoyo y recursos a quienes desean construir su propia PC, independientemente de si son principiantes o ya tienen experiencia en el campo. Creemos que todos merecen la oportunidad de explorar y aprovechar al máximo las posibilidades que ofrecen las PC para gaming, el diseño o el trabajo profesional.
                        Nuestra misión es proporcionarte las herramientas necesarias para comprender mejor el proceso de ensamblaje de una PC, ofreciéndote una experiencia de simulación que te permita aprender y practicar antes de aventurarte en la construcción real. Además, encontrarás una amplia gama de recursos útiles, consejos y guías que te ayudarán a tomar decisiones informadas y a sacar el máximo provecho de tu equipo.
                        Nos enorgullece ser tu compañero de confianza en esta emocionante travesía. Estamos aquí para responder tus preguntas, despejar tus dudas y ser tu fuente confiable de información en el mundo de las PCs. ¡Gracias por unirte a nosotros en esta aventura!
                    </p>
                </template>
            </Card>

            <div class="cards">
                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Soy un estudiante universitario enfocado en el desarrollo de programación, con experiencia en Python, C++,
                        SQL, C#, MATLAB y programación orientada a objetos. También tengo habilidades avanzadas en Excel y un
                        nivel intermedio de inglés. Mi objetivo es crecer en el campo de la inteligencia artificial y el aprendizaje
                        automático, alcanzando mis metas y encontrando satisfacción en mi carrera profesional.
                    </p>
                    <img src="@/assets/Fotos/Edery.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Soy un estudiante universitario enfocado en el desarrollo de programación, con experiencia en Python, C++,
                        SQL, C#, MATLAB y programación orientada a objetos. También tengo habilidades avanzadas en Excel y un
                        nivel intermedio de inglés. Mi objetivo es crecer en el campo de la inteligencia artificial y el aprendizaje
                        automático, alcanzando mis metas y encontrando satisfacción en mi carrera profesional.
                    </p>
                    <img src="@/assets/Fotos/Frabrizio.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Soy un estudiante universitario enfocado en el desarrollo de programación, con experiencia en Python, C++,
                        SQL, C#, MATLAB y programación orientada a objetos. También tengo habilidades avanzadas en Excel y un
                        nivel intermedio de inglés. Mi objetivo es crecer en el campo de la inteligencia artificial y el aprendizaje
                        automático, alcanzando mis metas y encontrando satisfacción en mi carrera profesional.
                    </p>
                    <img src="@/assets/Fotos/Gianfranco.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Soy un estudiante universitario enfocado en el desarrollo de programación, con experiencia en Python, C++,
                        SQL, C#, MATLAB y programación orientada a objetos. También tengo habilidades avanzadas en Excel y un
                        nivel intermedio de inglés. Mi objetivo es crecer en el campo de la inteligencia artificial y el aprendizaje
                        automático, alcanzando mis metas y encontrando satisfacción en mi carrera profesional.
                    </p>
                    <img src="@/assets/Fotos/Mariano.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

                <Fieldset :toggleable="true" :collapsed="isFieldsetCollapsed" class = "card">
                    <template #legend>
                        <div class="flex align-items-center text-primary">
                            <span class="pi pi-user mr-2"></span>
                            <span class="font-bold text-lg"> Edery Renzo Abanto Vicente</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Soy un estudiante universitario enfocado en el desarrollo de programación, con experiencia en Python, C++,
                        SQL, C#, MATLAB y programación orientada a objetos. También tengo habilidades avanzadas en Excel y un
                        nivel intermedio de inglés. Mi objetivo es crecer en el campo de la inteligencia artificial y el aprendizaje
                        automático, alcanzando mis metas y encontrando satisfacción en mi carrera profesional.
                    </p>
                    <img src="@/assets/Fotos/Rodrigo.png" alt="Foto de Edery" className="Foto">
                </Fieldset>

            </div>
        </div>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
import Navbar from "@/components/Navbar-component.vue";
export default {
    components: {
        Navbar,
        backgroundAnimatedComponent,
        Card,
    }
}
</script>

<style scoped>
.Titulo{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    margin-top: 400px;
    margin-bottom: 20px;
    font-size: 60px;
    color: #ffffff;
    text-shadow: 0 0 50px rgb(100, 200, 250);
}
.Foto{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    padding: 2px;
}
.Contenedor-1 {
    display: flex;
    position: absolute;

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
.Contenedor-2 {
    padding: 20px;
    align-content: space-around;
    position: relative;
    width: 70%;
}
.card{
    padding: 10px;
    background-color: rgba(0, 255, 255, 0.39);
    margin: 20px;
}
</style>
