import orms from '../orms';

export const syncDB = (): void => {
  Object.keys(orms).forEach((key) => {
    // @ts-ignore
    orms[key].updateSchema();
  });
};
