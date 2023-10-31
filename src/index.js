import './views/styles/main.css';
import './views/nodes/gameboard';
import './views/nodes/axis';
import { setListenersForLinks } from './controllers/listeners/forLinks';
import { fillShipyard, viewShipyard } from './views/nodes/shipyard';
import {
    forFregats,
    setListenersForFregats,
    setListenersForShips,
} from './controllers/listeners/forShips';
import { playerShipyardModel } from './models/shipyard';

setListenersForLinks();
viewShipyard();
setListenersForShips(playerShipyardModel.getDockWithFregats().getShips());
