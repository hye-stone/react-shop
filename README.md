
# 📖 React (shopping-cart project)
![React](https://img.shields.io/badge/React-v17.0.2-%2361DAFB?style=flat&logo=React&logoColor=#61DAFB&)
![Rdux](https://img.shields.io/badge/Redux-v4.1.2-%23764ABC?style=flat&logo=Redux&logoColor=#764ABC)
![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.1.3-%237952B3?style=flat&logo=Bootastrap&logoColor=#764ABC)
![npm](https://img.shields.io/badge/npm-v8.1.2-black)
![node](https://img.shields.io/badge/node-v16.13.1-black)

Demo: https://hye-stone.github.io/
 
- 상품 페이지에서 상품을 보고 상품을 누르면 각각의 `detail 페이지`로 이동한다.
- `detail 페이지`에서 구매하기 버튼을 누르면 `장바구니 페이지`로 이동하며 상품이 자동으로 추가된다.
- 같은 상품이 이미 장바구니에 있으면 `alert`와 함께 수량 `1이` 추가된다.
- 상품은 최소한 `1개`의 수량을 가지고 있으며, `10개`까지 구매할 수 있다.
- 장바구니에 담긴 상품은 브라우저를 `새로고침(reload)`해도 유지된다.
- 최근 본 상품은 detail 페이지에서 사이드바로 최대 `6상품`을 보여준다.
 
## ⏱ Project Period
2021.12.21 ~ 2021.12.28 (총 8일)

## 🔎 Directory Structure
```bash
└── src
    ├── App.js
    ├── App.css
    ├── Detail.js
    ├── Detail.scss
    ├── Cart.js
    ├── Cart.css
    ├── index.js
    ├── index.css
    ├── data.js
    └── App.test.js

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
