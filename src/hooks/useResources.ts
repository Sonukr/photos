
import { Photos } from '@/types/cloudinary';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface UseResources {
  initialResources?: Array<Photos>,
  disableFetch?: boolean,
  tag?: string
}
export function useResources (options?: UseResources ) {

  const {disableFetch = false} = options || {};
  const queryClient = useQueryClient();

  const {data: resources} = useQuery({
    queryKey: ['resources', options?.tag],
    queryFn: async () =>{
        const {data} = await fetch('/api/resources').then(r => r.json())
        return data;
    },
    initialData: options?.initialResources,
    enabled: !disableFetch
  })

  const addResources = (newResources: Array<Photos>) => {
    queryClient.setQueriesData(['resources'], (old: Array<Photos>)=>{
      return([...newResources, ...old])
    });
    // invalidate query
    queryClient.invalidateQueries({
      queryKey: ['resources']
    })
  }

  return{
    resources,
    addResources

  }
}