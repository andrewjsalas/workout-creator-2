import WhiteBoard from '../components/WhiteBoard'

const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <h1 className='home-header display-6'>Welcome to,</h1>
        <h1 className='home-header-title display-3'>Workout Creator</h1>
      </div>
      
      <WhiteBoard />
      
    </div>
  )
}

export default Home