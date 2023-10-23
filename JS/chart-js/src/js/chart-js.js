fetch('src/data/world-population.json')
    .then(res => res.json())
    .then(w => {
        const
            bar = document.getElementById('world-population'),
            bar2 = document.getElementById('world-population-2'),
            line = document.getElementById('world-population-line'),
            line2 = document.getElementById('world-population-line2'),
            bbData = document.getElementById('bubble-data'),
            polarArea = document.getElementById('polar-area'),
            doughnut = document.getElementById('doughnut'),
            pie = document.getElementById('pie'),
            years = w.map(y => y.year),
            populations = w.map(y => y.population),
            family = "'Inter Tight', 'Helvetica', 'Arial', sans-serif";

        new Chart(bar, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'World Population Growth Since 1900 to 2020 (in billions)',
                    data: populations,
                    backgroundColor: 'cyan',
                    borderRadius: 30,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'yellow',
                        titleFont: {
                            size: 18,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            boxWidth: 0,
                            color: 'white',
                            font: {
                                size: 14,
                                weight: 600,
                                color: 'white',
                                family
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, .05)',
                            borderColor: 'rgba(255, 255, 255, .05)',
                            tickColor: 'rgba(255, 255, 255, .05)'
                        },
                        ticks: {
                            color: 'orange',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, .05)',
                            borderColor: 'rgba(255, 255, 255, .05)',
                            tickColor: 'rgba(255, 255, 255, .05)'
                        },
                        ticks: {
                            color: 'white',
                            padding: 20,
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });

        new Chart(bar2, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'World Population Growth Since 1900 to 2020 (in billions)',
                    data: populations,
                    backgroundColor: 'orange',
                    borderRadius: 30
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'yellow',
                        titleFont: {
                            size: 18,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            boxWidth: 0,
                            color: 'white',
                            font: {
                                size: 16,
                                weight: 600,
                                color: 'white',
                                family
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, .05)',
                            borderColor: 'rgba(255, 255, 255, .05)',
                            tickColor: 'rgba(255, 255, 255, .05)'
                        },
                        ticks: {
                            color: 'cyan',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, .05)',
                            borderColor: 'rgba(255, 255, 255, .05)',
                            tickColor: 'rgba(255, 255, 255, .05)'
                        },
                        ticks: {
                            color: 'white',
                            padding: 5,
                            font: {
                                size: 13,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });

        new Chart(line, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'World Population Growth Since 1900 to 2020 (in billions)',
                    data: populations,
                    backgroundColor: 'orange',
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                radius: 5,
                hoverRadius: 12,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'yellow',
                        titleFont: {
                            size: 16,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            boxWidth: 0,
                            color: 'white',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, .05)',
                            borderColor: 'rgba(255, 255, 255, .05)',
                            tickColor: 'rgba(255, 255, 255, .05)'
                        },
                        ticks: {
                            color: 'cyan',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, .05)',
                            borderColor: 'rgba(255, 255, 255, .05)',
                            tickColor: 'rgba(255, 255, 255, .05)'
                        },
                        ticks: {
                            color: 'white',
                            padding: 20,
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });

        new Chart(line2, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'World Population Growth Since 1900 to 2020 (in billions)',
                    data: populations,
                    backgroundColor: 'orange',
                    borderColor: 'rgba(255, 100, 50, .1)',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                radius: 5,
                hoverRadius: 12,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'orange',
                        titleFont: {
                            size: 18,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            boxWidth: 0,
                            color: 'white',
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(0, 200, 50, .1)',
                            borderColor: 'rgba(0, 200, 50, .1)',
                            tickColor: 'rgba(0, 200, 50, .1)'
                        },
                        ticks: {
                            color: 'white',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(0, 200, 50, .1)',
                            borderColor: 'rgba(0, 200, 50, .1)',
                            tickColor: 'rgba(0, 200, 50, .1)'
                        },
                        ticks: {
                            color: 'orange',
                            padding: 20,
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });

        new Chart(polarArea, {
            type: 'polarArea',
            data: {
                labels: [
                    'Cyan',
                    'Magenta',
                    'Yellow',
                    'Orange',
                    'Blue'
                ],
                datasets: [{
                    label: 'NOT A FAKE DATA',
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        'cyan',
                        'magenta',
                        'yellow',
                        'orange',
                        'blue'
                    ],
                    borderColor: [
                        'rgba(0, 0, 0, .05)'
                    ],
                    borderWidth: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                radius: 3,
                hoverRadius: 5,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'orange',
                        titleFont: {
                            size: 18,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            color: 'white',
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                },
                scales: {
                    r: { display: false },
                    y: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            padding: 10,
                            color: 'white',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            color: 'orange',
                            padding: 10,
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });

        new Chart(pie, {
            type: 'pie',
            data: {
                labels: [
                    'Cyan',
                    'Magenta',
                    'Yellow',
                    'Orange',
                    'Blue'
                ],
                datasets: [{
                    label: 'NOT A FAKE DATA',
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        'cyan',
                        'magenta',
                        'yellow',
                        'orange',
                        'blue'
                    ],
                    borderColor: ['rgba(0, 0, 0, .05)'],
                    borderWidth: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                radius: 250,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'orange',
                        titleFont: {
                            size: 18,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            color: 'white',
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            padding: 10,
                            color: 'white',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            color: 'orange',
                            padding: 10,
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });

        new Chart(doughnut, {
            type: 'doughnut',
            data: {
                labels: [
                    'Cyan',
                    'Magenta',
                    'Yellow',
                    'Orange',
                    'Blue'
                ],
                datasets: [{
                    label: 'NOT A FAKE DATA',
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        'cyan',
                        'magenta',
                        'yellow',
                        'orange',
                        'blue'
                    ],
                    borderColor: [
                        'rgba(0, 0, 0, .05)'
                    ],
                    borderWidth: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                radius: 250,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'orange',
                        titleFont: {
                            size: 18,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            color: 'white',
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            padding: 10,
                            color: 'white',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            color: 'orange',
                            padding: 10,
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });

        new Chart(bbData, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Data',
                    data: [
                        { x: 25, y: 40, r: 10 },
                        { x: 20, y: 30, r: 10 },
                        { x: 33, y: 20, r: 10 },
                        { x: 5, y: 22, r: 10 },
                        { x: 40, y: 10, r: 8 }
                    ],
                    backgroundColor: 'cyan'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                radius: 3,
                hoverRadius: 5,
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, .95)',
                        padding: 15,
                        titleColor: 'orange',
                        titleFont: {
                            size: 18,
                            weight: 600,
                            family
                        },
                        bodyFont: {
                            size: 15,
                            weight: 600,
                            family
                        }
                    },
                    legend: {
                        labels: {
                            color: 'white',
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            padding: 10,
                            color: 'white',
                            font: {
                                size: 14,
                                weight: 600,
                                family
                            }
                        }
                    },
                    x: {
                        border: {
                            color: 'rgba(255, 100, 50, .1)',
                            width: 2
                        },
                        grid: {
                            color: 'rgba(255, 100, 50, .1)',
                            borderColor: 'rgba(255, 100, 50, .1)',
                            tickColor: 'rgba(255, 100, 50, .1)'
                        },
                        ticks: {
                            color: 'orange',
                            padding: 10,
                            font: {
                                size: 16,
                                weight: 600,
                                family
                            }
                        }
                    }
                }
            }
        });
    });
