<template>
    <div id="app">
        <canvas id="alternating"></canvas>
        <canvas id="rainbow"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js'
    import autocolorPlugin from "../../../src";

    function createChartConfig(chartData, layout) {
        return {
            type: 'doughnut',
            plugins: [autocolorPlugin],
            options: {
                plugins: {
                    autocolor: {
                        layout: layout
                    }
                }
            },
            data: {
                labels: chartData.map((dataCategory) => {
                    return dataCategory['label'];
                }),
                datasets: [{
                    label: '# of Votes',
                    data: chartData.map((dataCategory) => {
                        return dataCategory['count'];
                    })
                }],
            }
        };
    }

    function makeRainbowChart(chartData) {
        const chartConfig = createChartConfig(chartData, 'rainbow');

        const context = document.getElementById('rainbow').getContext('2d');
        window.rainbow = new Chart(context, chartConfig)
    }

    function makeAlternatingColorChart(chartData) {
        const chartConfig = createChartConfig(chartData, 'alternating');

        const context = document.getElementById('alternating').getContext('2d');
        window.alternating = new Chart(context, chartConfig)
    }

    export default {
        mounted() {
            const chartData = [
                {label: '50Plus', count: 5},
                {label: 'Christian Democratic Appeal', count: 28},
                {label: 'Christian Union', count: 9},
                {label: 'Democrats 66', count: 26},
                {label: 'Denk', count: 3},
                {label: 'Forum for Democracy', count: 12},
                {label: 'GreenLeft', count: 22},
                {label: 'Independent Senate Group', count: 1},
                {label: 'Labour Party', count: 15},
                {label: 'Party for Freedom', count: 25},
                {label: 'Party for the Animals', count: 7},
                {label: 'People\'s Party For Freedom And Democracy', count: 44},
                {label: 'Reformed Political Party', count: 5},
                {label: 'Socialist Party', count: 18},

            ];
            makeRainbowChart(chartData);
            makeAlternatingColorChart(chartData);
        },
        name: 'App',
        components: {}
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
