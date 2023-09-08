import Header from '../components/common/Header';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Home=()=>{
    return (
        <Header title="Our Recipes" bgClass="bgimage">
            <Button content="SEARCH RECIPES" color='primary'
            as={Link}
            to="/recepies" size="big"/>
        </Header>
    )
}
export default Home;