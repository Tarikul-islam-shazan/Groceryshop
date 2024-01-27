import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGroceryProduct } from '../../models';
import firestore from '@react-native-firebase/firestore';

export const firestorApi = createApi({
    reducerPath: 'firestorApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        fetchGroceryProducts: build.query<IGroceryProduct[],void>({
            queryFn : async () => {
                try {
                    const collection = await firestore().collection('groceries').get();
                    // const querySnapshot = await getDocs(ref);
                    let groceries: IGroceryProduct[] = [];
                    collection?.forEach((doc) => {
                        groceries.push({ ...doc.data() } as IGroceryProduct);
                    });
                    return { data: groceries };
                  } catch (error: any) {
                    console.error(error.message);
                    return { error: error.message };
                  }
            },
        }),
    }),
});

export const useFetchGroceryProducts  = firestorApi.endpoints.fetchGroceryProducts.useQuery;