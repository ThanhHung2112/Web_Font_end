const labels = ['January', 'February', 'March', 'April', 'May', 'June']


const data = {
  labels: labels,
  datasets: [
    {
      label: 'User',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [10, 27, 56, 34, 24, 53],
      tension: 0.4,
    },
    {
      label: 'Premium',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [0, 34, 32, 23, 2, 82],
      tension: 0.4,
    },
    {
      label: 'Artists',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      data: [0, 2, 6, 3, 2, 0],
      tension: 0.4,
    },
  ],
}
const config = {
  type: 'line',
  data: data,
}

const canvas = document.getElementById('canvas')
const chart = new Chart(canvas, config)