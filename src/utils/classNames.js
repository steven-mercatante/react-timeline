export function joinClassNames(classNames) {
  return classNames
    .filter(x => {
      try {
        return x.trim();
      } catch (err) {
        return x;
      }
    })
    .join(' ');
}
