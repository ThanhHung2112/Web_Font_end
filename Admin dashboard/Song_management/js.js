const labels = ['January', 'February', 'March', 'April', 'May', 'June']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Lượt truy cập',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [10, 27, 56, 34, 24, 53],
      tension: 0.4,
    },
    {
      label: 'Người đăng ký',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [0, 34, 32, 23, 2, 82],
      tension: 0.4,
    },
    {
      label: 'Hủy đăng ký',
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

const line_chart = document.getElementById('line-chart')
const chart = new Chart(line_chart, config)
