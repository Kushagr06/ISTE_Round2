/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: IronEqual (https://sketchfab.com/ie-niels)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/blimp-from-poly-by-google-f375f48a4b704828a6e634c3745817a3
Title: Blimp from Poly by Google
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/blimp/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Cap_2} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/blimp/scene.gltf')
