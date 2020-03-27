import React, { Component, Fragment } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    shape: '',
    color: '',
    eyeSize: '',
    eyeColor: '',
    mouthSize: '',
    mouthColor: '',
    width: '',
    height: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const { shape, color, eyeColor, eyeSize, mouthSize, mouthColor, height, width } = this.state
    const { handleChange } = this
    let eyes = { 
      transform: `scale(${eyeSize})`,
      background: `${eyeColor}` 
    }
    return (
      <Fragment>
        <main>
          <form>
            <div>
              <label htmlFor="shape">Shape</label>
              <input type="range" name="shape" min="0" max="50" onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="color">Color</label>
              <input type="color" name="color" onChange={handleChange} value={color}/>
            </div>
            <div>
              <label htmlFor="height">Height</label>
              <input type="range" name="height" min="100" max="400" onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="width">Width</label>
              <input type="range" name="width" min="100" max="400" onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="eyeSize">Eye Size</label>
              <input type="range" name="eyeSize" min="0.2" max="2" step="0.2" onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="eyeColor">Eye Color</label>
              <input type="color" name="eyeColor" onChange={handleChange} value={eyeColor}/>
            </div>
            <div>
              <label htmlFor="eyeColor">Mouth Size</label>
              <input type="range" name="mouthSize" min="0.5" max="1.5" step="0.1" onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="eyeColor">Mouth Color</label>
              <input type="color" name="mouthColor" onChange={handleChange} value={mouthColor}/>
            </div>
          </form>
          <section>
            <div  
              style={{ 
                borderRadius: `${shape}%`, 
                background: `${color}`, 
                height: `${height}px`, 
                width: `${width}px` 
              }} 
              className="smiley"
            >
              <div className="eyes">
                <div 
                  style={eyes} 
                  className="eye"
                ></div>
                <div 
                  style={eyes}
                  className="eye"
                ></div>
              </div>
              <div 
                style={{ transform: `scale(${mouthSize})`, background: `${mouthColor}`}}
                className="mouth"
              ></div>
            </div>
          </section>
        </main>
      </Fragment>
    )
  }
}
