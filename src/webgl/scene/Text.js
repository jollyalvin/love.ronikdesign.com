const { assets } = require ('../../context');

const LiveShaderMaterial = require('../materials/LiveShaderMaterial');
const honeyShader = require('../shaders/honey.shader');
const animate = require('@jam3/gsap-promise');
const triangleArea = require('../../util/triangulate');

// add fonts to preloader
const helvetikerFont = assets.queue({
  url: 'assets/fonts/helvetiker.typeface.json'
});

const typefaceList = [
  'helvetiker',
  'aroly-regular'
];

module.exports = class Text extends THREE.Object3D {
  constructor (text, fontIndex) {
    super();

    this.loader = new THREE.FontLoader();
    this.loader.load(`assets/fonts/${typefaceList[fontIndex]}.typeface.json`, font => {
      this.createText(text, font);
    });
  }

  animateIn (opt = {}) {
    animate.to(this.material.uniforms.alpha, 2.0, {
      ...opt,
      value: 1
    });
    animate.fromTo(this.rotation, 2.0, {
      x: -Math.PI / 2
    }, {
      ...opt,
      x: 0,
      ease: Expo.easeOut
    });
  }

  createText(text, font) {
    const options = {
      font: font,
      size: 0.8,
      height: 0.2
    };

    this.textGeo = new THREE.TextGeometry(text, options);

    this.material = new LiveShaderMaterial(honeyShader, {
      transparent: true,
      wireframe: true,
      uniforms: {
        alpha: { value: 0 },
        time: { value: 0 },
        colorA: { value: new THREE.Color('rgb(94,222,179)') },
        colorB: { value: new THREE.Color('rgb(85,57,210)') }
      }
    });

    this.altMaterial = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(
      this.textGeo,
      this.material
    );

    // compute sizes
    this.textGeo.computeBoundingBox();
    this.textGeo.computeVertexNormals();

    // center text
    this.mesh.position.x = -0.5 * ( this.textGeo.boundingBox.max.x - this.textGeo.boundingBox.min.x );
    this.mesh.position.y = -0.5 * ( this.textGeo.boundingBox.max.y - this.textGeo.boundingBox.min.y );

    // "fix" side normals by removing z-component of normals for side faces
    // (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)
    const triangleAreaHeuristics = 0.1 * (options.height * options.size);

    for (let i = 0; i < this.textGeo.faces.length; i++) {
      const face = this.textGeo.faces[i];
      if (face.materialIndex === 1) {
        for (let j = 0; j < face.vertexNormals.length; j++) {
          face.vertexNormals[j].z = 0;
          face.vertexNormals[j].normalize();
        }

        const va = this.textGeo.vertices[face.a];
        const vb = this.textGeo.vertices[face.b];
        const vc = this.textGeo.vertices[face.c];
        const s = triangleArea(va, vb, vc);

        if (s > triangleAreaHeuristics) {
          for (let j = 0; j < face.vertexNormals.length; j++) {
            face.vertexNormals[j].copy(face.normal);
          }
        }
      }
    }

    this.add(this.mesh);
  }

  update (dt = 0, time = 0) {
    // This function gets propagated down from the WebGL app to all children
    // this.rotation.y += dt * 0.1;
    this.material.uniforms.time.value = time * 0.5;
  }
};
