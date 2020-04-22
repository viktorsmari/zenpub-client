import { Flag } from 'graphql/types.generated'
import { useMemo } from 'react'
import { useFlagPreviewDataQuery } from './useFlagPreview.generated'

export const useFlagPreview(flagId:Flag['id']){

  const flagQ = useFlagPreviewDataQuery({variables:{flagId}})
  flagQ.
  return useMemo(()=>{
  return {

  }  
  },[

  ])
}