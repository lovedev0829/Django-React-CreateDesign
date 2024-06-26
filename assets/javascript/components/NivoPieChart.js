import React from 'react';
import { createRoot } from 'react-dom/client';
import { ResponsivePie } from '@nivo/pie';

// Data you provided
const data = [
    {
        "id": "hack",
        "label": "hack",
        "value": 588,
        "color": "hsl(219, 70%, 50%)"
    },
    {
        "id": "java",
        "label": "java",
        "value": 40,
        "color": "hsl(86, 70%, 50%)"
    },
    {
        "id": "lisp",
        "label": "lisp",
        "value": 18,
        "color": "hsl(29, 70%, 50%)"
    },
    {
        "id": "make",
        "label": "make",
        "value": 541,
        "color": "hsl(350, 70%, 50%)"
    },
    {
        "id": "haskell",
        "label": "haskell",
        "value": 555,
        "color": "hsl(269, 70%, 50%)"
    }
];

// Define the MyResponsivePie component
const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'hack'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'java'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'make'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'haskell'
                },
                id: 'dots'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
);

// Define the main App component
const NivoPieChart = () => (
    <div style={{ height: '500px' }}>
        <MyResponsivePie data={data} />
    </div>
);

// Export the App component
//export default App;
createRoot(document.getElementById('nivo-pie-chart-root')).render(<NivoPieChart />)

