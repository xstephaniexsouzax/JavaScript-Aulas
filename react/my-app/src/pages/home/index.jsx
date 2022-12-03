import { Link } from 'react-router-dom';

import { Button } from '../components/button'
import { Header } from '../components/header'

const Home = () => {
    return (
    <> 
        <Header /> 
        <Button title='teste 1'/>
        <Button variant = 'secondary' title='teste 2'/>
        <Link to="/login">Fazer Login</Link>
    </>
    )
}

export {Home}