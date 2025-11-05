// Theme constants for consistent styling
export const COLORS = {
  primary: {
    orange: '#fb923c', // orange-400
    orangeLight: '#fdba74', // orange-300
    orangeDark: '#ea580c', // orange-600
  },
  secondary: {
    blue: '#60a5fa', // blue-400
    blueLight: '#93c5fd', // blue-300
    blueDark: '#2563eb', // blue-600
  },
  neutral: {
    gray900: '#111827',
    gray800: '#1f2937',
    gray700: '#374151',
    gray600: '#4b5563',
    gray400: '#9ca3af',
    gray300: '#d1d5db',
    white: '#ffffff',
  },
  background: {
    primary: '#1a1a1a',
    secondary: '#242424',
    card: '#212121',
    dark: '#0a0a0a',
  }
};

export const GRADIENTS = {
  primary: 'from-orange-400 to-orange-600',
  card: 'from-slate-900 via-gray-900 to-black',
  section: 'from-[#1A1A1A] via-[#242424] to-[#1A1A1A]',
  glow: 'from-orange-400/5 via-transparent to-blue-400/5',
};

export const SHADOWS = {
  card: 'shadow-xl hover:shadow-2xl hover:shadow-orange-400/10',
  glow: 'shadow-lg hover:shadow-orange-400/20',
};

export const TRANSITIONS = {
  default: 'transition-all duration-300',
  slow: 'transition-all duration-500',
  fast: 'transition-all duration-200',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const SPACING = {
  section: {
    padding: 'p-6 sm:p-8 lg:p-10',
    margin: 'mx-4 sm:mx-6 md:mx-10 lg:mx-14 my-16 sm:my-24 lg:my-32',
    gap: 'gap-8 sm:gap-12',
  },
  card: {
    padding: 'p-4 sm:p-5',
    margin: 'gap-4 sm:gap-6',
  }
};
