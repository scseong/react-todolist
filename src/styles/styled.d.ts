import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'btn-hover': string;
      'form-btn-bg': string;
      'form-btn-bg-hover': string;
      'form-submit-btn-bg': string;
      'form-submit-btn-bg-hover': string;
      'card-shadow': string;
      'border-outline': string;
    };
  }
}
