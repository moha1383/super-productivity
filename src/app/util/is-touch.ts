// export function isTouch(): boolean {
//   try {
//     document.createEvent('TouchEvent');
//     return true;
//   } catch (e) {
//     return false;
//   }
// }
// export const IS_TOUCH = isTouch();

export const isTouchOnly = (): boolean => window.matchMedia('(pointer: coarse)').matches;

export const IS_TOUCH_ONLY = isTouchOnly();
