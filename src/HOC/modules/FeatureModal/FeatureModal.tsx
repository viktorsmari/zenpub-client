import React, { FC, useMemo } from 'react';
import {
  Actor,
  useFeaturedContext,
  UseFeaturedContext
} from 'fe/context/feature/useFeatureContext';
import { useFormik } from 'formik';
import { Feature } from 'graphql/types.generated';
import FeaturedModalUI, { Props } from 'ui/modules/FeaturedModal';

export interface FeatureModal {
  ctx: Pick<Actor, 'id' | '__typename' | 'name'>;
  feature: null | Pick<Feature, 'id'>;
  done(): unknown;
}
export const FeatureModalHOC: FC<FeatureModal> = ({ ctx, feature, done }) => {
  const featuredContext = useMemo<UseFeaturedContext>(
    () =>
      feature
        ? {
            isFeatured: true,
            featureId: feature.id,
            __typename: ctx.__typename
          }
        : { isFeatured: false, actor: ctx },
    [ctx, feature]
  );

  const { toggleFeatured } = useFeaturedContext(featuredContext);

  const toggleFeaturedFormik = useFormik({
    initialValues: {},
    onSubmit: () => toggleFeatured().then(done)
  });

  const props = useMemo<null | Props>(() => {
    const props: Props = {
      isFeatured: !!feature,
      itemName: ctx.name,
      itemType: ctx.__typename || '',
      formik: toggleFeaturedFormik,
      cancel: done
    };

    return props;
  }, [ctx, done, toggleFeaturedFormik]);

  return props && <FeaturedModalUI {...props} />;
};
