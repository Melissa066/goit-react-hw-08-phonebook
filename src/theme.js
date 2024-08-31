// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white', 
        color: 'gray.800', 
      },
      a: {
        textDecoration: 'none', 
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'blue.500' : 'blue.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.600' : 'blue.600',
          },
        }),
      },
    },
  },
});

export default theme;
