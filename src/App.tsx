import './App.scss'

function App() {
  return (
    <>
      <div id='speech-bubble-box'>
        <div id='speech-bubble-a'>吹き出しA</div>
        <div id='speech-bubble-b'>吹き出しB</div>
        <div id='speech-bubble-c'>吹き出しC</div>
      </div>

      <div id='button-box'>
        <button className='btn-a'>ボタン1</button>
        <button className='btn-b'>ボタン2</button>
        <button className='btn-c'>ボタン3</button>
      </div>

      <div id='radio-box'>
        <input type='radio' className='radio-style' name='sample' value='' />
        <label>ラジオボタン1</label>
        <input type='radio' className='radio-style' name='sample' value='' />
        <label>ラジオボタン2</label>
        <input type='radio' className='radio-style' name='sample' value='' />
        <label>ラジオボタン3</label>
      </div>
    </>
  )
}

export default App
