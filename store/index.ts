import { PageText } from '@/PageText';
import { globalState } from '@/hooks/useStore/globalState';
import { LanguageEnum } from '@/types/language';
import { PageTextType } from '@/types/pageText';

const initState: {
  language: LanguageEnum;
  pageText: PageTextType;
} = {
  language: LanguageEnum.Chinese,
  pageText: PageText,
};

export const useStore = globalState(initState);
