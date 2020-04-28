import { UploadInput } from 'graphql/types.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { UrlString, isUrlString } from 'fe/lib/helpers/data';

export const getMaybeUploadInput = (
  maybeFileOrString: Maybe<File | string>
): UploadInput | undefined =>
  !maybeFileOrString
    ? void 0
    : isUrlString(maybeFileOrString)
    ? getUploadInput(maybeFileOrString)
    : maybeFileOrString instanceof File
    ? getUploadInput(maybeFileOrString as File)
    : void 0;

export const getUploadInput = (fileOrString: File | UrlString): UploadInput =>
  isUrlString(fileOrString) ? { url: fileOrString } : { upload: fileOrString };
