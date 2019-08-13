import { Flex, Text, Image } from 'rebass';
import * as React from 'react';

interface Props {
  name?: string;
  src: string;
  rest?: any;
  onClick?: any;
}

const Avatar: React.SFC<Props> = ({ name, src, ...rest }) =>
  name ? (
    <Flex alignItems="center">
      <Image
        backgroundColor={'#333'}
        src={src}
        width={48}
        height={48}
        borderRadius={9999}
        {...rest}
      />
      <Text ml={3} fontSize={[2, 3]} fontWeight={600} {...rest}>
        {name}
      </Text>
    </Flex>
  ) : (
    <Image src={src} width={48} height={48} borderRadius={9999} {...rest} />
  );

export default Avatar;
