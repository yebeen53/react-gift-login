
import { useTheme } from '@emotion/react';
import type { Theme } from './theme';

export default function hook(): Theme {
  return useTheme() as Theme;
}
