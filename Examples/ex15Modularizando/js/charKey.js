export default function (ev) { 
    const input = document.getElementById("input")
    const value = ev.currentTarget.dataset.value
    input.value += value
  }