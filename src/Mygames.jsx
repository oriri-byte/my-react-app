import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Mygames() {
  const [count, setCount] = useState(0)
  //最初の1秒はこちらの値がtimeにセットされる
  // const [time, setTime] = useState(new Date().toLocaleString())
  const [time, setTime] = useState(new Date().toDateString())
  useEffect(() =>{
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)
    // クリーンアップ処理: コンポーネントが消える時にタイマーを停止
    return () => {
      clearInterval(timerId)
    }
  }, [])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.amazon.co.jp/">
          <p>amazon Linkはこちら</p>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
          現在時刻: {time}
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Mygames
