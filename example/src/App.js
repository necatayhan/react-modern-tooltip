import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Tooltip from 'react-modern-tooltip'
import 'react-modern-tooltip/dist/tooltip.css'
import './index.css'

const App = () => {
  return (
    <React.Fragment>
      <Container className='pt-5'>
        <h3>Example Coming Soon!</h3>
        <Row className='mt-3 g-5'>
          <Col>
            <Tooltip
              placement='bottomStart'
              color='red'
              trigger='click'
              rounded={false}
              content='Developers love React Modern Tooltip'
              focus
              className='me-4'
            >
              <Button>Click</Button>
            </Tooltip>

            <Tooltip
              placement='top'
              color='orange'
              focus
              content='Developers love React Modern Tooltip'
            >
              <Button>Hover</Button>
            </Tooltip>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default App
