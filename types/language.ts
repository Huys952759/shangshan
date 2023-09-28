export enum LanguageEnum {
    English = 'English',
    Chinese = 'Chinese',
    Arabic = 'Arabic',
}

export interface LanguageType {
    [LanguageEnum.English]: string,
    [LanguageEnum.Chinese]: string,
    [LanguageEnum.Arabic]: string,
  }