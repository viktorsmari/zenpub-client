import { UploadInput } from 'graphql/types.generated';
import Maybe from 'graphql/tsutils/Maybe';

export const getMaybeUploadInput = (
  maybeFileOrString: Maybe<File | string>
): Maybe<UploadInput> =>
  void 0 === maybeFileOrString || null === maybeFileOrString
    ? void 0
    : getUploadInput(maybeFileOrString);

export const getUploadInput = (fileOrString: File | string): UploadInput =>
  'string' === typeof fileOrString
    ? { url: fileOrString }
    : { upload: fileOrString };
