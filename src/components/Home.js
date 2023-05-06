import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/1492844/screenshots/3307274/travel.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 style={{ paddingBottom: '20px' }}>Welcome to Travel Buddy</h1>
            <Link to='/travel'>
                <Button color="primary" style={{ marginBottom: '100px' }}>
                    Let's Begin
                </Button>
            </Link>
        </div>
    )
}

export default Home;
