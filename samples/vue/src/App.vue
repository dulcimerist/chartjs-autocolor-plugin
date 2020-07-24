<template>
    <div id="app">
        <label>Religions in the United States (Alternating Colors Example)</label>
        <canvas id="alternating"></canvas>
        <br/>
        <label>Netherlands House of Representatives By Party (Rainbow Colors Example)</label>
        <canvas id="rainbow"></canvas>
        <br/>
        <label>University of Michigan Enrollees By School (Custom Colors Example)</label>
        <canvas id="custom"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js'
    import NetherlandsHouseOfRepresentativesData from "./data/NetherlandsHouseOfRepresentativesData";
    import UnitedStatesReligionData from "./data/UnitedStatesReligionData";
    import UniversityOfMichiganEnrollmentData from "./data/UniversityOfMichiganEnrollmentData";
    import autocolorPlugin from "../../../src";

    function createChartConfig(chartData, layout) {
        let config = {
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
                labels: chartData.data.map((dataCategory) => {
                    return dataCategory['label'];
                }),
                datasets: [{
                    label: chartData.title,
                    data: chartData.data.map((dataCategory) => {
                        return dataCategory['count'];
                    })
                }],
            }
        };
        if (chartData.colorScheme) {
            config.options.plugins.autocolor.colorScheme = chartData.colorScheme;
        }
        return config;

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

    function makeCustomColorChart(chartData) {
        const chartConfig = createChartConfig(chartData, 'custom');

        const context = document.getElementById('custom').getContext('2d');
        window.alternating = new Chart(context, chartConfig)
    }

    export default {
        mounted() {
            makeRainbowChart(NetherlandsHouseOfRepresentativesData);
            makeAlternatingColorChart(UnitedStatesReligionData);
            makeCustomColorChart(UniversityOfMichiganEnrollmentData);
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
