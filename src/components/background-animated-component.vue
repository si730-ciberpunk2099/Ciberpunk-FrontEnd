<template>
    <div class="background-animated-component">
        <div class="grid">
            <div
                v-for="(square, index) in squares"
                :key="index"
                @mouseover="highlightSquare(index)"
                :class="{ 'highlighted': square.isHighlighted }"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            squares: [],
        };
    },
    mounted() {
        const numRows = 60;
        const numCols = 60;
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                this.squares.push({
                    isHighlighted: false,
                });
            }
        }
    },
    methods: {
        highlightSquare(index) {
            this.squares[index].isHighlighted = true;
            setTimeout(() => {
                this.unhighlightSquare(index);
            }, 800);
        },
        unhighlightSquare(index) {
            this.squares[index].isHighlighted = false;
        },
    },
};
</script>

<style scoped>
.background-animated-component {
    background: radial-gradient(circle at center, #060055, #10002b);
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(60, 1fr);
    grid-template-rows: repeat(60, 1fr);
    width: 100%;
    height: 100%;
}

.grid div {
    transition: background-color 1s;
    width: 100%;
    height: 100%;
}

.grid div.highlighted {
    background-color: rgba(0, 191, 255, 1);
}
</style>
