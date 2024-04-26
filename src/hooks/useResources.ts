
import { Photos } from '@/types/cloudinary';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface UseResources {
  initialResources?: Array<Photos> 
}
export function useResources (options?: UseResources ) {

  const queryClient = useQueryClient();

  const {data: resources} = useQuery({
    queryKey: ['resources'],
    queryFn: async () =>{
        const {data} = await fetch('/api/resources').then(r => r.json())
        return data;
    },
    initialData: options?.initialResources
  })

  const addResources = (newResources: Array<Photos>) => {
    queryClient.setQueriesData(['resources'], (old: Array<Photos>)=>{
      return([...newResources, ...old])

    })
  }

  return{
    resources,
    addResources

  }
}