declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.png';

declare type KeysOfUnion<T> = T extends T ? keyof T : never;
declare type Token = string;
declare type Email = string;
declare type UUID = string;
declare type Phone = string;
declare type Gender = 'male' | 'female';
declare type Base64 = string;
/** Описывает формат даты yyyy-MM-dd */
declare type DateString = string;
/** Описывает формат даты yyyy-MM-ddTHH:mm:ss+HH:mm; +HH:mm - часовой пояс пользователя */
declare type UTCDateString = string;
/** Описывает формат даты yyyy-MM-ddTHH:mm:ssZ; +HH:mm - часовой пояс пользователя */
declare type ISODateString = string;
/** Описывает формат даты yyyy-MM-ddTHH:mm:ss; +HH:mm - часовой пояс пользователя */
declare type ISODateStringWoZ = string;
/** Описывает формат даты 2022-12-21T13:48:23.159Z; +HH:mm - часовой пояс пользователя */
declare type ISODateStringLong = string;

declare const __IS_DEV__: boolean;
declare const __WITH_TOKEN__: boolean;
declare const __CLIENT_ID__: string;
declare const __REDIRECT_URI__: string;
declare const __UAS_TOKEN__: string;
