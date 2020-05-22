#ChartJS Autocolor Plugin

A plugin to provide category colors for your graphs so you don't have to

##HOW TO USE

1 - Import the plugin wherever you define your chart config
```javascript
import autocolorPlugin from 'chartjs-autocolor-plugin';
```

2 - Add the plugin to your config
```json
{
  plugins: [autocolorPlugin],
}
```

3 - Add config options for the plugin (will take defaults if not done)
```json
{
  options: {
    plugins: {
      autocolor: {
        layout: 'Rainbow'
      }
    }
  }
}
```

###Configuration Options
####Layout
    Rainbow (Default): Each color is adjacent to the most similar two colors to it

    Alternating: Each color is adjacent to the most dissimilar two colors to it
