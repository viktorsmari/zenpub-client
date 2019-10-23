import styled from '../../../themes/styled';
import React, { Component } from 'react';
import { Box } from 'rebass';
import { clearFix } from 'polished';
import { Editor } from 'slate-react';
import { Value } from 'slate';

const Wrapper = styled(Box)`
  ${clearFix()} button {
    float: right;
  }
`;

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.'
          }
        ]
      }
    ]
  }
});

// interface Props {
//   content: string;
//   url: string;
//   date: string;
//   users: any[];
//   user: {
//     image: string;
//     name: string;
//     username: string;
//   };
// }

export default class CommentEditor extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: initialValue
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <Wrapper p={3}>
        <Editor value={this.state.value} onChange={this.onChange} />
      </Wrapper>
    );
  }
}
