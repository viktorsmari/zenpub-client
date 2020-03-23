import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { Trans } from '@lingui/react';
import { Row } from 'ui/modules/Modal';
// import DropzoneArea from '../../../components/elements/DropzoneModal';

export interface Props {
  ActivitiesBox?: JSX.Element; //FIXME remove ? after HOC
}

const Flags: React.FC<Props> = ({
  // formik,
  ActivitiesBox
}) => {
  return (
    <Box>
      <Text px={3} mt={2} variant="heading">
        <Trans>Flags</Trans>
      </Text>
      <Row>
        <Box mt={2}>{ActivitiesBox}</Box>
      </Row>
    </Box>
  );
};

export default Flags;
