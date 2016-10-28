# vuebug-withrouter


How to test?

> npm install
> npm run dev

When 
'''
Vue.use(VueRouter)
'''
line in main.ts is commented then the code will work.

But if we uncomment that line this project does not work.
We will get an error in browser console. 
'''
[Vue warn]: Failed to mount component: template or render function not defined. 
(found in component <users>)
'''

