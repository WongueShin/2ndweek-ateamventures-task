import "styled-components";

declare module "styled-components" {
  export interface DefaultStyle {
    colors: {
      main: string;
      secondary: string;
    };
    margin: number;
    padding: number;
    background: string;
    border: string;
    borderRadius: string;
  }
}
