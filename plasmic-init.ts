import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import ProductCard from '../components/ProductCard';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "tRKgBZAuUzTN3KvEpGR5FW",
      token: "ypuDqS6WGrrREGDTGjvt43z4Mdqwnqr0phEFMncehDop5M6cLc5eNxi8jvOethSR1kR4lqPECseweRazG7w",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(ProductCard, {
  name: "ProductCard",
  props: {
    // Pass in arbitrary content in the visual editing canvas
    children: 'slot',
    
    // You can have any number of slots.
    header: 'slot',
    
    // Simple scalar props
    productId: 'string',
    darkMode: 'boolean',
    
    // Some props can take an enum of options
    elevation: {
      type: 'choice',
      options: ['high', 'medium', 'flat']
    }
    
    // Some props can take an arbitrary JSON object
    config: 'object',
    
    // Some props can have dynamic configurations
    headerColor: {
      type: 'choice',
      
      // Hide the 'color' prop if no header content
      hidden: (props:any) => !props.header,
      
      // Offer different choices depending on if darkMode is on
      options: (props:any) => props.darkMode ? ['black', 'blue'] : ['yellow', 'green']
    }
  }
});