import {alternating, rainbow} from "./ColorGenerator/GenerateColors";

let autocolorPlugin = {
    id: 'autocolor',
    beforeDatasetUpdate: (chart) => {
        setBackgroundColors(chart);
    },
}

let setBackgroundColors = function (chart) {
    for (let i = 0; i < chart.data.datasets.length; i++) {
        if (!chart.data.datasets[i].backgroundColor) {

            const colors = getColors(
                chart.options.plugins['autocolor'].layout,
                chart.data.datasets[i].data.length
            );

            chart.data.datasets[i].backgroundColor = new Array(colors.length);
            colors.forEach((color, categoryIndex) => {
                const colorString = 'rgba(' + color.red + ',' + color.green + ',' + color.blue + ',1)';
                chart.data.datasets[i].backgroundColor[categoryIndex] = colorString;
                chart.legend.legendItems[categoryIndex].fillStyle = colorString;
            });
        }
    }
}

let getColors = function (layout, categoryCount) {
    switch (layout.toUpperCase()) {
        case 'ALTERNATING':
            return alternating(categoryCount);
        case 'RAINBOW':
        default:
            return rainbow(categoryCount);
    }
}

export default autocolorPlugin;
