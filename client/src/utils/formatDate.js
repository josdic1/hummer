export function formatDate(datetime) {
    const d = new Date(datetime)
    const date = d.toLocaleDateString('en-US')
    const time = d.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
    return `${date} ${time}`
  }