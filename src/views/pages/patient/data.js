const sColChart8 = {
    series: [{
        name: 'Data',
        data: [22, 35, 30, 40, 28, 45, 40] // You can adjust these
    }],
    sChart8: {
        chart: {
          width: '100%',
          height: 35,
          type: 'area',
          toolbar: { show: false },
          sparkline: { enabled: true }
        },
        stroke: {
          curve: 'smooth',
          width: 2,
          colors: ['#3538CD']  // orange line
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 90, 100],
            colorStops: [
              {
                offset: 0,
                color: "#3538CD",
                opacity: 0.4
              },
              {
                offset: 100,
                color: "#ffffff",
                opacity: 0.1
              }
            ]
          }
        },
        dataLabels: { enabled: false },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: false }
    }
};

const sColChart9 = {
    series: [{
        name: 'Data',
        data: [10, 20, 15, 25, 18, 30, 28, 35, 32, 38] // Smoother variety helps visually
    }],
    sChart9: {
        chart: {
            width: '100%',
            height: 40, // Adjusted height for thin ribbon look
            type: 'area',
            toolbar: { show: false },
            sparkline: { enabled: true }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#007BFF'] // Blue line (adjust to match exact tone)
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0,
                stops: [0, 90, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "#007BFF",
                        opacity: 0.5
                    },
                    {
                        offset: 100,
                        color: "#ffffff",
                        opacity: 0.0
                    }
                ]
            }
        },
        dataLabels: { enabled: false },
        xaxis: {
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: false }
    }
};

const sColChart10 = {
    series: [
        {
            name: 'Series A',
            data: [58, 64, 72, 78, 70, 37]
        },
        {
            name: 'Series B',
            data: [38, 80, 20, 20, 65, 20]
        }
    ],
    sChart10: {
        chart: {
            type: 'bar',
            height: 340,
            stacked: false,
            toolbar: { show: false },
            margin: 0, // Ensures minimal spacing
            animations: { enabled: false }, // Optional: avoids resizing artifacts
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '60%',
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Cardiology', 'Urology', 'Pediatrics', 'Gynecology', 'Psychiatrist', 'General'],
            max: 100,
            position: 'top',
            labels: {
                show: true,
                style: {
                    fontSize: '12px',
                    colors: '#6C7688' // Dark gray
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: '12px',
                    colors: '#0A1B39' // Darker for better contrast
                }
            }
        },
        grid: {
            padding: {
                bottom: 0 // Removes extra space at the bottom
            },
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        tooltip: {
            shared: true,
            intersect: false
        },
        colors: ['#3538CD', '#0E9384'],
        legend: {
            show: false
        }
    }
};
export { sColChart8, sColChart9,sColChart10 }