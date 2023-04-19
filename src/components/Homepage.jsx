
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='home-page-div d-flex justify-content-center'>
            <div className='col-md-12'>

            <Link  to="/beers" style={{ textDecoration: 'none', textAlign: 'left' }}>
                <div>
                    <img src="./assets/beers.png"/>
                    <h4>All Beers</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus augue at sollicitudin pulvinar. Mauris at arcu nec mauris condimentum suscipit. Nullam libero turpis, vehicula et varius eu.</p>

                </div>

            </Link>
            <Link  to='/random-beer' style={{ textDecoration: 'none', textAlign: 'left' }}>
                <div>
                    <img src="./assets/random-beer.png"/>
                    <h4>Random Beer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus augue at sollicitudin pulvinar. Mauris at arcu nec mauris condimentum suscipit. Nullam libero turpis, vehicula et varius.</p>

                </div>
            </Link>

            <Link to='/new-beer' style={{ textDecoration: 'none', textAlign: 'left' }}>
                <div>
                    <img src="./assets/new-beer.png"/>
                    <h4>Create New Beer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus augue at sollicitudin pulvinar. Mauris at arcu nec mauris condimentum suscipit. Nullam libero turpis, vehicula et varius.</p>

                </div>
            </Link>
            </div>

        </div>
    )
}
export default HomePage;