import storeItems from '../components/info.json';
import { StoreItems } from "../components/StoreItems"
import { Fragment } from 'react';

export function Products () {
  return (
    <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pt-16">
        {storeItems.products.map(item => (
          <div key={item.title}>
            <StoreItems {...item} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}
