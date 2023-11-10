import './views/styles/main.css';
import { Profile } from './models/player';
import { viewProfile } from './views/nodes/profile';
import { setListenersForLinks } from './controllers/listeners/forLinks';
import { viewShipyard } from './views/nodes/shipyard';
import { setListenersForShips } from './controllers/listeners/forShips';
import { Game } from './models/game';

export const game = Game();
game.start();
game.player.getGameboard().randomFillingOfShips();
game.ai.getGameboard().randomFillingOfShips();