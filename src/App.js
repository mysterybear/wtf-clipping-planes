import * as THREE from "three"
import { useControls } from "leva"

function App() {
  const { a, b, x, y, z, c } = useControls({
    a: { value: 1, min: -5, max: 5, step: 1 },
    b: { value: 1, min: -5, max: 5, step: 1 },
    x: { value: 0, min: -5, max: 5, step: 1 },
    y: { value: 0, min: -5, max: 5, step: 1 },
    z: { value: 0, min: -5, max: 5, step: 1 },
    c: { value: 0, min: -1, max: 1, step: 0.01 },
  })
  const clippingPlanes = [[x, y, z, c]].map(
    ([x, y, z, c]) => new THREE.Plane(new THREE.Vector3(x, y, z), c)
  )
  console.log(clippingPlanes)
  return (
    <mesh>
      <boxBufferGeometry args={[a, b]} />
      <meshBasicMaterial color="tomato" clippingPlanes={clippingPlanes} />
    </mesh>
  )
}

export default App
