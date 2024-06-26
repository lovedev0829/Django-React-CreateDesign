import React from 'react';
import { createRoot } from 'react-dom/client';
import { ResponsiveBar } from '@nivo/bar';

// Data you provided
const data = [
    {
      "country": "AD",
      "hot dog": 177,
      "hot dogColor": "hsl(87, 70%, 50%)",
      "burger": 56,
      "burgerColor": "hsl(30, 70%, 50%)",
      "sandwich": 74,
      "sandwichColor": "hsl(122, 70%, 50%)",
      "kebab": 176,
      "kebabColor": "hsl(138, 70%, 50%)",
      "fries": 147,
      "friesColor": "hsl(238, 70%, 50%)",
      "donut": 117,
      "donutColor": "hsl(185, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 180,
      "hot dogColor": "hsl(157, 70%, 50%)",
      "burger": 55,
      "burgerColor": "hsl(144, 70%, 50%)",
      "sandwich": 43,
      "sandwichColor": "hsl(41, 70%, 50%)",
      "kebab": 18,
      "kebabColor": "hsl(263, 70%, 50%)",
      "fries": 102,
      "friesColor": "hsl(230, 70%, 50%)",
      "donut": 143,
      "donutColor": "hsl(59, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 198,
      "hot dogColor": "hsl(161, 70%, 50%)",
      "burger": 150,
      "burgerColor": "hsl(357, 70%, 50%)",
      "sandwich": 73,
      "sandwichColor": "hsl(311, 70%, 50%)",
      "kebab": 121,
      "kebabColor": "hsl(321, 70%, 50%)",
      "fries": 2,
      "friesColor": "hsl(60, 70%, 50%)",
      "donut": 2,
      "donutColor": "hsl(241, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 24,
      "hot dogColor": "hsl(164, 70%, 50%)",
      "burger": 158,
      "burgerColor": "hsl(272, 70%, 50%)",
      "sandwich": 184,
      "sandwichColor": "hsl(21, 70%, 50%)",
      "kebab": 54,
      "kebabColor": "hsl(39, 70%, 50%)",
      "fries": 57,
      "friesColor": "hsl(160, 70%, 50%)",
      "donut": 52,
      "donutColor": "hsl(201, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 48,
      "hot dogColor": "hsl(334, 70%, 50%)",
      "burger": 133,
      "burgerColor": "hsl(275, 70%, 50%)",
      "sandwich": 139,
      "sandwichColor": "hsl(292, 70%, 50%)",
      "kebab": 189,
      "kebabColor": "hsl(198, 70%, 50%)",
      "fries": 67,
      "friesColor": "hsl(287, 70%, 50%)",
      "donut": 11,
      "donutColor": "hsl(151, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 99,
      "hot dogColor": "hsl(56, 70%, 50%)",
      "burger": 135,
      "burgerColor": "hsl(219, 70%, 50%)",
      "sandwich": 191,
      "sandwichColor": "hsl(121, 70%, 50%)",
      "kebab": 112,
      "kebabColor": "hsl(154, 70%, 50%)",
      "fries": 54,
      "friesColor": "hsl(258, 70%, 50%)",
      "donut": 15,
      "donutColor": "hsl(125, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 159,
      "hot dogColor": "hsl(225, 70%, 50%)",
      "burger": 180,
      "burgerColor": "hsl(30, 70%, 50%)",
      "sandwich": 115,
      "sandwichColor": "hsl(78, 70%, 50%)",
      "kebab": 36,
      "kebabColor": "hsl(246, 70%, 50%)",
      "fries": 47,
      "friesColor": "hsl(206, 70%, 50%)",
      "donut": 10,
      "donutColor": "hsl(333, 70%, 50%)"
    }
  ];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

// Define the main App component
const NivoBarChart = () => (
    <div style={{ height: '300px' }}>
        <MyResponsiveBar data={data} />
    </div>
);

// Export the App component
//export default App;
createRoot(document.getElementById('nivo-bar-chart-root')).render(<NivoBarChart />)
