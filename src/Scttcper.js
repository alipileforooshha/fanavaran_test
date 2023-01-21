import React from 'react';
// import {OrgChart} from '@ctrl/react-orgchart';
function Scttcper() {
  const data = {
    id: 1,
    entity: {
      id: 1,
      // base 64 image
      avatar: 'data:image/jpeg;base64,/9j....',
      name: 'Jane Doe',
      title: 'IT',
    },
    children: [
      {
        id: 2,
        entity: {
          id: 2,
          // svg example
          avatar: '<svg></svg>',
          name: 'John Foo',
          title: 'CTO',
        },
        children: [],
      },
    ],
  }

  return (
    <div>
      {/* <OrgChart tree={data} /> */}
    </div>
  )
}

export default Scttcper