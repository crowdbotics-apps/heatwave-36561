import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import { Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshStandardMaterial, AmbientLight, DirectionalLight } from "three";

const WelcomeScreen = () => {
  const onContextCreate = async gl => {
    const renderer = new Renderer({
      gl
    });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    camera.position.z = 5;
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshStandardMaterial({
      color: 0xff0000
    });
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    const ambientLight = new AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    animate();
  };

  return <View style={styles.container}>
      <GLView style={styles.logo} onContextCreate={onContextCreate} />
      <Text style={styles.title}>Welcome to Heatwave</Text>
      <Text style={styles.subtitle}>The hottest app in town</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b64141"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: "#fff"
  }
});
export default WelcomeScreen;