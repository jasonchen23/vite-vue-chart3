<template>
    <BarChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables);
export default defineComponent({
    name: 'chart1',
    components: {BarChart},
    setup() {
        const testData = {
            labels: ['Paris', 'Nime', 'Toul'],
            datasets: [
                {
                    data: [30,50,80],
                    backgroundColor: ['#77CEFF','#0079AF','#88ddc1']
                }
            ]
        };
        return { testData }
    }
})
</script>

<style>

</style>