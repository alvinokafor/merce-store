const months = ["January", "February", "March", "April", "May", "June", "July"];
const labels = months;
const trafficLables = [
  "Facebook",
  "Instagram",
  "Youtube",
  "Snapchat",
  "Twitter",
  "LinkedIn",
  "BeReal",
];
const topDevices = ['Mobile', 'Tablet', 'Desktop']

export const barData = {
  labels: labels,
  datasets: [
    {
      label: "Product Views",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(181, 228, 202, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(181, 228, 202)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

export const trafficData = {
  labels: trafficLables,
  datasets: [
    {
      label: "Traffic Channel",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(181, 228, 202, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(181, 228, 202)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

export const deviceData = {
  labels: topDevices,
  datasets: [{
      data: [30, 20, 50],
      backgroundColor: [
        'rgba(181, 228, 202, 0.2)',
        'rgba(202, 189, 255, 0.2)',
        'rgba(42, 133, 255, 0.2)'
      ]
  }]
}

export const lineData = {
  labels: labels,
  datasets: [
    {
      label: "Earnings",
      data: [2000, 3000, 1000, 1700, 1400, 980, 2400],
      fill: false,
      borderColor: "rgb(42, 133, 155)",
      tension: 0.1,
    },
  ],
};

export const customersData = {
  labels: labels,
  datasets: [
    {
      label: "Customers",
      data: [140, 340, 1500, 1700, 1400, 180, 1400],
      fill: false,
      borderColor: "rgb(42, 133, 155)",
      tension: 0.1,
    },
  ],
};
