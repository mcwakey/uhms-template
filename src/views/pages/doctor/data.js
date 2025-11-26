const sColChart5 = {
    series: [{
        name: 'Data',
        data: [40, 60, 55, 80, 35, 70, 60]  // Match the number of bars and shape
    }],
    sChart5: {
        chart: {
            type: 'bar',
            height: 60,
            width: 100,
            toolbar: { show: false },
            sparkline: { enabled: true }
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                borderRadius: 2, // Rounded top
                endingShape: 'rounded'
            }
        },
        stroke: {
            show: false
        },
        fill: {
            colors: ['#2e3192']  // Blue color matching the image
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

const sColChart6 = {
    series: [{
        name: 'Data',
        data: [40, 60, 40, 60, 75, 40, 75]  // Match the number of bars and shape
    }],
    sChart6: {
        chart: {
            type: 'bar',
            height: 60,
            width: 100,
            toolbar: { show: false },
            sparkline: { enabled: true }
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                borderRadius: 0, // Rounded top
                endingShape: 'rounded'
            }
        },
        stroke: {
            show: false
        },
        fill: {
            colors: ['#E04F16']  // Blue color matching the image
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

const sColChart7 = {
    series: [{
        name: 'Data',
        data: [20, 35, 30, 50, 60, 35, 25, 45]  // Match the number of bars and shape
    }],
    sChart7: {
        chart: {
            type: 'bar',
            height: 60,
            width: 100,
            toolbar: { show: false },
            sparkline: { enabled: true }
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                borderRadius: 2, // Rounded top
                endingShape: 'rounded'
            }
        },
        stroke: {
            show: false
        },
        fill: {
            colors: ['#0E9384']  // Blue color matching the image
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

const sColChart20 = {
    series: [
        {
            name: 'Total Appointments',
            type: 'bar',
            data: [360, 280, 290, 270, 340, 220, 230, 180, 260, 200, 350, 400]
        },
        {
            name: 'Completed',
            type: 'area',
            data: [200, 195, 190, 185, 200, 160, 170, 165, 210, 215, 225, 230]
        }
    ],
    sChart20: {
        chart: {
            height: 250,
            type: 'line',
            toolbar: { show: false },
            stacked: false
        },
        stroke: {
            width: [0, 2],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '15%',
                borderRadius: 4
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: ['solid', 'gradient'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "#434BAD",
                        opacity: 0.4
                    },
                    {
                        offset: 100,
                        color: "#ffffff",
                        opacity: 0
                    }
                ]
            }
        },
        colors: ['#3B28CC', '#00B96B'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    fontSize: '13px'
                }
            }
        },
        yaxis: {
            min: 0,
            max: 400,
            labels: {
                style: {
                    fontSize: '13px'
                },
                offsetX: -10  // Moves Y-axis labels 10px to the left
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const total = series[0][dataPointIndex];
                const completed = series[1][dataPointIndex];
                return `<div class="apex-tooltip">
          <strong>${w.globals.labels[dataPointIndex]}</strong><br/>
          <span style="color:#3B28CC">●</span> Total Appointments: ${total}<br/>
          <span style="color:#00B96B">●</span> Completed: ${completed}
        </div>`;
            }
        },
        legend: { show: false },
        grid: {
            borderColor: '#eee',
            strokeDashArray: 4,
            padding: {
                left: 0,   // Adjust as needed to ensure labels aren't cut off
                right: -10
            }
        }
    }
};

var sCirclechart = {
      series: [80, 10, 10],
      chart: {
        type: 'donut',
        height: 270,
        width: '100%'
      },
      scircle : {
        labels: ['Completed', 'Pending', 'Cancelled'],
      colors: ['#27AE60', '#E2B93B', '#EF1E1E'],  // green, yellow, red
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        colors: ['#fff']
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: false // center labels hidden to match your image
            }
          }
        }
      },
      tooltip: {
        enabled: true
      },
      annotations: {
        points: [{
          x: '50%',
          y: '50%',
          marker: {
            size: 8,
            fillColor: '#21B573',
            strokeColor: '#fff',
            strokeWidth: 2,
            shape: 'circle',
            offsetX: 40,
            offsetY: -10
          },
          label: {
            text: '55%',
            style: {
              fontSize: '16px',
              fontWeight: 600,
              color: '#0A1B39',
              background: {
                enabled: true,
                foreColor: '#fff',
                padding: 8,
                borderRadius: 8
              }
            },
            offsetX: 60,
            offsetY: 0
          }
        }]
      }
      }
    };

export { sColChart5, sColChart6, sColChart7, sColChart20,sCirclechart }