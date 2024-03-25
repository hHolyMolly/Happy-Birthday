tailwind.config = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        black: {
          0: 'var(--black-0)',
          50: 'var(--black-50)',
          100: 'var(--black-100)',
          200: 'var(--black-200)',
          300: 'var(--black-300)',
          400: 'var(--black-400)',
          450: 'var(--black-450)',
          500: 'var(--black-500)',
          600: 'var(--black-600)',
          1000: 'var(--black-1000)',
        },

        'green-yellow': {
          light: 'var(--green-yellow-light)',
          light_active: 'var(--green-yellow-light_active)',
          normal: 'var(--green-yellow-normal)',
          normal_hover: 'var(--green-yellow-normal_hover)',
          normal_active: 'var(--green-yellow-normal_active)',
          darker: 'var(--green-yellow-darker)',
        },
      },
    },
    screens: {
      sm: '375px',
      lg: '768px',
      xl: '1280px',
      '2xl': '1600px',

      'any-hover': { raw: '(hover: hover)' },
    },
    container: {
      screens: {
        sm: '375px',
        lg: '768px',
        xl: '1280px',
        '2xl': '1600px',
      },
      center: true,
      padding: {
        DEFAULT: '12px',
        lg: '32px',
        xl: '60px',
        '2xl': '100px',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
