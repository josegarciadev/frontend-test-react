import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { NavBar, NoMatch, SideBar } from '..';
import { Categories, Home, Products } from '../../components';
import styles from './DashboardContent.module.css'

const DashboardContent = () => {
    return (
        <div className={`${styles.content} bg-body`}>
            <Router>
            <SideBar/>
            <NavBar/>
            <div className='container'>
            
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/category' component={Categories}/>
                    <Route exact path='/products' component={Products}/>
                    <Route path="*" component={NoMatch} />
                </Switch>
            
            </div>
            </Router>
        </div>
    )
}

export default DashboardContent
