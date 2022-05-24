import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUsers,
  faPersonSwimming,
  faRollerCoaster,
  faBasketballHoop,
  faJoystick,
  faBowlingBallPin,
  faGolfFlagHole,
  faGoalNet,
  faIceSkate,
  faFort,
  faAngleDown,
  faMapMarkerAlt,
  faAngleLeft,
  faIceCream,
  faHouseTurret,
  faGamepadModern,
  faPersonToDoor,
  faWater,
} from "@fortawesome/pro-light-svg-icons";

library.add(
  faUsers,
  faPersonSwimming,
  faRollerCoaster,
  faBasketballHoop,
  faJoystick,
  faBowlingBallPin,
  faGolfFlagHole,
  faGoalNet,
  faIceSkate,
  faFort,
  faAngleDown,
  faAngleLeft,
  faMapMarkerAlt,
  faIceCream,
  faHouseTurret,
  faGamepadModern,
  faPersonToDoor,
  faWater
);

export default (app) => {
  // eslint-disable-next-line vue/component-definition-name-casing
  app.component("font-awesome-icon", FontAwesomeIcon);
};
