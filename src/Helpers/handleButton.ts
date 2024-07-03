import { AddSportProps, deportes } from "../DTO/getGifs";
import { AddCounterProps } from "../DTO/getGifs";

export const handleButton = (
  props: AddSportProps,
  counterprops: AddCounterProps
) => {
  props.setSport([...props.sport, deportes[counterprops.counter]]);
  counterprops.setCounter(counterprops.counter + 1);

  // OTRA FORMA DE HACER ESTO:
  // NOTA => NO SE PUEDE MODIFICAR DIRECTAMENTE EL ESTADO DE UN HOOK PORQUE ALTERAMOS LA INMUTABILIDAD => VOLCAR VALOR EN OTRA VARIABLE

  /* if (addsport) {
     const newsport = [...sport];
     newsport.push(deportes[counter]);
    setSport(newsport);
    setCounter(counter + 1);
  }
    */
};
