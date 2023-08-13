import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-pfcube',
  templateUrl: './pfcube.component.html',
  styleUrls: ['./pfcube.component.sass']
})
export class PfcubeComponent implements OnInit {


  boxbody :any;

  ngOnInit(): void {
    this.createroom()
  }


  createroom(){
    const canvas = document.getElementById('pfc');
    const scene = new THREE.Scene();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff,0.5);
    pointLight.position.x = -0.3;
    pointLight.position.y = 0.5;
    pointLight.position.z = 2;
    scene.add(pointLight);

    const texture = new THREE.TextureLoader().load('./assets/IMG_20230810_145512.jpg')
    const material = new THREE.MeshBasicMaterial({ map: texture })

    let body = window.innerWidth

    if(body <= 450){
      this.boxbody = new THREE.BoxGeometry(1.8,1.8,1.8)
    }else{
      this.boxbody = new THREE.BoxGeometry(2,2,2)
    }


    const box = new THREE.Mesh(this.boxbody,material);

      scene.add(box);

   const canvasSizes = {
    width: window.innerWidth,
    height: 300,
   };

   const camera = new THREE.PerspectiveCamera(
    8,
    canvasSizes.width / canvasSizes.height,
    0.001,
    1000
   );
   camera.position.z = 30;
   scene.add(camera);

   if (!canvas) {
    return;
   }

   const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
   });
   renderer.setClearColor(0xe5e5e5, 0);
   renderer.setSize(canvasSizes.width, canvasSizes.height);


   window.addEventListener('resize', () => {
    canvasSizes.width = window.innerWidth
    let scrolly = window.scrollY
    let y = 250 - scrolly
    if(y >= 0){
      renderer.setSize(window.innerWidth, y)
    }else if(300<= window.scrollY){
      renderer.setSize(0,0)
    }

    camera.aspect = canvasSizes.width / canvasSizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSizes.width, canvasSizes.height);
    renderer.render(scene, camera);
  });


  window.addEventListener('scroll',() =>{

    if(body <= 450){
      this.boxbody = new THREE.BoxGeometry(1.8,1.8,1.8)
    }else{
      this.boxbody = new THREE.BoxGeometry(2,2,2)
    }

    let scrolly = window.scrollY
    let y = 250 - scrolly
    if(y >= 0){
      renderer.setSize(window.innerWidth, y)
    }else if(300<= window.scrollY){
      renderer.setSize(0,0)
    }
  })




  const clock = new THREE.Clock();

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    box.rotation.x = elapsedTime*0.09;
    box.rotation.y = elapsedTime*0.09;
    box.rotation.z = elapsedTime*0.09;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  animate();

  }


}
