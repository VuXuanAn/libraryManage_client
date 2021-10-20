import './App.css';
import Homepage from './containers/homePage/HomePage'
import 'antd/dist/antd.css'
import { Route, Switch } from 'react-router';
import OurBook from './containers/allProductPage'
import DetailBook from './containers/detailProduct'
function App() {
  return (

    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/our-book" exact component={OurBook} />
      <Route path="/detail_product/:bookId" exact component={DetailBook} />
    </Switch>
  );
}

export default App;
