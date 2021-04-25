import { IonSearchbar } from "@ionic/react";
import React from "react";

import Map from "../../components/map";

const Location = () => {
  return (
    <>
      <Map></Map>{" "}
      <IonSearchbar
        value="teste" 
        showCancelButton="always"
      ></IonSearchbar>
    </>
  );
};

export default Location;
