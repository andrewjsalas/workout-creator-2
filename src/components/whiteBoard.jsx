import { Card, Button } from 'react-bootstrap'

const whiteBoard = () => {
  return (
    <div className='container'>
      <Card className='whiteboard-card text-center' style={{width: '28rem'}}>
        <Card.Body >
          <Card.Title className='whiteboard-title'>My Whiteboard</Card.Title>
          <Card.Text className='whiteboard-text'>
            This is your Whiteboard. Each whiteboard represents its own workout 
            plan. Hit 'Create' to start a blank whiteboard. 
          </Card.Text>
          <Button varient='primary'>Create</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default whiteBoard