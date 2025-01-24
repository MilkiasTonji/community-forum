export const getPadding = (depth: number, isMobile: boolean) => {
  const padding = isMobile ? depth * 4 : depth * 8; // Calculate padding in pixels
  return { paddingLeft: `${padding}px` }; // Return an object for inline styles
  };