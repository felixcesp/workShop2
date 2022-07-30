import React, { Component } from "react";
import {FirstCont2, FirstImg2, FirstImg3, FirstImg4, FirsTitle4 } from "../styles/Styles";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <FirstCont2>
        <FirstImg2
          src="https://res.cloudinary.com/felixces/image/upload/v1659141645/samples/tareas/1_n5snuh.png"
          alt=""
        />
        <h3>Jenny kim</h3>
        <FirstImg3
          src="https://res.cloudinary.com/felixces/image/upload/v1659141645/samples/tareas/2_wceayn.png"
          alt=""
        />
        <FirstImg4
          src="https://res.cloudinary.com/felixces/image/upload/v1659141644/samples/tareas/3_mtsrl4.png"
          alt=""
        />
        <FirsTitle4>
          
          <strong>Jenny Kim</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Facilisi ullamcorper aliquam augue fermentum, vel,
          risus, adipiscing. Tellus vestibulum magnis ut elit, vitae mattis
          sapien. Laoreet nam....
        </FirsTitle4>
        <FirstImg4
          src="https://res.cloudinary.com/felixces/image/upload/v1659141645/samples/tareas/4_qse1bh.png"
          alt=""
        />
        <Footer />
      </FirstCont2>
    );
  }
}

export default Home;
