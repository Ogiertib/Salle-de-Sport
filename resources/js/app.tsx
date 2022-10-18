import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { createRoot } from 'react-dom/client'

const el = document.getElementById('app')
if( !el ) {throw null}
const root = createRoot(el)
root.render(
  <InertiaApp
    // Pass props from the server down to the client app
    initialPage={JSON.parse(el.dataset.page as string)}
    // Dynamically load the required page component
    resolveComponent={(name) => import(`./pages/${name}`).then((module) => module.default)} initialComponent={''}
  
  />,
  
)
