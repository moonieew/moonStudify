import React, { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`

      @font-face {
        font-family: 'Heading Font';
        src: url('/fonts/Montserrat-SemiBold.ttf');
      }

      @font-face {
        font-family: 'Body Font';
        src: url('/fonts/Montserrat-Regular.ttf');
      }

      @font-face {
        font-family: 'Sub Font';
        src: url('/fonts/0048-LNTH-Fonters.ttf');
      }

      `}
    />
);

export default Fonts;
