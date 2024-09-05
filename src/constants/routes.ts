/**
 * A record of application routes.
 * 
 * This object provides a mapping between route names and their corresponding URL paths.
 * It is useful for managing and referring to routes throughout the application in a
 * centralized and consistent manner.
 * 
 * @example
 * // Access the path for the home route
 * const homePath = ROUTES.home; // "/home"
 * 
 * // Access the path for the player route
 * const playerPath = ROUTES.player; // "/player"
 * 
 * @see {@link https://reactrouter.com} For more information on routing in React applications.
 */
export const ROUTES: Record<string, string> = {
    home: "/home",
    player: "/player",
  };
  