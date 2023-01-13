import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'btn-hover': string;
      'form-btn-bg': string;
      'form-btn-bg-hover': string;
      'form-submit-btn-bg': string;
      'form-submit-btn-bg-hover': string;
      'card-bg': string;
      'card-border-bg': string;
      'card-shadow': string;
      'border-outline': string;
      'board-bg': string;
      'board-border-bg': string;
      'board-dragging-bg': string;
    };
  }
}
