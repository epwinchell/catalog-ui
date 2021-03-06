import { toolbarComponentTypes } from '../toolbar-mapper';
import { ToolbarSchema } from '../toolbar-renderer';

const createOrdersToolbarSchema = (): ToolbarSchema => ({
  fields: [
    {
      component: toolbarComponentTypes.TOP_TOOLBAR,
      className: 'orders pf-u-p-lg',
      key: 'orders-toolbar',
      fields: [
        {
          component: toolbarComponentTypes.TOP_TOOLBAR_TITLE,
          key: 'orders-toolbar-title',
          title: 'Orders',
          className: ''
        }
      ]
    }
  ]
});

export default createOrdersToolbarSchema;
