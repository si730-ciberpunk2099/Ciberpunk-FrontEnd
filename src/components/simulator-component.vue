<script>
import Navbar from "@/components/Navbar-component.vue";
import backgroundAnimatedComponent from "@/components/background-animated-component.vue";
export default {
    name: "simulator-component",
    components: {
        Navbar,
        backgroundAnimatedComponent,
    }
}
</script>
<template>
    <div class="todo">
        <backgroundAnimatedComponent/>
        <Navbar/>
        <img src="@/assets/Tittle.png" alt="No carga el titulo" className="title-png">
        <div class="contenedor1">

            <div class="card-busqueda">
                <Toast />
                <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
            </div>

            <div class="card-galery">
                <DataView :value="products" :layout="layout">
                    <template #header>
                        <div class="flex justify-content-end">
                            <DataViewLayoutOptions v-model="layout" />
                        </div>
                    </template>
                    <template #list="slotProps">
                        <div class="col-12">
                            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="slotProps.data.image" :alt="slotProps.data.name" />
                                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                        <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                        <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ slotProps.data.category }}</span>
                                        </span>
                                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                        </div>
                                    </div>
                                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                        <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                        <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #grid="slotProps">
                        <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                            <div class="p-4 border-1 surface-border surface-card border-round">
                                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                                <div class="flex flex-column align-items-center gap-3 py-5">
                                    <img class="w-9 shadow-2 border-round" :src="slotProps.data.image" :alt="slotProps.data.name" />
                                    <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                                </div>
                                <div class="flex align-items-center justify-content-between">
                                    <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </div>

        <div class="contenedor2">

            <div class="card flex justify-content-center">
                <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
                <Dialog v-model:visible="visible" :style="{ width: '50vw' }">
                    <div class="card-listaCompra">
                        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
                            <template #header> Lista de Productos </template>
                            <template #item="slotProps">
                                <div class="flex flex-wrap p-2 align-items-center gap-3">
                                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="slotProps.item.image" :alt="slotProps.item.name" />
                                    <div class="flex-1 flex flex-column gap-2">
                                        <span class="font-bold">{{ slotProps.item.name }}</span>
                                        <div class="flex align-items-center gap-2">
                                            <i class="pi pi-tag text-sm"></i>
                                            <span>{{ slotProps.item.category }}</span>
                                        </div>
                                    </div>
                                    <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
                                </div>
                            </template>
                        </OrderList>
                    </div>
                </Dialog>
            </div>

        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '/service/ProductService';
import { NodeService } from '/service/NodeService';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const products = ref();
const layout = ref('grid');
const visible = ref(false);
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

const nodes = ref(null);
const selectedKey = ref(null);
</script>

<style scoped>
.title-png {
    position: fixed;
    top: 10px;
    left: 20px;
    width: 300px;
    height: auto;
}
.card-galery{
    overflow: auto;
}
.todo{
    display: flex;
    position: absolute;

    flex-direction: column;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.contenedor1{
    display: flex;
    position: relative;

    flex-direction: row;
    justify-content: center;

    height: 50vh;
    width: 90vw;
    left: 5vw;
}
.contenedor2{
    display: flex;
    position: relative;

    flex-direction: column;
    justify-content: center;

}

</style>
