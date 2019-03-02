import path from 'path';
import { uniqBy, find } from 'lodash';

export default function uniqNames(files) {
  const fileNames = files.map(file => path.parse(file));
  if (fileNames.length !== uniqBy(fileNames, i => i.base).length) {
    const duplicates = fileNames.reduce((acc, file, index) => {
      const next = find(
        fileNames,
        nextFile => file.base === nextFile.base,
        index + 1
      );
      if (next) {
        return [...acc, [file, next]];
      }
      return acc;
    }, []);
    duplicates.forEach(([a, b]) => {
      console.error(
        `Found to duplicated icons with name ${a.base} in ${a.dir} and ${b.dir}`
      );
    });
    return false;
  }
  return true;
}
