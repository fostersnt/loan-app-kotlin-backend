import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import NProgress from 'nprogress';
import { createRoot } from 'react-dom/client'

// NProgress.configure({
//   delay: 250,          // Delay before showing the progress bar (in ms)
//   color: '#FF6384',    // Color of the progress bar
//   includeCSS: true,    // Include default NProgress CSS
//   showSpinner: false,  // Disable the spinner (can be enabled if desired)
// });

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  title: title => 'Loan App',
  // title: title => `${title} - App`,
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  //Progress bar configuration below
  // progress: {
  //   onStart: () => {
  //     NProgress.start();  // Start the progress bar when the request starts
  //   },
  //   onFinish: () => {
  //     NProgress.done();   // Complete the progress bar when the request finishes
  //   },
  //   onError: () => {
  //     NProgress.done();   // Complete the progress bar if there's an error
  //   },
  // },
  progress: {
    delay: 250,

    color: '#FF6384',
    // color: '#29d',

    // Whether to include the default NProgress styles...
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: true,
  },
})
