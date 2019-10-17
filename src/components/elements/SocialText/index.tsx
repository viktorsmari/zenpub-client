import React, {
  useRef,
  useState,
  useCallback,
  MutableRefObject,
  useEffect
} from 'react';
import { dropEmoji, getEmoji } from '../../../util/emoji';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';

const PickerWrap = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
const SocialTextDiv = styled.div`
  position: relative;
  width: 100%;
`;
const SocialTextTrigger = styled.span`
  width: 10px;
  position: absolute;
  right: 10px;
  top: 0;
  cursor: pointer;
`;

const SocialTextArea = styled.textarea`
  width: 100%;
  height: 40px;
  margin-right: 40px;
  resize: none
  :focus {
    height: 160px;
  }
`;

export interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  reference?: MutableRefObject<HTMLTextAreaElement | undefined>;
}
export const SocialText: React.FC<Props> = props => {
  const ref = useRef<any>();
  const [isOpen, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!isOpen), [isOpen]);
  const addEmoji = React.useCallback(
    (code, obj) => {
      console.log(code, obj);
      if (!ref.current) {
        return;
      }
      const textarea = ref.current as HTMLTextAreaElement;
      dropEmoji(textarea, obj.name);
    },
    [ref.current]
  );
  useEffect(
    () => {
      props.reference && (props.reference.current = ref.current);
    },
    [ref.current]
  );
  return (
    <Wrapper>
      {isOpen ? (
        <PickerWrap>
          <EmojiPicker preload onEmojiClick={addEmoji} />
        </PickerWrap>
      ) : null}
      <SocialTextDiv>
        <SocialTextArea ref={ref} {...props} />
        <SocialTextTrigger onClick={toggle}>
          {getEmoji('slightly_smiling_face')}
        </SocialTextTrigger>
      </SocialTextDiv>
    </Wrapper>
  );
};
export default SocialText;
