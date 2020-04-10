import * as Yup from 'yup';
import Maybe from 'graphql/tsutils/Maybe';
import { UploadInput } from 'graphql/types.generated';
export * from 'yup';

Yup.addMethod(Yup.mixed, 'UploadInput', function(formats, parseStrict) {
  return this.transform(function(
    value,
    originalValue
  ): UploadInput | undefined {
    return getMaybeUploadInput(value);
  });
});

export const getMaybeUploadInput = (
  maybeFileOrString: Maybe<File | string>
): UploadInput | undefined =>
  void 0 === maybeFileOrString || null === maybeFileOrString
    ? void 0
    : getUploadInput(maybeFileOrString);

export const getUploadInput = (fileOrString: File | string): UploadInput =>
  'string' === typeof fileOrString
    ? { url: fileOrString }
    : { upload: fileOrString };

declare module 'yup' {
  interface MixedSchema<T = any> extends Schema<T> {
    UploadInput(): MixedSchema<UploadInput>;
  }
}
