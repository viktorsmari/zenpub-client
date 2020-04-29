import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { useMemo } from 'react';
import { ExecutionResult, GraphQLError } from 'graphql';
export interface ShowToast {
  content: ToastContent;
  options?: ToastOptions;
}
interface Opts<Data> {
  ctx?: string;
  noShowError?: boolean;
  noShowSuccess?: boolean;
  errorMsg?: (errors: readonly GraphQLError[]) => string;
  successMsg?: (data: Data) => string;
}
const defaultErrorMsg = (ctx: string, errors: readonly GraphQLError[]) => {
  const errorMsg = errors.map(_ => _.message).join('\n');
  return `Ooops, something went wrong with ${ctx}: \n${errorMsg}`;
};
const defaultSuccessMsg = (ctx: string) => `${ctx} success`;
export const useToast = () => {
  return useMemo(() => {
    const showToast = ({ content, options }: ShowToast) =>
      toast(content, options);
    const gqlResponseToast = <Data>(opts: Opts<Data> = {}) => (
      resp: ExecutionResult<Data>
    ) => {
      if (resp.errors && !opts.noShowError) {
        const errorMsg = opts.errorMsg
          ? opts.errorMsg(resp.errors)
          : defaultErrorMsg(opts.ctx || '', resp.errors);
        toast(errorMsg, { type: 'error' });
      } else if (!resp.errors && resp.data && !opts.noShowSuccess) {
        const successMsg = opts.successMsg
          ? opts.successMsg(resp.data)
          : defaultSuccessMsg(opts.ctx || '');
        toast(successMsg, { type: 'success' });
      }
      return resp;
    };

    return {
      showToast,
      gqlResponseToast
    };
  }, []);
};
