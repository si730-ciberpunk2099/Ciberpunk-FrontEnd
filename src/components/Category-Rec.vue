<template>
<div class="category">
    <h2>CATEGORIA</h2>
    <select v-model="selectedOption">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
</div>
</template>

<script>
export default {
    name: 'CategoryRecVue',
props: {
    title: String,
    options: Array,
},
data() {
    return {
    selectedOption: 'Seleccione uno',
    };
},
};
</script>

<style scoped>
.category {
border: 1px solid #ccc;
border-radius: 8px;
padding: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
font-size: 18px;
margin-bottom: 10px;
}

select {
width: 100%;
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
}
</style>