import './views/styles/main.css';
import './views/nodes/gameboard';
import './views/nodes/axis';
import { setListenersForLinks } from './controllers/listeners/forLinks';
import { fillShipyard, viewShipYard } from './views/nodes/shipyard';

setListenersForLinks();
viewShipYard();
