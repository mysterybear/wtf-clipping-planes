import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Canvas } from "@react-three/fiber"

const Container = (props) => <div className="container" {...props} />

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Canvas
        orthographic
        gl={{ logarithmicDepthBuffer: true, localClippingEnabled: true }}
      >
        <App />
      </Canvas>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
)
