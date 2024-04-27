const defaultInitializer = (index: number) => index;

export const createRange = (
  length: number,
  initializer: (index: number) => any = defaultInitializer
) => Array.from({ length }, (_, index) => initializer(index));
