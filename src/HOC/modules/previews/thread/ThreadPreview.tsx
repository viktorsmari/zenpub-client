import { useThreadPreview } from 'fe/thread/preview/useThreadPreview';
import { Thread } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import { Text } from 'rebass/styled-components';
// import { Thread as ThreadPreviewUI, Props as ThreadPreviewProps } from 'ui/modules/Previews/Thread';

interface ThreadPreviewProps {
  content: string;
}

export interface Props {
  threadId: Thread['id'];
}

export const ThreadPreviewHOC: FC<Props> = ({ threadId }) => {
  const { thread } = useThreadPreview(threadId);

  const threadPreviewProps = useMemo<ThreadPreviewProps | null>(() => {
    if (!thread) {
      return null;
    }

    const content = thread.comments?.edges[0]?.node.content || '';

    const props: ThreadPreviewProps = {
      content
    };
    return props;
  }, [thread]);

  return (
    // threadPreviewProps && <ThreadPreviewUI {...threadPreviewProps} />
    threadPreviewProps && (
      <>
        <Text>{threadPreviewProps.content}</Text>
        <br />
      </>
    )
  );
};
