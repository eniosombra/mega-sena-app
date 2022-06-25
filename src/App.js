import { useState } from 'react'

export function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([])

  const styleButton = (num) => ({
    border: 'none',
    borderRadius: '100%',
    height: '64px',
    width: '64px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '12px',
    backgroundColor: selectedNumbers.includes(num) ? '#82E0AA' : '#F7DC6F'
  })

  const handleAdd = (num) =>
    selectedNumbers.includes(num)
      ? setSelectedNumbers([...selectedNumbers.filter((n) => n !== num)])
      : setSelectedNumbers([...selectedNumbers, num])

  return (
    <div style={{ width: '60%' }}>
      {[...Array(36).keys()].map((num) => (
        <button
          key={num}
          onClick={() => handleAdd(num + 1)}
          style={styleButton(num + 1)}
        >
          {num + 1}
        </button>
      ))}

      <h3>Número(s) selecionado(s):</h3>
      {selectedNumbers.map((num) => (
        <h1 key={num}>{num}</h1>
      ))}
    </div>
  )
}
