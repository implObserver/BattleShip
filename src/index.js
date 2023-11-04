import './views/styles/main.css';
import { Profile } from './models/player';
import { viewProfile } from './views/nodes/profile';
import { setListenersForLinks } from './controllers/listeners/forLinks';
import { viewShipyard } from './views/nodes/shipyard';
import { setListenersForShips } from './controllers/listeners/forShips';
export const player1 = Profile(1, 'Player1', 'player-board');
export const ai = Profile(0, 'AI', 'ai-board');
viewProfile(player1);
viewProfile(ai);
viewShipyard(player1.getShipyard())
setListenersForLinks();
setListenersForShips(player1.getShipyard().getDockWithFregats().getShips());
setListenersForShips(player1.getShipyard().getDockWithCaravels().getShips());
setListenersForShips(player1.getShipyard().getDockWithDrakkars().getShips());
setListenersForShips(player1.getShipyard().getDockWithBoats().getShips());