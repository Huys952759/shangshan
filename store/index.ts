import { PageText } from '@/PageText';
import { globalState } from '@/hooks/useStore/globalState';

/**
 * @typedef {Object} GlobalStateType
 *
 * @property {'English', 'Chinese', 'Arabic'} language
 * @property {Object} pageText
 */

/** @type {GlobalStateType} */
const initState = {
  language: 'English',
  pageText: PageText,
};

export const useStore = globalState(initState);
