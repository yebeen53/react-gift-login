import { useTheme } from '@emotion/react';
import type { Theme } from './theme';


const useHook=(): Theme=> {
  return useTheme() as Theme;
};
export default useHook;


